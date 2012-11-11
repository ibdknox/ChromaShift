(ns game.levels.learn
  (:require [game.lib.core :refer [load-scene clear! >< all-e]]
            [game.lib.physics :as phys]
            [game.flow :as flow]
            [game.renderers :refer [draw-image render-score render-hint 
                                    render-chromaton render-ground render-goal
                                    render-chroma-ground load-clear]]
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
                           opponent synced facing pos-offset single-use hint
                           respawn func-activate]]))

(defn render-ground [ent]
  (letc ent [pos :position
             dim :dimensions]
        (.fillStyle brush "#666")
        (.rect brush (>< (adjust-center pos dim) dim))))

(defn level []

;(load-clear
   [:background [(renderable (dyn bg/render-normal))
                 (backing-layer)
                 (position 250 250 0)
                 (dimensions 2000 1500)]
    :camera [(position 0 0)
             (dimensions 500 500)
             (camera)]

    :player [(renderable (dyn draw-image))
             (position 250 330 0)
             (dimensions 57 70)
             (keyboard)
             (chroma chr/color)
             (animated :standing-right)
             (facing)
             (synced)
             (blocked)
             (player)
             (points)
             (spawn 250 330)
             (health)
             (player-actions)
             (jump)
             (phys/simulate {:fixedRotation true
                             :allowSleep false} 
                            [(phys/box-fixture {:w 25 :h 70 :restitution 0})
                             (phys/box-fixture {:w 5 :h 67 :x -12 :y 0 :density 0 :data :left-side :sensor true})
                             (phys/box-fixture {:w 5 :h 67 :x 12 :y 0 :density 0 :data :right-side :sensor true})
                             (phys/box-fixture {:w 15 :h 10 :x 0 :y 35 :density 0 :data :foot :sensor true})])]

    :hint [(renderable (dyn render-hint))
           (trippable)
           (hint "This is you.")
           (object-layer)
           (position 250 300)
           (dimensions 70 80)
           (phys/simulate {:static true}
                          [(phys/box-fixture {:w 200 :h 200 :sensor true})])]

    :hint [(renderable (dyn render-hint))
           (trippable)
           (hint "Use the arrows to move. ->")
           (object-layer)
           (position 250 300)
           (dimensions 150 -290)
           (phys/simulate {:static true}
                          [(phys/box-fixture {:w 200 :h 200 :sensor true})])]

    :hint [(renderable (dyn render-hint))
           (trippable)
           (hint "Use z to chromashift.")
           (object-layer)
           (position 500 300)
           (dimensions 150 -290)
           (phys/simulate {:static true}
                          [(phys/box-fixture {:w 300 :h 200 :sensor true})])]

    :hint [(renderable (dyn render-hint))
           (trippable)
           (hint "Use space to jump.")
           (object-layer)
           (position 850 300)
           (dimensions 150 -290)
           (phys/simulate {:static true}
                          [(phys/box-fixture {:w 300 :h 200 :sensor true})])]

    :hint [(renderable (dyn render-hint))
           (hint "<- get this")
           (object-layer)
           (position 870 205)
           (dimensions 0 0)]

    :chromaton [(renderable (dyn render-goal))
                (trippable)
                (func-activate flow/menu)
                (single-use)
                (object-layer)
                (position 850 200 0)
                (dimensions 10 10)
                (phys/simulate {:static true}
                               [(phys/box-fixture {:w 10 :h 10 :sensor true})])
                
                ]

    :platform [(renderable (dyn render-chroma-ground))
               (position 600 300 0)
               (solid)
               (terrain-layer)
               (chroma-activated chr/color)
               (dimensions 10 200)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 10 :h 150})])]

    :platform [(renderable (dyn render-ground))
               (position 650 400 0)
               (solid)
               (terrain-layer)
               (dimensions 1200 10)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 1200 :h 10})])]

]
            )