(ns advent-of-code.day1)

(defn get-next-char [position captcha]
  (if (= position (- (count captcha) 1))
    (nth captcha 0)
    (nth captcha (+ 1 position))))

(defn matches-next-digit? [position captcha]
  (= (nth captcha position) (get-next-char position captcha)))

(defn value-if-match [position captcha]
  (if (matches-next-digit? position captcha)
    (Integer/parseInt (str (nth captcha position)))
    0))

(defn sum-of-captcha [captcha]
  (def letters (count captcha))
  (def max-position (- letters 1))
  (loop [sum 0 position 0]
    (if (>= position max-position)
      sum
      (recur
       (+ sum (value-if-match position captcha))
       (+ 1 position)))))
