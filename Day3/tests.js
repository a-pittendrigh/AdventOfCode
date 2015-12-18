QUnit.test( "Can go North", function(assert) {
  var newSanta = new Santa();
  //the default feild values for a new Santa is north : 0, south : 0, east: 0, west: 0
  newSanta.goNorth();
  assert.equal(newSanta.getState().north, 1);
});
QUnit.test( "Cannot access private proprties", function(assert) {
  var newSanta = new Santa();
  //the default feild values for a new Santa is north : 0, south : 0, east: 0, west: 0
  assert.equal(newSanta.props.north, undefined);
});
QUnit.test( "South is -1 after going North", function(assert) {
  var newSanta = new Santa();
  //the default feild values for a new Santa is north : 0, south : 0, east: 0, west: 0
  newSanta.goNorth();
  assert.equal(newSanta.getState().south, -1);
});
QUnit.test( "Can go South", function(assert) {
  var newSanta = new Santa();
  //the default feild values for a new Santa is north : 0, south : 0, east: 0, west: 0
  newSanta.goSouth();
  assert.equal(newSanta.getState().south, 1);
});
QUnit.test( "North is -1 after going South", function(assert) {
  var newSanta = new Santa();
  //the default feild values for a new Santa is north : 0, south : 0, east: 0, west: 0
  newSanta.goSouth();
  assert.equal(newSanta.getState().north, -1);
});
QUnit.test( "West is 1 after going South", function(assert) {
  var newSanta = new Santa();
  //the default feild values for a new Santa is north : 0, south : 0, east: 0, west: 0
  newSanta.goWest();
  assert.equal(newSanta.getState().west, 1);
});
QUnit.test( "East is -1 after going West", function(assert) {
  var newSanta = new Santa();
  //the default feild values for a new Santa is north : 0, south : 0, east: 0, west: 0
  newSanta.goWest();
  assert.equal(newSanta.getState().east, -1);
});
QUnit.test( "West is -1 after going East", function(assert) {
  var newSanta = new Santa();
  //the default feild values for a new Santa is north : 0, south : 0, east: 0, west: 0
  newSanta.goEast();
  assert.equal(newSanta.getState().west, -1);
});
QUnit.test( "East is 1 after going East", function(assert) {
  var newSanta = new Santa();
  //the default feild values for a new Santa is north : 0, south : 0, east: 0, west: 0
  newSanta.goEast();
  assert.equal(newSanta.getState().east, 1);
});