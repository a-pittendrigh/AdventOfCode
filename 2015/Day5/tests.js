QUnit.test( "md5", function(assert) {
  assert.equal(md5('abcdef609043'),'000001dbbfa3a5c83a2d506429c7b00e');
});

QUnit.test( "md5", function(assert) {
  var secret = 'abcdef';
  var miner = new AdventCoinMiner(secret, '00000', 5);
  assert.equal(miner.mine(), 609043);
});
/*
var regex = "It contains at least three vowels, 'aeiou'"
undefined
regex
"It contains at least three vowels, 'aeiou'"
var vowels = new RegExp("[aeiou]");
undefined
vowels
/[aeiou]/
vowels.exec('aei');
["a"]
vowels.exec('xazegov');
["a"]
vowels.exec('aeiouaeiouaeiou');
["a"]
vowels.exec('ttt'); -> returns null.
So if there's a match, it will return that first character that matches

contains at least three vowels = var hasAtLeastThreeVowels = new RegExp("[aeiou]{3,}");

var stringNotAllowed = new RegExp("ab|cd|pq|xy"); // finds strings that aren't permitted.
*/