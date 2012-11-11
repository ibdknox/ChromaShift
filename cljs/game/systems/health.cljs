(ns game.systems.health
  (:require [game.lib.core :refer [all-e has?]]
            [game.util :refer [destroy!]]
            [game.lib.physics :as phys])
  (:require-macros [game.lib.macros :refer [letc ? ! dofs]]))

(defn off-map-death [ents]
  (dofs [e ents]
        (letc e [pos :position
                 health :health]
              (when (> (? pos :y) 1000)
                (! health :dead true)))))

(defn trippable-death [ents]
  (dofs [e ents]
        (letc e [trip :trippable
                 single :single-use]
              (when (? trip :active)
                (letc (? trip :target) [health :health]
                      (! health :dead true)
                    )))))

(defn single-use [ents]
  (dofs [e ents]
        (letc e [single :single-use
                 trip :trippable]
              (when (or (? trip :active)
                        (? single :counting))
                (cond
                 (= (? single :count) 0) (destroy! e)
                 (not (? single :counting)) (! single :counting true)
                 :else (! single :count (dec (? single :count))))))))

(defn kill [ents]
  (dofs [e ents]
        (letc e [health :health
                 pos :position
                 actions :player-actions
                 anim :animated
                 spawn :spawn]
              (when (? health :dead)
                (cond
                 (not (? health :count)) (do 
                                           (! health :count 60)
                                           (! actions :can-act? false)
                                           ;;set death animation
                                           (! anim :animation :death)
                                           (! anim :count 0)
                                           (! anim :frame -1)
                                           )
                 (= (? health :count) 0) (do 
                                           (! health :count false)
                                           (! health :dead false)
                                           (! spawn :respawn true)
                                           )
                 :else (! health :count (dec (? health :count)))
                )))))

(defn trippable-and-player? [a b]
  (let [a (phys/fix->ent a)
        b (phys/fix->ent b)]
    (cond
     (and (has? a :player) (has? b :trippable)) [a b]
     (and (has? b :player) (has? a :trippable)) [b a]
     :else nil)))

(defn on-trip [a b]
  (when-let [[p t] (trippable-and-player? a b)]
    (letc t [trip :trippable]
          (! trip :target p)
          (! trip :active true))))

(defn off-trip [a b]
  (when-let [[p t] (trippable-and-player? a b)]
    (letc t [trip :trippable]
          (! trip :target nil)
          (! trip :active false))))

(defn death-conditions [ents]
  (off-map-death ents)
  ;;collision deaths
  (trippable-death (all-e :deadly))
  )

(defn spawn [ents]
  (dofs [e ents]
        (letc e [spawn :spawn
                 actions :player-actions
                 pos :position]
              (when (? spawn :respawn)
                (phys/set-position e (? spawn :x) (? spawn :y))
                (phys/velocity e 0 0)
                (! pos :x (? spawn :x))
                (! pos :y (? spawn :y))
                (! actions :can-act? true)
                (! spawn :respawn false)))))


(defn respawn-point [ents]
  (dofs [e ents]
        (letc e [trip :trippable
                 respawn :respawn]
              (when (? trip :active)
                (letc (? trip :target) [spawn :spawn]
                      (! spawn :x (? respawn :x))
                      (! spawn :y (? respawn :y)))))))

(defn func-activates [ents]
  (dofs [e ents]
        (letc e [trip :trippable
                 func :func-activate]
              (when (? trip :active)
                ((? func :fn))))))