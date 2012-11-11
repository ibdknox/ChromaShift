(ns game.main
  (:require [game.lib.core :refer [frame entity all-e add-c rem! as load-scene] :as gc]
            [game.lib.physics :as phys]
            [game.lib.dev :as dev]
            [game.util :as util]
            [game.lib.util :refer [now every wait]]
            [game.systems.moveable :as move]
            [game.systems.camera :as cam]
            [game.systems.chroma :as chroma]
            [game.systems.health :as health]
            [game.systems.sync :as sync]
            [game.comps :as comps]
            [jayq.core :refer [text $]])
  (:require-macros [game.lib.macros :refer [dofs letc dyn ? ! when-dev]]))

(def key? js/input.key)

(defn game-loop [brush opponent-brush]
  (dev/begin)

  (phys/add|rem)

  ;;systems here
  (move/keyboard (all-e :keyboard))
  (move/move (all-e :player-actions))
  (move/bounce (all-e :bouncy))
  (move/jump (all-e :player-actions))
  (move/animate-actions (all-e :player-actions))
  (chroma/chroma (all-e :chroma))
  (chroma/chroma-physics (all-e :chroma-activated))
  (chroma/chromatons (all-e :chromaton))
  
  (health/death-conditions (all-e :health))
  (health/kill (all-e :health))
  (health/respawn-point (all-e :respawn))
  (health/spawn (all-e :spawn))

  (health/single-use (all-e :single-use))
  
  (sync/sync-actions (all-e :synced))

  (phys/step)

  (let [player (first (all-e :player))]
    (cam/follow-player player (all-e :camera))
    (binding [util/brush brush]
      (cam/renderer player)
      (when-dev
       (when false
         (dev/phys-debug)))
      (cam/restore)))

  (when util/opponent?
    (let [opponent (first (all-e :opponent))]
      (cam/follow-player opponent (all-e :camera))
      (binding [util/brush opponent-brush]
        (cam/renderer opponent)
        (when-dev
         (when false
           (dev/phys-debug)))
        (cam/restore))))

  (dev/end)

  (health/func-activates (all-e :func-activate))

  (frame #(game-loop brush opponent-brush)))

(defn run []
  (dev/add-stats)
  (phys/init "#game")

  ;;contact listners here
  (phys/contact! move/on-foot move/off-foot)
  (phys/contact! move/on-side move/off-side)
  (phys/contact! health/on-trip health/off-trip)

  (game-loop (js/window.brush "#game") (js/window.brush "#opponent-game")))

(run)
