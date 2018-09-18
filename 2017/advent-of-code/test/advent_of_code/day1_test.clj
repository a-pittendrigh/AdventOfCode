(ns advent-of-code.day1-test
  (:require
   [clojure.test :refer :all]
   [advent-of-code.day1 :as sut]))

(deftest wrap-around
  (is (= 4 (sut/sum-of-captcha "1111")))
  (is (= 9 (sut/sum-of-captcha "91212129"))))

(deftest matching
  (is (= 0 (sut/sum-of-captcha "1234"))))

(deftest summation
  (is (= 3 (sut/sum-of-captcha "1122"))))
