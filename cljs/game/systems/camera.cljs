(ns game.systems.camera
  (:require [game.lib.core :refer [all-e as]]
            [game.util :refer [adjust-center brush width height]]
            [game.lib.physics :as phys])
  (:require-macros [game.lib.macros :refer [letc ? ! dofs]]))

(defn adjust-camera []
  (when-let [camera (first (all-e :camera))] ;; TODO: this assumes there's only one camera
    (letc camera [pos :position
                  dim :dimensions]
          (.translate brush (js-obj :x (+ (? pos :x) (? dim :hw)) 
                                    :y (+ (? pos :y) (* 0.5 (? dim :w))))))))

(defn follow-player [player ents]
  (when player
    (let [p-pos (as player :position)] 
      (dofs [e ents]
            (letc e [pos :position
                     dim :dimensions]
                  ;;if we're not at the edge, center the camera on the guy
                  (cond
                   ;(> (? p-pos :x) (? dim :hw)) (do (! pos :x (? p-pos :x)))
                   :else (! pos :x (- (? p-pos :x))))
                  (! pos :y (- (? p-pos :y)))
                  )))))

;;TODO: should probably implement layers here...
(defn renderer [player]
  (.clearRect brush (js-obj :w width :h height))
  (dofs [e (all-e :backing-layer)]
        (letc e [rend :renderable]
              ((? rend :fn) e)))
  (.save brush)
  (adjust-camera)
  (dofs [e (all-e :terrain-layer)]
        (letc e [rend :renderable]
              ((? rend :fn) e)))
  (dofs [e (all-e :object-layer)]
        (letc e [rend :renderable]
              ((? rend :fn) e)))
  (when player
    (letc player [rend :renderable]
          ((? rend :fn) player))))

(defn restore []
  (.restore brush)
    (dofs [e (all-e :overlay-layer)]
        (letc e [rend :renderable]
              ((? rend :fn) e))))