(ns game.lib.util)

(defn every [ms func]
  (js/setInterval func ms))

(defn wait [ms func]
  (js/setTimeout func ms))

(defn now []
  (.getTime (js/Date.)))
