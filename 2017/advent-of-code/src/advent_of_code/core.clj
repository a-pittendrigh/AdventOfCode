(ns advent-of-code.core
  (:gen-class))

(defn get-next-char [position captcha]
  (if (= position (- (count captcha) 1))
    (nth captcha 0)
    (nth captcha (+ 1 position))))

(defn matches-next-digit? [position captcha]
  (= (nth captcha position) (get-next-char position captcha)))

(defn sum-if-next-digit-matches [position captcha]
  (if (matches-next-digit position captcha)
    (+ (nth captcha position) (get-next-char position captcha))
    0))

(def input "1122")
(def expectedOutPut 3)
(def position 0)

(defn -main
  "I don't do a whole lot ... yet."
  [& args]

  (matches-next-digit position input)
  (println "Hello, World!"))

(sum-if-next-digit-matches position input)
(def captcha input)
(print position)
(matches-next-digit position captcha)
(if (matches-next-digit position captcha)
  (+ (int (nth captcha position)) (get-next-char position captcha))
  0)
