(ns game.flow
  (:require [jayq.core :refer [$ fade-out fade-in bind hide show]]
            [game.lib.physics :as phys]
            [game.lib.util :refer [wait]]
            [game.util :refer [resize opponent?]]
            [game.lib.core :as core])
  (:require-macros [game.lib.macros :refer [?]]))


(defn match []
  )

(defn menu []
  (fade-out ($ "#game-container") 500 (fn []
                                        (phys/clear!)
                                           (core/clear!)
                                        (fade-out ($ "#win") "fast")
                                        (fade-out ($ "#lose") "fast")

                                        (fade-in ($ "#main-page") "fast")
                                        )))

(defn learn []
  (fade-out ($ "#main-page") 500 (fn []
                                   (phys/clear!)
                                   (core/clear!)
                                   (hide ($ "#opponent-game"))
                                   (set! opponent? false)
                                   (core/load-scene (js/game.levels.learn.level))
                                   (resize 1000 500)
                                   (fade-in ($ "#game-container") "fast")
                                           )))

(defn match []
  (fade-out ($ "#main-page") 500 (fn []
                                   (phys/clear!)
                                   (core/clear!)
                                   (fade-in ($ "#searching") "fast")
                                   (js/game.systems.sync.queue)
                                           )))

(defn match-found [level]
  (fade-out ($ "#searching") 500 (fn []
                                   (phys/clear!)
                                   (core/clear!)
                                   (core/load-scene (.level (? js/game.levels level)))
                                   (resize 500 500)
                                   (show ($ "#opponent-game"))
                                   (set! opponent? true)
                                   (fade-in ($ "#game-container") "fast")
                                           )))
(defn intro []
  (fade-out ($ "#loading") 500 (fn []
                                 (phys/clear!)
                                 (core/clear!)
                                 (core/load-scene (js/game.levels.intro.level))
                                 (hide ($ "#opponent-game"))
                                 (set! opponent? false)
                                 (resize 1000 500)
                                 (fade-in ($ "#game-container") "fast")
                                 )))

(defn end []
  (phys/clear!)
  (core/clear!)
  (js/game.systems.sync.end)
  (fade-out ($ "#game-container") "slow"))

(defn win []
  (fade-in ($ "#win") 500 (fn []
                            (wait 3000 menu)
                            )))

(defn lose []
  (fade-in ($ "#lose") 500 (fn []
                             (wait 3000 menu)
                            )))


(bind ($ "#learn") :click learn)
(bind ($ "#fight") :click match)