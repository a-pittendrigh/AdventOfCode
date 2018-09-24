(ns advent-of-code.core
  (:require
   [advent-of-code.day1 :as day1])
  (:gen-class))

(defn -main [& args]
  (def day-1-input (slurp "resources/day1-input.txt"))
  (println "Day 1, Part 1: " (day1/sum-of-captcha (clojure.string/trim-newline day-1-input) 1))
  (println "Day 1, Part 2: " (day1/sum-of-captcha (clojure.string/trim-newline day-1-input) (/ (count day-1-input) 2))))
