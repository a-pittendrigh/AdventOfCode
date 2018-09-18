(ns advent-of-code.day1-test
  (:require
   [clojure.test :refer :all]
   [advent-of-code.day1 :as sut])

(deftest 1111-is-4
  (is (= 4 (sut/sum-of-captcha "1111"))))
