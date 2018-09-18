var AdventCoinMiner = function (secret, stringToFind, stringToFindLen) {
	this.secret = secret;
    this.stringToFind = stringToFind;
    this.stringToFindLen = stringToFindLen;
    this.startsWithFiveZeroes = function (string) {
        var firstFiveChars = string.substring(0, this.stringToFindLen);
        return firstFiveChars == this.stringToFind;
    }
    this.setStringToFind = function (stringToFind) {
        this.stringToFind = stringToFind;
    };
    this.setStringToFindLen = function (len) {
        this.stringToFindLen = len;
    };
    this.mine = function () {
        var lowestNo = 0;
        var hashString = '';
        
        while (!this.startsWithFiveZeroes(hashString) && lowestNo < 10000000) {
            var stringToHash = this.secret + lowestNo;
            hashString = md5(stringToHash) + '';
            lowestNo++;
        }
            
        return lowestNo - 1;
    }
};