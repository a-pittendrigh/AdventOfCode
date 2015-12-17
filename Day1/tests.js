
QUnit.test( "Input (()) returns floor 0", function( assert ) {
  var input = "(())"
  assert.equal(santa.getFinalFloor(input), 0, "Input (()) should return 0 as floor" );
});

QUnit.test( "Input ()() returns floor 0", function( assert ) {
  var input = "()()"
  assert.equal(santa.getFinalFloor(input), 0, "Input (()) should return 0 as floor" );
});

QUnit.test( "Input ((( returns floor 3", function( assert ) {
  var input = "((("
  assert.equal(santa.getFinalFloor(input), 3, "Input ((( should return 0 as floor" );
});

QUnit.test( "Input (()(()( returns floor 0", function( assert ) {
  var input = "(()(()("
  assert.equal(santa.getFinalFloor(input), 3, "Input (()(()( should return 3 as floor" );
});

QUnit.test( "Input ))((((( returns floor 3", function( assert ) {
  var input = "))((((("
  assert.equal(santa.getFinalFloor(input), 3, "Input ))((((( should return 0 as floor" );
});

QUnit.test( "Input ()) return floor -1", function( assert ) {
  var input = "())"
  assert.equal(santa.getFinalFloor(input), -1, "Input ()) should return 0 as floor" );
});

QUnit.test( "Input ))( returns floor -1", function( assert ) {
  var input = "))("
  assert.equal(santa.getFinalFloor(input), -1, "Input ))( should return -1 as floor" );
});

QUnit.test( "Input ))) returns floor -3", function( assert ) {
  var input = ")))"
  assert.equal(santa.getFinalFloor(input), -3, "Input ))) should return -3 as floor" );
});

QUnit.test( "Input )())()) should return floor -3", function( assert ) {
  var input = ")())())"
  assert.equal(santa.getFinalFloor(input), -3, "Input (()) should return -3 as floor" );
});

QUnit.test( "Input ) should return char index 1 as character that puts santa in the basement", function( assert ) {
  var input = ")"
  assert.equal(santa.indexOfStringWhichTakesYouToSpecificFloor(input, -1), 1, "Input ) should return 1" );
});

QUnit.test( "Input ()()) should return char index 5 as character that puts santa in the basement", function( assert ) {
  var input = "()())"
  assert.equal(santa.indexOfStringWhichTakesYouToSpecificFloor(input, 5), -1, "Input ()()) should return 5" );
});