var HouseVisitRecorder = function () {	
	this.homesVisited = [new House(0,0,0,0)];
	this.isHomeInCollection = function (homeLocation) {
		var found = false;
		var i = 0;
		while (!found && i < this.homesVisited.length) {
			var currentHome = this.homesVisited[i++];
			found = currentHome.equals(homeLocation);
		};
		return found;
	}

	this.notify = function (state) {
		if (!this.isHomeInCollection(state)){
			this.homesVisited.push(new House(state.north,state.east,state.south,state.west));
		};
	}
	
	this.getHomesVisited = function () {
		return this.homesVisited.length;
	}
}