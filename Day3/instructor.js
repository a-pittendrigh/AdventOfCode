var Instructor = function (santa) {
	this.santa = santa;
	this.doInstruction = function (character) {
		var santa = this.santa;
		if (character === '>') {
			santa.goEast();	
		} else if (character === '<') {
			santa.goWest()
		} else if (character === '^') {
			santa.goNorth()
		} else if (character === 'v') {
			santa.goSouth()
		};
	}
};