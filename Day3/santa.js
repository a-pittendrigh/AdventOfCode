var Santa = function () {	
	this.props = function () {
		var east = 0, west = 0, north = 0, south = 0;
		return {
			goNorth : function () {
				south--;
				north++;
			},
			goSouth : function () {
				south++;
				north--;
			},
			goEast : function () {
				east++;
				west--;
			},
			goWest : function () {
				west++;
				east--;
			},
			getState : function () {
				return {
					east : east,
					west : west,
					north : north,
					south : south
				}
			}
		};
	}()
	this.getState = function () {
		return this.props.getState();	
	};
	this.goNorth = function () {
		this.props.goNorth();
	}
	this.goSouth = function () {
		this.props.goSouth();
	}
	this.goEast = function () {
		this.props.goEast();
	}
	this.goWest = function () {
		this.props.goWest();
	}
};