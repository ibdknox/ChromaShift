(ns game.lib.physics
  (:require [game.lib.core :refer [rem-c add-c all-e] :as gc]
            [jayq.core :refer [$]])
  (:require-macros [game.lib.macros :refer [component dofs letc dyn ? !]]))

(def b-Vec js/Box2D.Common.Math.b2Vec2)
(def b-BodyDef js/Box2D.Dynamics.b2BodyDef)
(def b-Body js/Box2D.Dynamics.b2Body)
(def b-FixtureDef js/Box2D.Dynamics.b2FixtureDef)
(def b-Fixture js/Box2D.Dynamics.b2Fixture)
(def b-World js/Box2D.Dynamics.b2World)
(def b-MassData js/Box2D.Collision.Shapes.b2MassData)
(def b-PolygonShape js/Box2D.Collision.Shapes.b2PolygonShape)
(def b-CircleShape js/Box2D.Collision.Shapes.b2CircleShape)
(def b-DebugDraw js/Box2D.Dynamics.b2DebugDraw)
(def b-ContactListener js/Box2D.Dynamics.b2ContactListener)

(def world nil)
(def gravity 30)
(def scale 30)

(defn scaled [n]
  (/ n scale))

(defn hscaled [n]
  (/ (scaled n) 2.0))

(let [default-box {:type :normal
                   :shape :box
                   :w 10
                   :h 10
                   :a 0
                   :sensor false
                   :bullet false
                   :density 1.0
                   :friction 0.5
                   :restitution 0.0}]
  (defn box-fixture [props]
    (let [oriented? (:x props)
          final (merge default-box props {:type oriented?})
          fix (b-FixtureDef.)
          poly (b-PolygonShape.)]
      (set! (.-isSensor fix) (final :sensor))
      (set! (.-isBullet fix) (final :bullet))
      (set! (.-density fix) (final :density))
      (set! (.-friction fix) (final :friction))
      (set! (.-restitution fix) (final :restitution))
      (set! (.-userData fix) (final :data))
      (if oriented?
        (.SetAsOrientedBox poly
                           (hscaled (:w final))
                           (hscaled (:h final))
                           (b-Vec. (scaled (:x final))
                                   (scaled (:y final)))
                           (:a final))
        (.SetAsBox poly
                   (hscaled (:w final))
                   (hscaled (:h final))))
      (set! (.-shape fix) poly)
      fix)))

(component simulate [props fixs]
           :props props
           :fixtures fixs)

(component unsimulate [])

(component body [b]
           :body b)

(defn init-debug [canvas]
  (let [deb (b-DebugDraw.)]
    (.SetSprite deb (.. ($ canvas) (get 0) (getContext "2d")))
    (set! (.-m_sprite.graphics.clear deb) (fn []))
    (.SetDrawScale deb scale)
    (.SetFillAlpha deb 0.3)
    (.SetAlpha deb 0.8)
    (.SetLineThickness deb 1.0)
    (.SetFlags deb (bit-or (.-e_shapeBit b-DebugDraw) (.-e_jointBit b-DebugDraw)))
    deb))

(def ons (array))
(def offs (array))

(defn on-contact [contact]
  (let [a (.GetFixtureA contact)
        b (.GetFixtureB contact)]
    (dofs [l ons]
          (l a b))))

(defn off-contact [contact]
  (let [a (.GetFixtureA contact)
        b (.GetFixtureB contact)]
    (dofs [l offs]
          (l a b))))

(defn contact-listener [world]
  (let [listener (b-ContactListener.)]
    (set! (.-BeginContact listener) on-contact)
    (set! (.-EndContact listener) off-contact)
    (.SetContactListener world listener)))

(defn init [canvas]
  (set! world (b-World. (b-Vec. 0 gravity) true))
  (contact-listener world)
  (.SetDebugDraw world (init-debug canvas)))

(defn ->body [e sim]
  (letc e [pos :position]
        (let [cur-body (b-BodyDef.)
              props (? sim :props)
              body-type (if (:static props)
                          (.-b2_staticBody b-Body)
                          (.-b2_dynamicBody b-Body))]
          (doseq [[k v] (dissoc props :static)]
            (aset cur-body (name k) v))
          (set! (.-type cur-body) body-type)
          (set! (.-position.x cur-body) (scaled (? pos :x) ))
          (set! (.-position.y cur-body) (scaled (? pos :y) ))
          (set! (.-angle cur-body) (? pos :a))
          (set! (.-userData cur-body) e)
          cur-body)))

(defn contact! [b e]
  (.push ons b)
  (.push offs e))

(defn add! [body fixs]
  (let [body (.. world (CreateBody body))]
    (doseq [f fixs]
      (.. body (CreateFixture f)))
    body))

(defn simulate-new [ents]
  (dofs [e ents]
        (letc e [sim :simulate]
              (let [fixs (? sim :fixtures)
                    b (->body e sim)
                    b (add! b fixs)]
                (add-c e (body b))
                (rem-c e :simulate)))))

(defn rem! [e]
  (letc e [body :body]
        (.DestroyBody world (? body :body))
        (rem-c e :body)))

(defn remove-unsimulate [ents]
  (dofs [e ents]
        (rem! e)))

(defn ->velocity [e]
  (letc e [bod :body]
        (let [vel (.GetLinearVelocity (? bod :body))]
          vel)))

(defn velocity [e x y]
  (letc e [bod :body]   
          (let [b (? bod :body)
                cur-vel (.GetLinearVelocity b)]
            (.SetLinearVelocity b (b-Vec. (or x (.-x cur-vel)) (or y (.-y cur-vel)))))))

(defn impulse [e x y]
   (letc e [body :body]
         (let [body (? body :body)]
           (.ApplyImpulse body
                          (b-Vec. x y)
                          (.GetWorldCenter body)))))

(defn reposition [ents]
  (dofs [e ents]
        (letc e [pos :position
                 body :body]
              (let [body (? body :body)
                    bpos (.GetWorldCenter body)]
                (! pos :x (* (.-x bpos) scale))
                (! pos :y (* (.-y bpos) scale))
                (! pos :a (.GetAngle body))
                ))))

(defn set-position [ent x y]
  (letc ent [body :body]
        (let [body (? body :body)]
          (.SetPosition body (b-Vec. (scaled x) (scaled y))))))

(defn clear! []
  (when world
    (let [bodies (.GetBodyList world)]
      (.log js/console world)
      (loop [b bodies]
        (when b
          (.DestroyBody world b)
          (recur (.GetNext b)))))))

(defn fix->ent [fix]
  (.. fix (GetBody) (GetUserData)))

(defn add|rem []
  (simulate-new (all-e :simulate))
  (remove-unsimulate (all-e :unsimulate)))

(defn step []
  (.Step world (/ 1 60) 8 3)
  (reposition (all-e :body))
  (.ClearForces world))
