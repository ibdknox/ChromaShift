(ns game.util
  (:require [game.lib.physics :as phys]
            [jayq.core :refer [$ attr]]
            [game.lib.core :as core])
  (:require-macros [game.lib.macros :refer [? ! letc dofs]]))

(def ^:dyanmic brush nil)
(def offset 100000)
(def opponent? false)

(def width 1000)
(def height 500)

(defn resize [w h]
  (set! width w)
  (set! height h)
  (attr ($ "#game") :width w)
  (attr ($ "#game") :height h)
  (attr ($ "#opponent-game") :width w)
  (attr ($ "#opponent-game") :height h))

(defn adjust-center [pos dim]
  (js-obj :x (- (? pos :x) (? dim :hw)) :y (- (? pos :y) (? dim :hh))))

(defn kstr [a b]
  (keyword (str (name a) (name b))))

(def obj-equal? js/Game.equal)

(defn destroy! [e]
  (phys/rem! e)
  (core/rem! e))