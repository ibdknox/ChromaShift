(ns game.util
  (:require [game.lib.physics :as phys]
            [game.lib.core :as core])
  (:require-macros [game.lib.macros :refer [? ! letc dofs]]))

(def ^:dyanmic brush nil)
(def offset 100000)

(defn adjust-center [pos dim]
  (js-obj :x (- (? pos :x) (? dim :hw)) :y (- (? pos :y) (? dim :hh))))

(defn kstr [a b]
  (keyword (str (name a) (name b))))

(def obj-equal? js/Game.equal)

(defn destroy! [e]
  (phys/rem! e)
  (core/rem! e))