(ns game.comps
  (:require-macros [game.lib.macros :refer [component]]))

(def ^:dynamic pos-offset 0)

(component position [x y a]
           :x (+ pos-offset x)
           :y y
           :a (or a 0))

(component dimensions [w h]
           :w w
           :h h
           :hw (/ w 2)
           :hh (/ h 2))

(component renderable [func]
           :fn func)

(component backing-layer [])
(component terrain-layer [])
(component object-layer [])
(component overlay-layer [])

(component player-actions []
           :can-act? true
           :move-left false
           :move-right false
           :chroma false
           :jump false)

(component synced []
           :last-actions (js-obj))

(component jump []
           :count 0
           :ground-count 0
           :falling false
           :ground true)

(component blocked []
           :left false
           :right false)

(component camera [])
(component player [current?]
           :current current?)
(component opponent [])

(component chroma [color]
           :count 0
           :color color
           :active true)

(component chroma-activated [color]
           :color color
           :active true)

(component health []
           :dead false
           :count false)

(component spawn [x y]
           :respawn false
           :x (+ pos-offset x)
           :y y)

(component respawn [x y]
           :x (+ pos-offset x)
           :y y)

(component trippable []
           :active false)

(component deadly [])
(component bouncy []
           :count 0)

(component chromaton [v]
           :value (or v 1))

(component points []
           :points 0)

(component solid [])

(component animated [anim]
           :animation anim
           :frame -1
           :count 0)

(component single-use [count]
           :counting false
           :count (or count 0))

(component keyboard [])
(component facing []
           :dir :right)

(component hint [hint]
           :hint hint)

(component func-activate [func]
           :fn func)


