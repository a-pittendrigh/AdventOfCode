var santa = function () {
	var countLeftParenthesis = function (inputString) {
		var numLeftParenthesis = 0;
		for (var i = 0; i < inputString.length ; i++) {		
			numLeftParenthesis += inputString[i] == "(" ? 1 : 0;
		};
		return numLeftParenthesis;
	};
	var countRightParenthesis = function (inputString) {
		var numRightParenthesis = 0;
		for (var i = 0; i < inputString.length ; i++) {		
			numRightParenthesis += inputString[i] == ")" ? 1 : 0;
		};
		return numRightParenthesis;
	};
	var goesUp = function (char) {
		//The only chars right now are '(' and ')'
		//'(' goes down and ')' goes up
		var up = '(';
		var down = ')';
		return char === up;
	};
	return {
		getFinalFloor : function (inputString) {
			return countLeftParenthesis(inputString) - countRightParenthesis(inputString);
		},
		//This is not supposed to be zero based
		indexOfStringWhichTakesYouToSpecificFloor : function (instructions, destinationfloor) {
			var currentCharIndex = 0;
			var currentFloor = 0;//Start at the ground floor
			while (currentCharIndex < instructions.length && currentFloor != destinationfloor){
				currentFloor += goesUp(instructions[currentCharIndex++]) ? 1 : -1;
			};
			if (currentFloor != destinationfloor){
				return -1;//never reached the destination
			};
			return currentCharIndex;
		}
	};
}()