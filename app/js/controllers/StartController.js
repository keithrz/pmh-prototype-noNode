//var start_app = angular.module('pmh', ['ngMock','$http']);

// app.controller('StartController', [ '$http', function($http) {
function StartController($scope, $http) {
	$scope.routeDetails = {};
	$scope.started = false;
	$scope.status = undefined;
	
	$scope.isStarted = function() {
		return this.started;
	};

	$scope.startRoute = function() {
		// $http({method: 'POST', url: '/route', data: this.routeDetails}).
		//     success(function(data, status, headers, config) {
		//       // this callback will be called asynchronously
		//       // when the response is available
		//     }).
		//     error(function(data, status, headers, config) {
		//       // called asynchronously if an error occurs
		//       // or server returns response with an error status.
		//     });
		
		//TODO add auth to header
		var headers = {};
		$scope.status = 'Saving new...';
		
		$http.post('/route', $scope.routeDetails, { headers: headers } ).success(function(response) {
			$scope.started = true;
			$scope.status = 'Success';
		}).error(function(response) {
			$scope.status = 'Error';
		});
		
		// if(console && console.log) { // && $scope.status
		// 	console.log($scope.status);
		// }		
		
		
		// simulate submission to a new route
		// $http.post('/route.json', this.routeDetails).success(function (data) {
		// 	this.started = true;			
		// };
		// if(promise.success) {
		// } else {
		// 	alert(promise.error);
		// 	//more error handling
		// }
	};
};
// } ]);
