(ns game.levels.opening
  (:require [game.lib.core :refer [load-scene clear! >< all-e]]
            [game.lib.physics :as phys]
            [game.util :refer [adjust-center brush offset]]
            [game.systems.sync :as sync]
            [game.systems.chroma :as chr]
            [game.lib.assets :as assets]
            [game.entities.background :as bg])
  (:require-macros [game.lib.macros :refer [dyn letc ? !]])
  (:use [game.comps :only [renderable position dimensions player-actions
                           jump camera player chroma chroma-activated spawn
                           health trippable deadly blocked bouncy chromaton
                           solid points static-renderable animated backing-layer
                           terrain-layer object-layer overlay-layer keyboard
                           opponent synced facing pos-offset]]))

;;THINGS TO DO TODAY
;;
;; projectiles
;; render layers (the overlapping is wrong) [done]
;; animations [done?]
;; server
;; 	- points
;;	- syncing
;; drawing the other player
;; cross-player chromashifting

(def ->color {:blue "#77f"
              :green "#50f050"})

(defn load-clear [scene]
  (phys/clear!)
  (load-scene scene))

(defn render-player [ent]
  (letc ent [pos :position
             dim :dimensions
             chroma :chroma]
        (let [color (if (? chroma :active)
                      (->color (? chroma :color))
                      "#666")]
          (.fillStyle brush color)
          (.rect brush (>< (adjust-center pos dim) dim))
        )))

(defn render-ground [ent]
  (letc ent [pos :position
             dim :dimensions]
        (.fillStyle brush "#666")
        (.rect brush (>< (adjust-center pos dim) dim))))

(defn render-chroma-ground [ent]
  (letc ent [pos :position
             dim :dimensions
             chroma :chroma-activated]
        (.save brush)
        (when-not (? chroma :active)
          (.opacity brush 0.5))
        (.fillStyle brush (->color (? chroma :color)))
        (.rect brush (>< (adjust-center pos dim) dim))
        (.restore brush)))

(defn render-mine [ent]
   (letc ent [pos :position
             dim :dimensions
             chroma :chroma-activated]
        (.save brush)
        (when-not (? chroma :active)
          (.opacity brush 0.5))
        (.fillStyle brush "red")
        (.rect brush (>< (adjust-center pos dim) dim))
        (.restore brush)))

(defn render-chromaton [ent]
    (letc ent [pos :position
               dim :dimensions]
        (.fillStyle brush "#fff")
        (.rect brush (>< (adjust-center pos dim) dim))))

(defn render-score [ent]
  (let [player (first (all-e :player))]
    (letc ent [pos :position]
          (letc player [points :points]
                (.fillStyle brush "#fff")
                (.font brush "12pt Helvetica")
                (.text brush pos (str (? points :points)))))))

(def s (assets/load-set :test {:running {:type :image :src "/assets/img/running.png"}
                               :standing {:type :image :src "/assets/img/standing.png"}
                               :jumping {:type :image :src "/assets/img/jumping.png"}
                               :death {:type :image :src "/assets/img/death.png"}}
                 #()))

(identity (-> @s :items :standing :elem))

(def animations
  {:running-right {:frames 11
             :speed 3
             :img (-> @s :items :running :elem)
             :x 0
             :y 0
             :w 57
             :h 70}
   :running-left {:frames 11
                  :speed 3
                  :img (-> @s :items :running :elem)
                  :x 0
                  :y 70
                  :w 57
                  :h 70}
   :standing-right {:frames 0
                    :speed 0
                    :img (-> @s :items :standing :elem)
                    :x 0
                    :y 0
                    :w 57
                    :h 70}
   :standing-left {:frames 0
                   :speed 0
                   :img (-> @s :items :standing :elem)
                   :x 0
                   :y 70
                   :w 57
                   :h 70}
   :jump-right {:frames 1
                :speed 15
                :freeze true
                :img (-> @s :items :jumping :elem)
                :x 0
                :y 0
                :w 57
                :h 70}
   :jump-left {:frames 1
               :speed 15
               :freeze true
               :img (-> @s :items :jumping :elem)
               :x 0
               :y 70
               :w 57
               :h 70}
   :falling-right {:frames 2
                   :speed 5
                   :freeze true
                   :img (-> @s :items :jumping :elem)
                   :x 114
                   :y 0
                   :w 57
                   :h 70}
   :falling-left {:frames 2
                  :speed 5
                  :freeze true
                  :img (-> @s :items :jumping :elem)
                  :x 114
                  :y 70
                  :w 57
                  :h 70}
   :death {:frames 10
           :speed 3
           :freeze true
           :img (-> @s :items :death :elem)
           :x 0
           :y 0
           :w 68
           :h 93}

   })

(defn animate [anim pos dim]
  (let [a (animations (? anim :animation))] ;;TODO: this lookup is slow.
    (when (= 0 (? anim :count))
      (! anim :frame (inc (? anim :frame)))
      (! anim :count (:speed a)))
    (when (and (> (? anim :count) 0)
               (<= (? anim :frame) (:frames a)))
      (! anim :count (dec (? anim :count))))
    (when (and (> (? anim :frame) (:frames a))
               (not (:freeze a)))
      (! anim :frame 0))
    (.clippedImage brush (:img a) (* (? anim :frame) (:w a)) (:y a) (:w a) (:h a) (adjust-center pos (js-obj :hw (/ (:w a) 2) :hh (/ (:h a) 2))))))

(defn draw-image [ent]
  (when-let [img (-> @s :items :standing :elem)]
    (letc ent [pos :position
               rend :renderable
               dim :dimensions
               anim :animated
               chroma :chroma]
          (.save brush)
          (when-not (? chroma :active)
            (.opacity brush 0.5))
          ;(.image brush img (adjust-center pos dim))
          (animate anim pos dim)
          (.restore brush)
        )))


(defn level []
  (.log js/console chr/opponent-color)
  (concat 
   [:background [(renderable (dyn bg/render-normal))
                 (backing-layer)
                 (position 250 250 0)
                 (dimensions 2000 1500)]
    :camera [(position 0 0)
             (dimensions 500 500)
             (camera)]
    
    :score [(position 470 30)
            (overlay-layer)
            (renderable (dyn render-score))]
    
    :player [(renderable (dyn draw-image))
             (position 20 300 0)
             (dimensions 57 70)
             (keyboard)
             (chroma chr/color)
             (animated :standing-right)
             (facing)
             (synced)
             (blocked)
             (player)
             (points)
             (spawn 20 300)
             (health)
             (player-actions)
             (jump)
             (phys/simulate {:fixedRotation true
                             :allowSleep false} 
                            [(phys/box-fixture {:w 25 :h 70 :restitution 0})
                             (phys/box-fixture {:w 5 :h 67 :x -12 :y 0 :density 0 :data :left-side :sensor true})
                             (phys/box-fixture {:w 5 :h 67 :x 12 :y 0 :density 0 :data :right-side :sensor true})
                             (phys/box-fixture {:w 15 :h 10 :x 0 :y 35 :density 0 :data :foot :sensor true})])]
    
    :bounce [(renderable (dyn render-chroma-ground))
             (trippable)
             (terrain-layer)
             (bouncy)
             (position 100 290 0)
             (dimensions 40 2)
             (chroma-activated chr/color)
             (phys/simulate {:static true}
                            [(phys/box-fixture {:w 40 :h 2 :sensor true})])
             
             ]
    
    :mine [(renderable (dyn render-chroma-ground))
           (trippable)
           (object-layer)
           (deadly)
           (position 100 390 0)
           (dimensions 10 10)
           (chroma-activated chr/color)
           (phys/simulate {:static true}
                          [(phys/box-fixture {:w 10 :h 10})])
           
           ]
    
    :chromaton [(renderable (dyn render-chromaton))
                (trippable)
                (object-layer)
                (chromaton)
                (position 50 390 0)
                (dimensions 10 10)
                (phys/simulate {:static true}
                               [(phys/box-fixture {:w 10 :h 10 :sensor true})])
                
                ]
    :chromaton [(renderable (dyn render-chromaton))
                (trippable)
                (chromaton)
                (object-layer)
                (position 450 390 0)
                (dimensions 10 10)
                (phys/simulate {:static true}
                               [(phys/box-fixture {:w 10 :h 10 :sensor true})])
                
                ]
    :chromaton [(renderable (dyn render-chromaton))
                (trippable)
                (object-layer)
                (chromaton 20)
                (position 550 390 0)
                (dimensions 10 10)
                (phys/simulate {:static true}
                               [(phys/box-fixture {:w 10 :h 10 :sensor true})])
                
                ]
    :chromaton [(renderable (dyn render-chromaton))
                (trippable)
                (chromaton)
                (object-layer)
                (position 650 390 0)
                (dimensions 10 10)
                (phys/simulate {:static true}
                               [(phys/box-fixture {:w 10 :h 10 :sensor true})])
                
                ]
    
    :platform [(renderable (dyn render-ground))
               (position 10 400 0)
               (solid)
               (terrain-layer)
               (dimensions 400 10)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 400 :h 10})])]
    
    :platform [(renderable (dyn render-ground))
               (position 700 400 0)
               (solid)
               (terrain-layer)
               (dimensions 600 10)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 600 :h 10})])]
    
    :platform [(renderable (dyn render-chroma-ground))
               (position 370 120 0)
               (solid)
               (terrain-layer)
               (dimensions 10 100)
               (chroma-activated chr/color)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 10 :h 100})])]
    
    :platform [(renderable (dyn render-chroma-ground))
               (position 100 300 0)
               (solid)
               (terrain-layer)
               (dimensions 100 10)
               (chroma-activated chr/color)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 100 :h 10})])]
    
    :platform [(renderable (dyn render-chroma-ground))
               (position 300 500 0)
               (solid)
               (terrain-layer)
               (dimensions 100 10)
               (chroma-activated chr/opponent-color)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 100 :h 10})])]
    
    :platform [(renderable (dyn render-chroma-ground))
               (position 220 200 0)
               (solid)
               (terrain-layer)
               (dimensions 50 10)
               (chroma-activated chr/color)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 50 :h 10})])]
    
    ]
   
   (binding [pos-offset offset]
     
     [:other-player [(renderable (dyn draw-image))
                     (position 20 300 0)
                            (dimensions 25 70)
                            (chroma chr/opponent-color)
                            (player)
                            (animated :standing-right)
                            (blocked)
                            (opponent)
                            (facing)
                            (points)
                            (spawn 20 300)
                            (health)
                            (player-actions)
                            (jump)
                            (phys/simulate {:fixedRotation true
                                            :allowSleep false} 
                                           [(phys/box-fixture {:w 25 :h 70})
                                            (phys/box-fixture {:w 5 :h 67 :x -12 :y 0 :density 0 :data :left-side :sensor true})
                                            (phys/box-fixture {:w 5 :h 67 :x 12 :y 0 :density 0 :data :right-side :sensor true})
                                            (phys/box-fixture {:w 15 :h 10 :x 0 :y 35 :density 0 :data :foot :sensor true})])]
             
             :bounce [(renderable (dyn render-chroma-ground))
                      (trippable)
                      (terrain-layer)
                      (bouncy)
                      (position 100 290 0)
                      (dimensions 40 2)
                      (chroma-activated chr/opponent-color)
                      (phys/simulate {:static true}
                                     [(phys/box-fixture {:w 40 :h 2 :sensor true})])
                      
                      ]
             
             :mine [(renderable (dyn render-chroma-ground))
                    (trippable)
                    (object-layer)
                    (deadly)
                    (position 100 390 0)
                    (dimensions 10 10)
                    (chroma-activated chr/opponent-color)
                    (phys/simulate {:static true}
                                   [(phys/box-fixture {:w 10 :h 10})])
                    
                    ]
             
             :chromaton [(renderable (dyn render-chromaton))
                         (trippable)
                         (object-layer)
                         (chromaton)
                         (position 50 390 0)
                         (dimensions 10 10)
                         (phys/simulate {:static true}
                                        [(phys/box-fixture {:w 10 :h 10 :sensor true})])
                         
                         ]
             :chromaton [(renderable (dyn render-chromaton))
                         (trippable)
                         (chromaton)
                         (object-layer)
                         (position 450 390 0)
                         (dimensions 10 10)
                         (phys/simulate {:static true}
                                        [(phys/box-fixture {:w 10 :h 10 :sensor true})])
                         
                         ]
             :chromaton [(renderable (dyn render-chromaton))
                         (trippable)
                         (object-layer)
                         (chromaton 20)
                         (position 550 390 0)
                         (dimensions 10 10)
                         (phys/simulate {:static true}
                                        [(phys/box-fixture {:w 10 :h 10 :sensor true})])
                         
                         ]
             :chromaton [(renderable (dyn render-chromaton))
                         (trippable)
                         (chromaton)
                         (object-layer)
                         (position 650 390 0)
                         (dimensions 10 10)
                         (phys/simulate {:static true}
                                        [(phys/box-fixture {:w 10 :h 10 :sensor true})])
                         
                         ]
             
             :platform [(renderable (dyn render-ground))
                        (position 10 400 0)
                        (solid)
                        (terrain-layer)
                        (dimensions 400 10)
                        (phys/simulate {:static true}
                                       [(phys/box-fixture {:w 400 :h 10})])]
             
             :platform [(renderable (dyn render-ground))
                        (position 700 400 0)
                        (solid)
                        (terrain-layer)
                        (dimensions 600 10)
                        (phys/simulate {:static true}
                                       [(phys/box-fixture {:w 600 :h 10})])]
             
             :platform [(renderable (dyn render-chroma-ground))
                        (position 370 120 0)
                        (solid)
                        (terrain-layer)
                        (dimensions 10 100)
                        (chroma-activated chr/opponent-color)
                        (phys/simulate {:static true}
                                       [(phys/box-fixture {:w 10 :h 100})])]
             
             :platform [(renderable (dyn render-chroma-ground))
                        (position 100 300 0)
                        (solid)
                        (terrain-layer)
                        (dimensions 100 10)
                        (chroma-activated chr/opponent-color)
                        (phys/simulate {:static true}
                                       [(phys/box-fixture {:w 100 :h 10})])]
             
             :platform [(renderable (dyn render-chroma-ground))
                        (position 300 500 0)
                        (solid)
                        (terrain-layer)
                        (dimensions 100 10)
                        (chroma-activated chr/color)
                        (phys/simulate {:static true}
                                       [(phys/box-fixture {:w 100 :h 10})])]
             
             :platform [(renderable (dyn render-chroma-ground))
                        (position 220 200 0)
                        (solid)
                        (terrain-layer)
                        (dimensions 50 10)
                        (chroma-activated chr/opponent-color)
                        (phys/simulate {:static true}
                                       [(phys/box-fixture {:w 50 :h 10})])]
             
             ])

            ))

;(load-scene scene)

;(clear!)