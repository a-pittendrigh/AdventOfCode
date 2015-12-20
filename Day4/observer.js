var Observer = function () {	
	this.observers = [];
	this.addObserver = function (observer) {
		this.observers.push(observer);
	}
	
	this.notify = function notifyObservers (state) {		
		for (var i = 0; i < this.observers.length; i++)
		{
			this.observers[i].notify(state);
		}
	}
};