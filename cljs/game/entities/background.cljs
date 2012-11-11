(ns game.entities.background
  (:require [game.lib.core :refer [><]]
            [game.util :refer [brush adjust-center]])
  (:require-macros [game.lib.macros :refer [letc ? !]]))

(defn render-normal [ent]
  (letc ent [pos :position
             dim :dimensions]
        (.fillStyle brush "black")
        (.rect brush (>< (adjust-center pos dim) dim))
        ))