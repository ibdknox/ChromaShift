(ns game.levels.first
  (:require [game.lib.core :refer [load-scene clear! >< all-e]]
            [game.lib.physics :as phys]
            [game.flow :as flow]
            [game.renderers :refer [draw-image render-score render-hint 
                                    render-chromaton render-ground render-goal
                                    render-chroma-ground load-clear render-mine
                                    ]]
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
   (concat 
   [:background [(renderable (dyn bg/render-normal))
                 (backing-layer)
                 (position 250 250 0)
                 (dimensions 2000 1500)]
    :camera [(position 0 0)
             (dimensions 500 500)
             (camera)]

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


    :respawn [(trippable)
              (respawn 600 330)
              (position 600 300)
              (phys/simulate {:static true}
                             [(phys/box-fixture {:w 200 :h 200 :sensor true})])]


    :platform [(renderable (dyn render-ground))
               (position 10 400 0)
               (solid)
               (terrain-layer)
               (dimensions 400 10)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 400 :h 10})])]



    :platform [(renderable (dyn render-chroma-ground))
               (position 300 200 0)
               (solid)
               (terrain-layer)
               (dimensions 10 100)
               (chroma-activated chr/color)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 10 :h 100})])]

    :platform [(renderable (dyn render-ground))
               (position 500 400 0)
               (solid)
               (terrain-layer)
               (dimensions 300 10)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 300 :h 10})])]

    :platform [(renderable (dyn render-chroma-ground))
               (position 700 300 0)
               (solid)
               (terrain-layer)
               (dimensions 100 10)
               (chroma-activated chr/color)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 100 :h 10})])]

    :bounce [(renderable (dyn render-chroma-ground))
             (trippable)
             (terrain-layer)
             (bouncy)
             (position 700 290 0)
             (dimensions 40 2)
             (chroma-activated chr/color)
             (phys/simulate {:static true}
                            [(phys/box-fixture {:w 40 :h 2 :sensor true})])]

    :platform [(renderable (dyn render-ground))
               (position 1200 200 0)
               (solid)
               (terrain-layer)
               (dimensions 400 10)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 400 :h 10})])]

    :platform [(renderable (dyn render-chroma-ground))
               (position 1500 400 0)
               (solid)
               (terrain-layer)
               (dimensions 200 10)
               (chroma-activated chr/color)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 200 :h 10})])]

    :platform [(renderable (dyn render-chroma-ground))
               (position 1800 300 0)
               (solid)
               (terrain-layer)
               (dimensions 100 10)
               (chroma-activated chr/color)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 100 :h 10})])]

    :platform [(renderable (dyn render-ground))
               (position 2100 200 0)
               (solid)
               (terrain-layer)
               (dimensions 150 10)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 150 :h 10})])]

    :mine [(renderable (dyn render-mine))
           (trippable)
           (object-layer)
           (single-use)
           (deadly)
           (position 2100 187 0)
           (dimensions 30 15)
           (chroma-activated chr/color)
           (phys/simulate {:static true}
                          [(phys/box-fixture {:w 30 :h 15})])

           ]

    :platform [(renderable (dyn render-ground))
               (position 2550 300 0)
               (solid)
               (terrain-layer)
               (dimensions 400 10)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 400 :h 10})])]

    :respawn [(trippable)
              (respawn 2550 230)
              (position 2550 250)
              (phys/simulate {:static true}
                             [(phys/box-fixture {:w 200 :h 200 :sensor true})])]

    :bounce [(renderable (dyn render-ground))
             (trippable)
             (terrain-layer)
             (bouncy)
             (position 2710 290 0)
             (dimensions 80 2)
             (phys/simulate {:static true}
                            [(phys/box-fixture {:w 80 :h 2 :sensor true})])]

    :platform [(renderable (dyn render-ground))
               (position 2950 200 0)
               (solid)
               (terrain-layer)
               (dimensions 100 10)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 100 :h 10})])]

    :platform [(renderable (dyn render-chroma-ground))
               (position 3100 -25 0)
               (solid)
               (terrain-layer)
               (dimensions 10 500)
               (chroma-activated chr/opponent-color)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 10 :h 500})])]

    :platform [(renderable (dyn render-ground))
               (position 3100 350 0)
               (solid)
               (terrain-layer)
               (dimensions 200 10)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 200 :h 10})])]

    :platform [(renderable (dyn render-ground))
               (position 3600 250 0)
               (solid)
               (terrain-layer)
               (dimensions 500 10)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 500 :h 10})])]

    :mine [(renderable (dyn render-mine))
           (trippable)
           (object-layer)
           (single-use)
           (deadly)
           (position 3500 237 0)
           (dimensions 30 15)
           (chroma-activated chr/opponent-color)
           (phys/simulate {:static true}
                          [(phys/box-fixture {:w 30 :h 15})])

           ]

    :mine [(renderable (dyn render-mine))
           (trippable)
           (object-layer)
           (single-use)
           (deadly)
           (position 3585 237 0)
           (dimensions 30 15)
           (chroma-activated chr/opponent-color)
           (phys/simulate {:static true}
                          [(phys/box-fixture {:w 30 :h 15})])

           ]

    :mine [(renderable (dyn render-mine))
           (trippable)
           (object-layer)
           (single-use)
           (deadly)
           (position 3670 237 0)
           (dimensions 30 15)
           (chroma-activated chr/opponent-color)
           (phys/simulate {:static true}
                          [(phys/box-fixture {:w 30 :h 15})])

           ]

    :mine [(renderable (dyn render-mine))
           (trippable)
           (object-layer)
           (single-use)
           (deadly)
           (position 3755 237 0)
           (dimensions 30 15)
           (chroma-activated chr/opponent-color)
           (phys/simulate {:static true}
                          [(phys/box-fixture {:w 30 :h 15})])

           ]

    :goal [(renderable (dyn render-goal))
                (trippable)
                (func-activate flow/end)
                (single-use)
                (object-layer)
                (position 3950 40 0)
                (dimensions 95 85)
                (phys/simulate {:static true}
                               [(phys/box-fixture {:w 95 :h 85 :sensor true})])
                
                ]

    
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
             
                :respawn [(trippable)
              (respawn 600 330)
              (position 600 300)
              (phys/simulate {:static true}
                             [(phys/box-fixture {:w 200 :h 200 :sensor true})])]


    :platform [(renderable (dyn render-ground))
               (position 10 400 0)
               (solid)
               (terrain-layer)
               (dimensions 400 10)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 400 :h 10})])]



    :platform [(renderable (dyn render-chroma-ground))
               (position 300 200 0)
               (solid)
               (terrain-layer)
               (dimensions 10 100)
               (chroma-activated chr/opponent-color)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 10 :h 100})])]

    :platform [(renderable (dyn render-ground))
               (position 500 400 0)
               (solid)
               (terrain-layer)
               (dimensions 300 10)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 300 :h 10})])]

    :platform [(renderable (dyn render-chroma-ground))
               (position 700 300 0)
               (solid)
               (terrain-layer)
               (dimensions 100 10)
               (chroma-activated chr/opponent-color)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 100 :h 10})])]

    :bounce [(renderable (dyn render-chroma-ground))
             (trippable)
             (terrain-layer)
             (bouncy)
             (position 700 290 0)
             (dimensions 40 2)
             (chroma-activated chr/opponent-color)
             (phys/simulate {:static true}
                            [(phys/box-fixture {:w 40 :h 2 :sensor true})])]

    :platform [(renderable (dyn render-ground))
               (position 1200 200 0)
               (solid)
               (terrain-layer)
               (dimensions 400 10)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 400 :h 10})])]

    :platform [(renderable (dyn render-chroma-ground))
               (position 1500 400 0)
               (solid)
               (terrain-layer)
               (dimensions 200 10)
               (chroma-activated chr/opponent-color)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 200 :h 10})])]

    :platform [(renderable (dyn render-chroma-ground))
               (position 1800 300 0)
               (solid)
               (terrain-layer)
               (dimensions 100 10)
               (chroma-activated chr/opponent-color)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 100 :h 10})])]

    :platform [(renderable (dyn render-ground))
               (position 2100 200 0)
               (solid)
               (terrain-layer)
               (dimensions 150 10)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 150 :h 10})])]

    :mine [(renderable (dyn render-mine))
           (trippable)
           (object-layer)
           (single-use)
           (deadly)
           (position 2100 187 0)
           (dimensions 30 15)
           (chroma-activated chr/opponent-color)
           (phys/simulate {:static true}
                          [(phys/box-fixture {:w 30 :h 15})])

           ]

    :platform [(renderable (dyn render-ground))
               (position 2550 300 0)
               (solid)
               (terrain-layer)
               (dimensions 400 10)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 400 :h 10})])]

    :respawn [(trippable)
              (respawn 2550 230)
              (position 2550 250)
              (phys/simulate {:static true}
                             [(phys/box-fixture {:w 200 :h 200 :sensor true})])]

    :bounce [(renderable (dyn render-ground))
             (trippable)
             (terrain-layer)
             (bouncy)
             (position 2710 290 0)
             (dimensions 80 2)
             (phys/simulate {:static true}
                            [(phys/box-fixture {:w 80 :h 2 :sensor true})])]

    :platform [(renderable (dyn render-ground))
               (position 2950 200 0)
               (solid)
               (terrain-layer)
               (dimensions 100 10)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 100 :h 10})])]

    :platform [(renderable (dyn render-chroma-ground))
               (position 3100 -25 0)
               (solid)
               (terrain-layer)
               (dimensions 10 500)
               (chroma-activated chr/color)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 10 :h 500})])]

    :platform [(renderable (dyn render-ground))
               (position 3100 350 0)
               (solid)
               (terrain-layer)
               (dimensions 200 10)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 200 :h 10})])]

    :platform [(renderable (dyn render-ground))
               (position 3600 250 0)
               (solid)
               (terrain-layer)
               (dimensions 500 10)
               (phys/simulate {:static true}
                              [(phys/box-fixture {:w 500 :h 10})])]

    :mine [(renderable (dyn render-mine))
           (trippable)
           (object-layer)
           (single-use)
           (deadly)
           (position 3500 237 0)
           (dimensions 30 15)
           (chroma-activated chr/color)
           (phys/simulate {:static true}
                          [(phys/box-fixture {:w 30 :h 15})])

           ]

    :mine [(renderable (dyn render-mine))
           (trippable)
           (object-layer)
           (single-use)
           (deadly)
           (position 3585 237 0)
           (dimensions 30 15)
           (chroma-activated chr/color)
           (phys/simulate {:static true}
                          [(phys/box-fixture {:w 30 :h 15})])

           ]

    :mine [(renderable (dyn render-mine))
           (trippable)
           (object-layer)
           (single-use)
           (deadly)
           (position 3670 237 0)
           (dimensions 30 15)
           (chroma-activated chr/color)
           (phys/simulate {:static true}
                          [(phys/box-fixture {:w 30 :h 15})])

           ]

    :mine [(renderable (dyn render-mine))
           (trippable)
           (object-layer)
           (single-use)
           (deadly)
           (position 3755 237 0)
           (dimensions 30 15)
           (chroma-activated chr/color)
           (phys/simulate {:static true}
                          [(phys/box-fixture {:w 30 :h 15})])

           ]

    :goal [(renderable (dyn render-goal))
                (trippable)
                (single-use)
                (object-layer)
                (position 3950 40 0)
                (dimensions 95 85)
                (phys/simulate {:static true}
                               [(phys/box-fixture {:w 95 :h 85 :sensor true})])
                
                ]
             
             ])

            ))

