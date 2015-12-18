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
  var newPresent2 = new Present(1,1,10);
  var newPresent3 = new Present(2,3,4);
  var newPresentWrapper = new PresentWrapper([newPresent, newPresent1, newPresent2, newPresent3]);
  assert.equal(newPresentWrapper.getWrappingPaperRequired(), 43 + 58 + 43 + 58, "Get Surface are of wrapping paper required to wrap presents with dims with dims 1x1x10  and 2x3x4 should return 202." );
});
QUnit.test( "Surface area of wrapping paper required to wrap present with dims 20x26x22", function( assert ) {
  //var newPresent = new Present(20,26,22);
  assert.equal(new Present(20,26,22).getSquareMeterageOfWrappingPaperRequiredToWrapPresent(), 3504, "Get Surface are of rectangle with dims 1x1x10 should return 43." );
});
//3504
QUnit.test( "Volume for 1x1x10", function( assert ) {
  //var newPresent = new Present(20,26,22);
  assert.equal(new Present(1,1,10).getVolume(), 10);//, "Should be 10" );
});
QUnit.test( "Volume for 2x3x4", function( assert ) {
  //var newPresent = new Present(20,26,22);
  assert.equal(new Present(2,3,4).getVolume(), 24);//, "Should be 10" );
});
/*
A present with dimensions 2x3x4 requires 2+2+3+3 = 10 feet of ribbon to wrap the present plus 2*3*4 = 24 feet of ribbon for the bow, for a total of 34 feet.
A present with dimensions 1x1x10 requires 1+1+1+1 = 4 feet of ribbon to wrap the present plus 1*1*10 = 10 feet of ribbon for the bow, for a total of 14 feet.*/
QUnit.test( "A present with dimensions 2x3x4 requires 2+2+3+3 = 10", function( assert ) {
  //var newPresent = new Present(20,26,22);
  assert.equal(new Present(2,3,4).getRibbonLength(), 10);//, "Should be 10" );
});
QUnit.test( "A present with dimensions 1x1x10 requires 1+1+1+1 = 4 feet of ribbon to wrap the present.", function( assert ) {
  //var newPresent = new Present(20,26,22);
  assert.equal(new Present(1,1,10).getRibbonLength(), 4);//, "Should be 10" );
});
QUnit.test( "A present with dimensions 2x3x4 requires 2+2+3+3 = 10 feet of ribbon to wrap the present plus 2*3*4 = 24 feet of ribbon for the bow, for a total of 34 feet.", function( assert ) {
  //var newPresent = new Present(20,26,22);
  assert.equal(new Present(2,3,4).getTotalRibbonLen(), 34);//, "Should be 10" );
});
QUnit.test( "A present with dimensions 1x1x10 requires 1+1+1+1 = 4 feet of ribbon to wrap the present plus 1*1*10 = 10 feet of ribbon for the bow, for a total of 14 feet.", function( assert ) {
  //var newPresent = new Present(20,26,22);
  assert.equal(new Present(1,1,10).getTotalRibbonLen(), 14);//, "Should be 10" );
});
//these tests suck.. eventaully i just got frustrated and ran out of care.