(ns game.renderers
  (:require [game.lib.core :refer [load-scene clear! >< all-e]]
            [game.lib.physics :as phys]
            [game.util :refer [adjust-center brush offset kstr]]
            [game.systems.sync :as sync]
            [game.flow :as flow]
            [game.systems.chroma :as chr]
            [game.lib.assets :as assets]
            [game.entities.background :as bg])
  (:require-macros [game.lib.macros :refer [dyn letc ? !]])
  (:use [game.comps :only [renderable position dimensions player-actions
                           jump camera player chroma chroma-activated spawn
                           health trippable deadly blocked bouncy chromaton
                           solid points static-renderable animated backing-layer
                           terrain-layer object-layer overlay-layer keyboard
                           opponent synced facing pos-offset single-use hint
                           respawn]]))

;;THINGS TO DO TODAY
;;
;; projectiles [removed]
;; render layers (the overlapping is wrong) [done]
;; animations [done]
;; goal reached
;; hints [done]
;; respawn points [done]
;; lazorz
;; color selection
;; server
;;  - matchmaking [done]
;; 	- points
;;	- syncing [basic - done]
;; levels
;;  - intro
;;  - learn
;;  - race 1
;;  - race 2
;;  - race 3
;; copy
;; integrate site
;; drawing the other player [done]
;; cross-player chromashifting [done]

(def ->color {:blue "#33a3ff"
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
          (.opacity brush 0.4))
        (.fillStyle brush (->color (? chroma :color)))
        (.rect brush (>< (adjust-center pos dim) dim))
        (.restore brush)))

(defn render-mine [ent]
   (letc ent [pos :position
             dim :dimensions
             chroma :chroma-activated]
         (let [img (kstr (? chroma :color) "landmine")]
        (.save brush)
        (when-not (? chroma :active)
          (.opacity brush 0.5))
         (.image brush (-> @s :items img :elem) (adjust-center pos dim))
        (.restore brush))))

(defn render-hint [ent]
  (letc ent [pos :position
             dim :dimensions
             hint :hint
             trip :trippable]
        (when (or (not trip)
                  (? trip :active))
          (.fillStyle brush "#fff")
                (.font brush "14pt Share Tech")
                (.text brush (adjust-center pos dim) (? hint :hint)))))

(defn render-chromaton [ent]
    (letc ent [pos :position
               dim :dimensions]
          (.save brush)
          (.opacity brush 0.8)
          (.image brush (-> @s :items :chromaton :elem) (adjust-center pos dim))
          (.restore brush)))

(defn render-goal [ent]
    (letc ent [pos :position
               dim :dimensions]
          (.save brush)
          (.opacity brush 0.8)
          (.image brush (-> @s :items :goal :elem) (adjust-center pos dim))
          (.restore brush)))

(defn render-score [ent]
  (let [player (first (all-e :player))]
    (letc ent [pos :position]
          (letc player [points :points]
                (.fillStyle brush "#fff")
                (.font brush "14pt Share Tech")
                (.text brush pos (str (? points :points)))))))

(def s (assets/load-set :test {:bluerunning {:type :image :src "/assets/img/bluerunning.png"}
                               :bluestanding {:type :image :src "/assets/img/bluestanding.png"}
                               :bluejumping {:type :image :src "/assets/img/bluejumping.png"}
                               :bluedeath {:type :image :src "/assets/img/bluedeath.png"}
                               :bluelandmine {:type :image :src "/assets/img/bluelandmine.png"}

                               :greenrunning {:type :image :src "/assets/img/greenrunning.png"}
                               :greenstanding {:type :image :src "/assets/img/greenstanding.png"}
                               :greenjumping {:type :image :src "/assets/img/greenjumping.png"}
                               :greendeath {:type :image :src "/assets/img/greendeath.png"}
                               :greenlandmine {:type :image :src "/assets/img/greenlandmine.png"}

                               :goal {:type :image :src "/assets/img/goal.png"}
                               :chromaton {:type :image :src "/assets/img/chromaton.png"}

                               }
                 #(do 
                    (init)
                    (flow/intro)
                    )))

(defn init []

(def blue-anim 
  {:running-right {:frames 11
             :speed 3
             :img (-> @s :items :bluerunning :elem)
             :x 0
             :y 140
             :w 57
             :h 70}
   :running-left {:frames 11
                  :speed 3
                  :img (-> @s :items :bluerunning :elem)
                  :x 0
                  :y 210
                  :w 57
                  :h 70}
   :standing-right {:frames 0
                    :speed 0
                    :img (-> @s :items :bluestanding :elem)
                    :x 0
                    :y 140
                    :w 57
                    :h 70}
   :standing-left {:frames 0
                   :speed 0
                   :img (-> @s :items :bluestanding :elem)
                   :x 0
                   :y 210
                   :w 57
                   :h 70}
   :jump-right {:frames 1
                :speed 15
                :freeze true
                :img (-> @s :items :bluejumping :elem)
                :x 0
                :y 140
                :w 57
                :h 70}
   :jump-left {:frames 1
               :speed 15
               :freeze true
               :img (-> @s :items :bluejumping :elem)
               :x 0
               :y 210
               :w 57
               :h 70}
   :falling-right {:frames 2
                   :speed 5
                   :freeze true
                   :img (-> @s :items :bluejumping :elem)
                   :x 114
                   :y 140
                   :w 57
                   :h 70}
   :falling-left {:frames 2
                  :speed 5
                  :freeze true
                  :img (-> @s :items :bluejumping :elem)
                  :x 114
                  :y 210
                  :w 57
                  :h 70}
   :death {:frames 10
           :speed 3
           :freeze true
           :img (-> @s :items :bluedeath :elem)
           :x 0
           :y 70
           :w 68
           :h 93}})

(def blue-anim-off 
    {:running-right {:frames 11
             :speed 3
             :img (-> @s :items :bluerunning :elem)
             :x 0
             :y 0
             :w 57
             :h 70}
   :running-left {:frames 11
                  :speed 3
                  :img (-> @s :items :bluerunning :elem)
                  :x 0
                  :y 70
                  :w 57
                  :h 70}
   :standing-right {:frames 0
                    :speed 0
                    :img (-> @s :items :bluestanding :elem)
                    :x 0
                    :y 0
                    :w 57
                    :h 70}
   :standing-left {:frames 0
                   :speed 0
                   :img (-> @s :items :bluestanding :elem)
                   :x 0
                   :y 70
                   :w 57
                   :h 70}
   :jump-right {:frames 1
                :speed 15
                :freeze true
                :img (-> @s :items :bluejumping :elem)
                :x 0
                :y 0
                :w 57
                :h 70}
   :jump-left {:frames 1
               :speed 15
               :freeze true
               :img (-> @s :items :bluejumping :elem)
               :x 0
               :y 70
               :w 57
               :h 70}
   :falling-right {:frames 2
                   :speed 5
                   :freeze true
                   :img (-> @s :items :bluejumping :elem)
                   :x 114
                   :y 0
                   :w 57
                   :h 70}
   :falling-left {:frames 2
                  :speed 5
                  :freeze true
                  :img (-> @s :items :bluejumping :elem)
                  :x 114
                  :y 70
                  :w 57
                  :h 70}
   :death {:frames 10
           :speed 3
           :freeze true
           :img (-> @s :items :bluedeath :elem)
           :x 0
           :y 0
           :w 68
           :h 93}})

(def green-anim 
  {:running-right {:frames 11
             :speed 3
             :img (-> @s :items :greenrunning :elem)
             :x 0
             :y 140
             :w 57
             :h 70}
   :running-left {:frames 11
                  :speed 3
                  :img (-> @s :items :greenrunning :elem)
                  :x 0
                  :y 210
                  :w 57
                  :h 70}
   :standing-right {:frames 0
                    :speed 0
                    :img (-> @s :items :greenstanding :elem)
                    :x 0
                    :y 140
                    :w 57
                    :h 70}
   :standing-left {:frames 0
                   :speed 0
                   :img (-> @s :items :greenstanding :elem)
                   :x 0
                   :y 210
                   :w 57
                   :h 70}
   :jump-right {:frames 1
                :speed 15
                :freeze true
                :img (-> @s :items :greenjumping :elem)
                :x 0
                :y 140
                :w 57
                :h 70}
   :jump-left {:frames 1
               :speed 15
               :freeze true
               :img (-> @s :items :greenjumping :elem)
               :x 0
               :y 210
               :w 57
               :h 70}
   :falling-right {:frames 2
                   :speed 5
                   :freeze true
                   :img (-> @s :items :greenjumping :elem)
                   :x 114
                   :y 140
                   :w 57
                   :h 70}
   :falling-left {:frames 2
                  :speed 5
                  :freeze true
                  :img (-> @s :items :greenjumping :elem)
                  :x 114
                  :y 210
                  :w 57
                  :h 70}
   :death {:frames 10
           :speed 3
           :freeze true
           :img (-> @s :items :greendeath :elem)
           :x 0
           :y 70
           :w 68
           :h 93}})

(def green-anim-off 
    {:running-right {:frames 11
             :speed 3
             :img (-> @s :items :greenrunning :elem)
             :x 0
             :y 0
             :w 57
             :h 70}
   :running-left {:frames 11
                  :speed 3
                  :img (-> @s :items :greenrunning :elem)
                  :x 0
                  :y 70
                  :w 57
                  :h 70}
   :standing-right {:frames 0
                    :speed 0
                    :img (-> @s :items :greenstanding :elem)
                    :x 0
                    :y 0
                    :w 57
                    :h 70}
   :standing-left {:frames 0
                   :speed 0
                   :img (-> @s :items :greenstanding :elem)
                   :x 0
                   :y 70
                   :w 57
                   :h 70}
   :jump-right {:frames 1
                :speed 15
                :freeze true
                :img (-> @s :items :greenjumping :elem)
                :x 0
                :y 0
                :w 57
                :h 70}
   :jump-left {:frames 1
               :speed 15
               :freeze true
               :img (-> @s :items :greenjumping :elem)
               :x 0
               :y 70
               :w 57
               :h 70}
   :falling-right {:frames 2
                   :speed 5
                   :freeze true
                   :img (-> @s :items :greenjumping :elem)
                   :x 114
                   :y 0
                   :w 57
                   :h 70}
   :falling-left {:frames 2
                  :speed 5
                  :freeze true
                  :img (-> @s :items :greenjumping :elem)
                  :x 114
                  :y 70
                  :w 57
                  :h 70}
   :death {:frames 10
           :speed 3
           :freeze true
           :img (-> @s :items :greendeath :elem)
           :x 0
           :y 0
           :w 68
           :h 93}})

(def animations
  {:blue-on blue-anim
   :blue-off blue-anim-off
   :green-on green-anim
   :green-off green-anim-off})

 )

(defn ->anim-set [chroma]
  (keyword (str (name (? chroma :color)) "-" (if (? chroma :active) "on" "off"))))

(defn animate [chroma anim pos dim]
  (let [a ((animations (->anim-set chroma)) (? anim :animation))] ;;TODO: this lookup is slow.
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
    (letc ent [pos :position
               rend :renderable
               dim :dimensions
               anim :animated
               chroma :chroma]
          (.save brush)
          ;(.image brush img (adjust-center pos dim))
          (animate chroma anim pos dim)
          (.restore brush)
        ))