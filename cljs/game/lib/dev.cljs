(ns game.lib.dev
  (:require [game.lib.physics :as phys]))

(def stats (js/Stats.))

(defn add-stats []
  (.setMode stats 2)
  (.body.appendChild js/document (.-domElement stats)))

(def begin (.-begin stats))
(def end (.-end stats))

(defn phys-debug []
  (.DrawDebugData phys/world))


