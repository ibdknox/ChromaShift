(ns game.systems.chroma
  (:require [game.lib.core :refer [all-e]]
            [game.lib.physics :as phys]
            [game.util :refer [destroy!]])
  (:require-macros [game.lib.macros :refer [letc ? ! dofs]]))

(def color :blue)
(def opponent-color :green)

(defn flip-active [color active]
  (dofs [e (all-e :chroma-activated)]
        (letc e [chroma :chroma-activated]
              (when (= (? chroma :color) color)
                (! chroma :active active)))))

(defn chroma [ents]
  (dofs [e ents]
        (letc e [actions :player-actions
                 chroma :chroma]
              (cond
               (> (? chroma :count) 0) (! chroma :count (dec (? chroma :count)))
               (? actions :chroma) (do 
                                     (.log js/console "color switch")
                                     (! chroma :active (not (? chroma :active)))
                                     (! chroma :count 20)
                                     (flip-active (? chroma :color) (? chroma :active))))
              )))

(defn chroma-physics [ents]
  (dofs [e ents]
        (letc e [chroma :chroma-activated
                 body :body]
              (let [body (? body :body)]
                (if (? chroma :active)
                  (.SetActive body true)
                  (.SetActive body false))
                ))))

(defn chromatons [ents]
  (dofs [e ents]
        (letc e [value :chromaton
                 trip :trippable]
              (when (? trip :active)
                (letc (? trip :target) [points :points]
                      (! points :points (+ (? points :points) (? value :value)))
                      (destroy! e)
                      )


                ))))