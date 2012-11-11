(ns game.levels.opening
  (:require [game.lib.core :refer [load-scene clear! >< all-e]]
            [game.lib.physics :as phys]
            [game.util :refer [adjust-center brush offset]]
            [game.renderers :refer [render-player render-ground render-chroma-ground
                                    render-mine render-hint render-chromaton render-score
                                    draw-image]]
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

(defn level []
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
    
    :mine [(renderable (dyn render-mine))
           (trippable)
           (object-layer)
           (single-use)
           (deadly)
           (position 100 387 0)
           (dimensions 30 15)
           (chroma-activated chr/color)
           (phys/simulate {:static true}
                          [(phys/box-fixture {:w 30 :h 15})])

           ]

    :hint [(renderable (dyn render-hint))
           (trippable)
           (hint "Land mines will kill you.")
           (object-layer)
           (position -30 300)
           (dimensions 200 80)
           (phys/simulate {:static true}
                          [(phys/box-fixture {:w 200 :h 200 :sensor true})])]

    :respawn [(trippable)
              (respawn 600 330)
              (position 600 300)
              (phys/simulate {:static true}
                             [(phys/box-fixture {:w 200 :h 200 :sensor true})])]
    
    :chromaton [(renderable (dyn render-chromaton))
                (trippable)
                (object-layer)
                (chromaton)
                (single-use)
                (position 50 390 0)
                (dimensions 10 10)
                (phys/simulate {:static true}
                               [(phys/box-fixture {:w 10 :h 10 :sensor true})])
                
                ]
    :chromaton [(renderable (dyn render-chromaton))
                (trippable)
                (chromaton)
                (single-use)
                (object-layer)
                (position 450 390 0)
                (dimensions 10 10)
                (phys/simulate {:static true}
                               [(phys/box-fixture {:w 10 :h 10 :sensor true})])
                
                ]
    :chromaton [(renderable (dyn render-chromaton))
                (trippable)
                (object-layer)
                (single-use)
                (chromaton 20)
                (position 550 390 0)
                (dimensions 10 10)
                (phys/simulate {:static true}
                               [(phys/box-fixture {:w 10 :h 10 :sensor true})])
                
                ]
    :chromaton [(renderable (dyn render-chromaton))
                (trippable)
                (chromaton)
                (single-use)
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
                         (single-use)
                         (position 50 390 0)
                         (dimensions 10 10)
                         (phys/simulate {:static true}
                                        [(phys/box-fixture {:w 10 :h 10 :sensor true})])
                         
                         ]
             :chromaton [(renderable (dyn render-chromaton))
                         (trippable)
                         (chromaton)
                         (single-use)
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
                         (single-use)
                         (position 550 390 0)
                         (dimensions 10 10)
                         (phys/simulate {:static true}
                                        [(phys/box-fixture {:w 10 :h 10 :sensor true})])
                         
                         ]
             :chromaton [(renderable (dyn render-chromaton))
                         (trippable)
                         (chromaton)
                         (single-use)
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

;(load-scene (level))

;(clear!)