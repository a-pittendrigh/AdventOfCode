QUnit.test( "Input (()) returns floor 0", function( assert ) {
  var input = "(())"
  assert.equal(getFloor(input), 0, "Input (()) should return 0 as floor" );
});

QUnit.test( "Input ()() returns floor 0", function( assert ) {
  var input = "()()"
  assert.equal(getFloor(input), 0, "Input (()) should return 0 as floor" );
});

QUnit.test( "Input ((( returns floor 3", function( assert ) {
  var input = "((("
  assert.equal(getFloor(input), 3, "Input ((( should return 0 as floor" );
});

QUnit.test( "Input (()(()( returns floor 0", function( assert ) {
  var input = "(()(()("
  assert.equal(getFloor(input), 3, "Input (()(()( should return 3 as floor" );
});

QUnit.test( "Input ))((((( returns floor 3", function( assert ) {
  var input = "))((((("
  assert.equal(getFloor(input), 3, "Input ))((((( should return 0 as floor" );
});

QUnit.test( "Input ()) return floor -1", function( assert ) {
  var input = "())"
  assert.equal(getFloor(input), -1, "Input ()) should return 0 as floor" );
});

QUnit.test( "Input ))( returns floor -1", function( assert ) {
  var input = "))("
  assert.equal(getFloor(input), -1, "Input ))( should return -1 as floor" );
});

QUnit.test( "Input ))) returns floor -3", function( assert ) {
  var input = ")))"
  assert.equal(getFloor(input), -3, "Input ))) should return -3 as floor" );
});

QUnit.test( "Input )())()) should return floor -3", function( assert ) {
  var input = ")())())"
  assert.equal(getFloor(input), -3, "Input (()) should return -3 as floor" );
});