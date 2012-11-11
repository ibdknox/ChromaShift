(ns game.systems.moveable
  (:require [game.lib.core :refer [has? as]]
            [game.util :refer [kstr]]
            [game.lib.physics :as phys])
  (:require-macros [game.lib.macros :refer [letc ? ! dofs]]))

(def key? js/input.key)

(defn foot? [a b]
  (let [adata (.GetUserData a)
        bdata (.GetUserData b)]
    (cond
     (= adata :foot) [a b]
     (= bdata :foot) [b a]
     :else nil)))

(defn on-foot [a b]
  (when-let [[f g] (foot? a b)]
    (when (has? (phys/fix->ent g) :solid)
      ;;get the dude attached to the foot
      (letc (phys/fix->ent f) [jump :jump]
            (! jump :ground-count (inc (? jump :ground-count)))
            (! jump :ground true)
            ))))

(defn off-foot [a b]
  (when-let [[f g] (foot? a b)]
    (when (has? (phys/fix->ent g) :solid)
      ;;get the dude attached to the foot
      (letc (phys/fix->ent f) [jump :jump]
            (! jump :ground-count (dec (? jump :ground-count)))
            (when (= (? jump :ground-count) 0)
              (! jump :ground false))
            ))))

(defn side? [a b]
  (let [adata (.GetUserData a)
        bdata (.GetUserData b)]
    (cond
     (= adata :left-side) [:left a b]
     (= bdata :left-side) [:left b a]
     (= adata :right-side) [:right a b]
     (= bdata :right-side) [:right b a]
     :else nil)))

(defn on-side [a b]
  (when-let [[side s g] (side? a b)]
    (letc (phys/fix->ent s) [blocked :blocked]
          (when (and blocked
                     (has? (phys/fix->ent g) :solid))
            (.log js/console (str "Touching " side))
            (! blocked side true))
          )))

(defn off-side [a b]
  (when-let [[side s g] (side? a b)]
    (letc (phys/fix->ent s) [blocked :blocked]
          (when (and blocked
                     (has? (phys/fix->ent g) :solid))
            (! blocked side false))
          )))

(defn keyboard [ents]
  (dofs [e ents]
        (letc e [actions :player-actions]
              (! actions :jump false)
              (! actions :move-left false)
              (! actions :move-right false)
              (! actions :chroma false)
              (when (? actions :can-act?)
                (cond
                 (key? :left) (! actions :move-left true)
                 (key? :right) (! actions :move-right true))
                ;; we can move and jump at the same time
                (when (key? :z) (! actions :chroma true))
                (when (key? :space) (! actions :jump true))
              ))))

(defn jump [ents]
  (dofs [e ents]
        (letc e [actions :player-actions
                 jump :jump]
              ;;check if we're falling
              (! jump :prev-falling (? jump :falling))
              (let [v (phys/->velocity e)]
                (if (and (not (? jump :ground))
                         (pos? (.-y v)))
                  (! jump :falling true)
                  (! jump :falling false)))
              (cond 
               (> (? jump :count) 0) (! jump :count (dec (? jump :count)))
               (and (? actions :jump)
                    (= (? jump :count) 0)
                    (? jump :ground)) (do
                                        ;;we need a jump counter to make sure you can't jump immediately again
                                        ;;we need a foot to test that we are actually on the ground
                                        (phys/impulse e 0 -35)
                                        (! jump :count 15)))
              )))

(defn move [ents]
  (dofs [e ents]
        (letc e [actions :player-actions
                 facing :facing
                 blocked :blocked]
              (when (? actions :move-left)
                (! facing :dir :left))
              (when (? actions :move-right)
                (! facing :dir :right))
              (cond
               (and (? actions :move-left)
                    (not (? blocked :left))) (phys/velocity e -8 nil)
               (and (? actions :move-right)
                    (not (? blocked :right))) (phys/velocity e 8 nil)
               :else (phys/velocity e 0 nil)))
        ))

(defn set-anim [anim facing root frame]
  (! anim :animation (kstr root (? facing :dir)))
  (! anim :frame (or frame -1))
  (! anim :count 0))

(defn animate-actions [ents]
  (dofs [e ents]
        (letc e [actions :player-actions
                 anim :animated
                 facing :facing
                 jump :jump]
              (when (? actions :can-act?)
                (cond
                 (and (? jump :falling) (not (? jump :prev-falling))) (set-anim anim facing :falling-)
                 (? jump :falling)   (! anim :animation (kstr :falling- (? facing :dir)))
                 (and (? actions :jump) (? jump :ground)) (set-anim anim facing :jump-) ;;jump anim
                 (and (? actions :jump) (> (? jump :count) 0)) (! anim :animation (kstr :jump- (? facing :dir))) ;;jump anim
                 (not (? jump :ground)) (set-anim anim facing :jump-) ;;run animations only on ground
                 (? actions :move-left) (do 
                                          (! anim :animation :running-left))
                 (? actions :move-right) (do
                                           (! anim :animation :running-right)) ;;until we have move right
                 :else (! anim :animation (kstr :standing- (? facing :dir))))))))

(defn bounce [ents]
  (dofs [e ents]
        (letc e [trip :trippable
                 bouncy :bouncy]
              (cond 
               (> (? bouncy :count) 0) (! bouncy :count (dec (? bouncy :count)))
               (? trip :active) (do
                                  (! (as (? trip :target) :jump) :count 15)
                                  (! bouncy :count 20)
                                  (phys/impulse (? trip :target) 0 -70))))
              ))