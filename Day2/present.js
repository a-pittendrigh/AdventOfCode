var Present = function (len, width, height) {
		this.len = len;
		this.width = width;
		this.height = height;
		
		this.getAreaOfSmallestSide = function () {
			var sides = [this.len, this.width, this.height];
			sides = sides.sort();
			return sides[0] * sides[1];
		}
		this.getSurfaceArea = function () {
			return 2 *this.len * this.width + 2 * this.width * this.height + 2 * this.height * this.len;
		}
		this.getSquareMeterageOfWrappingPaperRequiredToWrapPresent = function () {
			return this.getSurfaceArea() + this.getAreaOfSmallestSide();
		}
};