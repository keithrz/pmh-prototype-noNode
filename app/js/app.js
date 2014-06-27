var app = angular.module('pmh', [ ]);

app.controller('NavController', function() {
	this.started = false;
	
});

app.controller('LoginController', function() {
	
});

app.controller('StartController', function() {
	this.routeDetails = {};

	this.startRoute = function() {
		alert("route started!!");
		this.started = true;
		// this.routeDetails = {};
	};
});
