(ns game.lib.macros)

(def dev? true)

(defmacro component [name params & r]
  `(defn ~name ~params
     (cljs.core/js-obj "name" ~(keyword (clojure.core/name name)) ~@r)))

(defmacro dofs [pair & body]
  (let [[n vs] pair]
    `(let [c# (count ~vs)]
       (loop [i# 0]
         (when (< i# c#)
           (let [~n (aget ~vs i#)]
             ~@body
             (recur (inc i#))))))))

(defmacro letc [ent pairs & body]
  (let [pairs (vec (apply concat
                          (for [[k v] (partition-all 2 pairs)]
                            [k `(js/Game.as ~ent ~v)])))]
    `(let ~pairs ~@body)))

(defmacro when-dev [& body]
  (when dev?
    `(do ~@body)))

(defmacro ? [obj k]
  `(aget ~obj ~k))

(defmacro ! [obj k v]
  `(aset ~obj ~k ~v))

(defmacro dyn [f]
  (if dev?
    `(fn [& r#] (apply ~f r#))
    `~f))
