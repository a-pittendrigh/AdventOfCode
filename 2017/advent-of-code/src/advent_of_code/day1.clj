(ns advent-of-code.day1)

(defn get-char-n-away [position captcha n]
  (def len (- (count captcha) 1))
  (if (> (+ position n) len)
    (nth captcha (- (+ position (- n 1)) len))
    (nth captcha (+ position n))))


(defn get-next-char [position captcha]
  (get-char-n-away position captcha 1))


(defn matches-digit-n-away? [position captcha n]
  (= (nth captcha position) (get-char-n-away position captcha n)))

(defn matches-next-digit? [position captcha]
  (matches-digit-n-away? position captcha 1))


(defn value-if-matched-n-away [position captcha n]
  (if (matches-digit-n-away? position captcha n)
    (Integer/parseInt (str (nth captcha position)))
    0))


(defn sum-of-captcha [captcha n]
  (def letters (count captcha))
  (def max-position (- letters 1))
  (loop [sum 0 position 0]
    (def new-sum (+ sum (value-if-matched-n-away position captcha n)))
    (if (>= position max-position)
      new-sum
      (recur
       new-sum
       (+ 1 position)))))
