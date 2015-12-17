countLeftParenthesis = function (inputString) {
	var numLeftParenthesis = 0;
	for (var i = 0; i < inputString.length ; i++) {		
		numLeftParenthesis += inputString[i] == "(" ? 1 : 0;
	};
	return numLeftParenthesis;
}

countRightParenthesis = function (inputString) {
	var numRightParenthesis = 0;
	for (var i = 0; i < inputString.length ; i++) {		
		numRightParenthesis += inputString[i] == ")" ? 1 : 0;
	};
	return numRightParenthesis;
}

getFloor = function (inputString) {
	return countLeftParenthesis(inputString) - countRightParenthesis(inputString);
}