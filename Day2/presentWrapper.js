var PresentWrapper = function (presents) {
	//presents should be an array of presents.
	this.presents = presents;

	//Returns the area of the amount of wrapping paper needed.
	this.getWrappingPaperRequired = function () {
		var squareUnitsRequired = 0;
		
		for (var i = 0; i < this.presents.length; i++) {
			squareUnitsRequired += presents[i].getSquareMeterageOfWrappingPaperRequiredToWrapPresent();
		};
		
		return squareUnitsRequired;
	};
};