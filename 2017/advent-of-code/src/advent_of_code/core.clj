(ns advent-of-code.core
  (:require
   [advent-of-code.day1 :as day1])
  (:gen-class))

(def input "1122")
(def expectedOutPut 3)

(defn -main
  "I don't do a whole lot ... yet."
  [& args]

  (println (day1/sum-of-captcha input)))
