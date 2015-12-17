QUnit.test( "Get area of smallest side of basic cube with dims 2x3x4", function( assert ) {
  var newPresent = new Present(2,3,4);
  assert.equal(newPresent.getAreaOfSmallestSide(), 6, "Area of smallest side, 2x3, should be 6." );
});
QUnit.test( "Get Surface are of rectangle with dims 2x3x4", function( assert ) {
  var newPresent = new Present(2,3,4);
  assert.equal(newPresent.getSurfaceArea(), 52, "Surface are of rectangle with dims 2x3x4 should return 52." );
});
QUnit.test( "Get Surface are of wrapping paper required to wrap present with dims 2x3x4", function( assert ) {
  var newPresent = new Present(2,3,4);
  assert.equal(newPresent.getSquareMeterageOfWrappingPaperRequiredToWrapPresent(), 58, "Get Surface are of rectangle with dims 2x3x4 should return 58." );
});
QUnit.test( "Get Surface are of wrapping paper required to wrap present with dims 1x1x10", function( assert ) {
  var newPresent = new Present(1,1,10);
  assert.equal(newPresent.getSquareMeterageOfWrappingPaperRequiredToWrapPresent(), 43, "Get Surface are of rectangle with dims 1x1x10 should return 43." );
});
QUnit.test( "Get Surface are of wrapping paper required to wrap present with dims 1x1x10 and present with dims 2x3x4", function( assert ) {
  var newPresent = new Present(1,1,10);
  var newPresent1 = new Present(2,3,4);
  var newPresentWrapper = new PresentWrapper([newPresent, newPresent1]);
  assert.equal(newPresentWrapper.getWrappingPaperRequired(), 43 + 58, "Get Surface are of wrapping paper required to wrap presents with dims with dims 1x1x10  and 2x3x4 should return 101." );
});

