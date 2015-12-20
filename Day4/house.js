var House = function (n,e,s,w) {
	this.east = e;
	this.west = w;
	this.south = s;
	this.north = n;
	this.equals = function (o) {
		return o.east == this.east &&
			o.west == this.west &&
			o.north == this.north &&
			o.south == this.south;
	}
};