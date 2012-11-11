(ns game.lib.assets)

(defmulti ->elem :type)

(defmethod ->elem :image [{:keys [src]}]
  (let [I (js/Image.)]
    (set! (.-src I) src)
    I))

(defmethod ->elem :audio [{:keys [src]}]
  (let [a (.createElement js/document "audio")]
    (set! (.-src a) src)
    (.load a)
    a))

{:background {:type :image :src "blah/cool.jpg"}
 :maintheme {:type :audio :src "zomg.ogg"}}

(defn on-load [e k !set cb]
  (swap! !set assoc-in [:items k :elem] e)
    (.addEventListener e "loadeddata" (fn []
                                (swap! !set assoc-in [:items k :loaded] true)
                                (swap! !set update-in [::loaded-count] inc)
                                (when (= (::loaded-count @!set) (::count @!set))
                                  (swap! !set assoc ::loaded true)
                                  (cb (:items @!set)))
                                ))
  (.addEventListener e "load" (fn []
                                (swap! !set assoc-in [:items k :loaded] true)
                                (swap! !set update-in [::loaded-count] inc)
                                (when (= (::loaded-count @!set) (::count @!set))
                                  (swap! !set assoc ::loaded true)
                                  (cb (:items @!set)))
                                )))

(defn load-all [!set cb]
  (doseq [[k v] (:items @!set)
          :let [elem (->elem v)]]
    (on-load elem k !set cb)))

(defn load-set [name set cb]
  (let [!set (atom {:items set
                    ::count (count (keys set))
                    ::loaded-count 0})]
    (load-all !set cb)
    !set))

(def s (load-set :test {:logo {:type :image :src "file:///users/chris/repos/gambit/resources/img/running.png"}
                        :lightning {:type :audio :src "file:///Users/chris/Downloads/lightning.ogg"}}
                 #()))