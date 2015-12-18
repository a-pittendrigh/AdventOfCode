var Present = function (len, width, height) {
		this.len = len;
		this.width = width;
		this.height = height;
		
		this.getAreaOfSmallestSide = function () {			
			var smallest = this.len * this.width;
			if (this.len * this.height < smallest) {
				smallest = this.len * this.height;
			};
			if (this.width * this.height < smallest) {
				smallest = this.width * this.height;
			};
			return smallest;
		}
		this.getSurfaceArea = function () {
			return 2 *this.len * this.width + 2 * this.width * this.height + 2 * this.height * this.len;
		}
		this.getSquareMeterageOfWrappingPaperRequiredToWrapPresent = function () {
			return this.getSurfaceArea() + this.getAreaOfSmallestSide();
		}
		this.getRibbonLength = function () {
			var shortestFace = Math.min(this.len + this.width, this.len + this.height);
			shortestFace = Math.min(shortestFace, this.width + this.height);
			return shortestFace * 2;
		}
		this.getVolume = function () {
			return this.len * this.height * this.width;
		}
		this.getTotalRibbonLen = function () {
			return this.getRibbonLength() + this.getVolume();
		}
};