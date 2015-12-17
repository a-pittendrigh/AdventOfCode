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
			//return sides[0] * sides[1];
			return smallest;
		}
		this.getSurfaceArea = function () {
			return 2 *this.len * this.width + 2 * this.width * this.height + 2 * this.height * this.len;
		}
		this.getSquareMeterageOfWrappingPaperRequiredToWrapPresent = function () {
			return this.getSurfaceArea() + this.getAreaOfSmallestSide();
		}
		this.getRibbonLength = function () {
			var dims = [this.len, this.width, this.height].sort();
			return 2 * (dims [0] + dims [1]);
		}
		this.getVolume = function () {
			return this.len * this.height * this.width;
		}
		this.getTotalRibbonLen = function () {
			return this.getRibbonLength() + this.getVolume();
		}
};