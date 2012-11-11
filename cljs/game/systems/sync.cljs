(ns game.systems.sync
  (:require [goog.object :as object]
            [game.lib.core :refer [has? all-e >< load-scene]]
            [game.util :refer [obj-equal? offset]]
            [game.systems.chroma :as chr]
            [game.lib.physics :as phys])
  (:require-macros [game.lib.macros :refer [letc ? ! dofs]]))

(def sock (.connect js/io ""))

(defn emit [k v]
  (.emit sock (name k) v))

(defn action [data]
                (.log js/console "got actions")
  (dofs [e (all-e :opponent)]
        (letc e [action :player-actions
                 chroma :chroma]
              (! action :move-left (? data :move-left))
              (! action :move-right (? data :move-right))
              (! action :jump (? data :jump))
              ;(! action :chroma (? data :chroma))
              (! chroma :active (? data :active))
              (! chroma :color (? data :color))
              (chr/flip-active (? data :color) (? data :active))
              (phys/set-position e (+ offset (? data :x)) (? data :y))
              )))

(defn sync [data]
  )

(defn game-data [data]
  (set! chr/color (? data :color))
  (set! chr/opponent-color (? data :opponent-color))
  (load-scene (js/game.levels.opening.level)))

(.on sock "action" action)
(.on sock "sync" sync)
(.on sock "game" game-data)
(.on sock "news" (fn [d] (.log js/console "got news")))

(defn sync-actions [ents]
  (dofs [e ents]
        (letc e [synced :synced
                 pos :position
                 actions :player-actions
                 chroma :chroma]
              (when-not (obj-equal? actions (? synced :last-actions))
                (.log js/console actions)
                (emit "action" (>< (>< pos actions) chroma))
                (! synced :last-actions (object/clone actions)))
              )))