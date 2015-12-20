var Instructor = function (santa, roboSanta, alternate, map) {
	this.santa = santa;
    this.roboSanta = roboSanta;
    this.alternate = alternate;
    this.stepCounter = 0;
    this.map = map;
	this.doInstruction = function (character) {
        var instructionRecipient = this.santa;
        if (this.alternate && this.stepCounter % 2 == 1) {
             instructionRecipient = this.roboSanta;
        };
		if (character === '>') {
			instructionRecipient.goEast();
		} else if (character === '<') {
			instructionRecipient.goWest();
		} else if (character === '^') {
			instructionRecipient.goNorth();
		} else if (character === 'v') {
			instructionRecipient.goSouth();
		};
        this.stepCounter++;
	};
    this.followMap = function () {
        for (var i = 0; i < this.map.length; i++) {
            this.doInstruction(this.map[i]);
        };
    }
};