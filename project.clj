(defproject cljs-game "0.0.1"
  :description "FIXME: write this!"
  :url "http://exampl.com/FIXME"
  :dependencies [[ibdknox/clojure "1.5.0-ibdknox5"]
                 [jayq "0.1.0-alpha3"]
                 [crate "0.2.1"]]
  :cljsbuild {:builds [{:source-path "cljs/"
                        :compiler {:optimizations :simple
                                   :externs ["externs/jquery.js"]
                                   :output-to "js/generated/bootstrap.js"
                                   :output-dir "resources/tmp/"
                                   :pretty-print true}}]}
  :source-paths ["cljs/"
                 "/Users/chris/repos/cljs/clojurescript/src/clj"
                 "/Users/chris/repos/cljs/clojurescript/src/cljs"])

