var Santa = function () {
	this.notifier = new Observer();
	this.addObserver = function (obs) { 
		this.notifier.addObserver(obs) 
	};
	//there should probably be a notify too, but w.e
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
	}();	
	this.notifyOfStateChange = function () {
		this.notifier.notify(this.getState());
	};
	this.getState = function () {
		return this.props.getState();
	};
	this.goNorth = function () {
		this.props.goNorth();
		this.notifyOfStateChange();
	}
	this.goSouth = function () {
		this.props.goSouth();
		this.notifyOfStateChange();
	}
	this.goEast = function () {
		this.props.goEast();
		this.notifyOfStateChange();
	}
	this.goWest = function () {
		this.props.goWest();
		this.notifyOfStateChange();
	}
};