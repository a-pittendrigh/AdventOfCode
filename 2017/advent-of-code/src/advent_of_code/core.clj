(ns advent-of-code.core
  (:require
   [advent-of-code.day1 :as day1])
  (:gen-class))

(defn -main
  [& args]

  (def day-1-input (slurp "resources/day1-input.txt"))
  (println "Day 1: " (day1/sum-of-captcha day-1-input)))
