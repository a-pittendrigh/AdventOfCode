var PresentWrapper = function (presents) {
	//presents should be an array of presents.
	this.presents = presents;

	//Returns the area of the amount of wrapping paper needed.
	this.getWrappingPaperRequired = function () {
		var squareUnitsRequired = 0;
		for (var i = 0; i < this.presents.length; i++) {
			var present = presents[i];
			var paperForPresent = present.getSquareMeterageOfWrappingPaperRequiredToWrapPresent();
			squareUnitsRequired = paperForPresent + squareUnitsRequired;
		};
		return squareUnitsRequired;
	};
	
	this.getRibbonRequired = function () {
		var ribbonNeeded = 0;
		for (var i = 0; i < this.presents.length; i++) {
			var present = presents[i];
			var paperForPresent = present.getTotalRibbonLen();
			ribbonNeeded = paperForPresent + ribbonNeeded;
		};
		return ribbonNeeded;
	};
};