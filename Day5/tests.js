QUnit.test( "md5", function(assert) {
  assert.equal(md5('abcdef609043'),'000001dbbfa3a5c83a2d506429c7b00e');
});

QUnit.test( "md5", function(assert) {
  var secret = 'abcdef';
  var miner = new AdventCoinMiner(secret, '00000', 5);
  assert.equal(miner.mine(), 609043);
});