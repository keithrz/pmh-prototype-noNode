'use strict';

// testing controller
describe('StartController', function() {
	var $httpBackend, $rootScope, createController;

	beforeEach(inject(function($injector) {
    	// Set up the mock http service responses
		$httpBackend = $injector.get('$httpBackend');
		// backend definition common for all tests
		// var expectedHeader = {'A-Token': 'xxx'};
		var expectedHeader = {};
		$httpBackend.when('POST', '/route').respond({userId: 'userX'}, expectedHeader);

		// Get hold of a scope (i.e. the root scope)
		$rootScope = $injector.get('$rootScope');
		// The $controller service is used to create instances of controllers
		var $controller = $injector.get('$controller');

		createController = function() {
			return $controller('StartController', {'$scope' : $rootScope });
		};
	}));


	afterEach(function() {
		$httpBackend.verifyNoOutstandingExpectation();
		$httpBackend.verifyNoOutstandingRequest();
	});


	// it('should fetch authentication token', function() {
	// 	$httpBackend.expectGET('/auth.py');
	// 	var controller = createController();
	// 	$httpBackend.flush();
	// });


	it('should send route details to server', function() {
		var controller = createController();
		// $httpBackend.flush();

		// now you don’t care about the authentication, but
		// the controller will still send the request and
		// $httpBackend will respond without you having to
		// specify the expectation and response for this request

		$rootScope.routeDetails = {
			'route':'SHT',
			'startDate':(new Date()).toDateString(),//, 'MM-DD-YYYY HH24:MI'),
			// 'startDate':Date.parse(new Date()),//, 'MM-DD-YYYY HH24:MI'),
			'pace': 2.2,
			'paceUom': 'mph',
			'drtTime':8.5,   // 'hoursPerDay':8.5,
			'drtTimeUom':'hr',
			'timeOff':36,
			'timeOffUom':'hr',
			'timeOffFrequency':1,
			'timeOffFrequencyUom':'wk'
				// <input type="select" ng-model="start.routeDetails.route" />
				// <input type="text" ng-model="start.routeDetails.startDate"/>
				// <input type="text" ng-model="start.routeDetails.pace"/>
				// <select ng-model="paceUom"></select>
				// <input type="text" ng-model="start.routeDetails.hoursPerDay"/>
				// <input type="text" ng-model="start.routeDetails.timeOff">
				// <select ng-model="start.routeDetails.timeOffUom"></select>
				// <select ng-model="start.routeDetails.timeOffFrequency"></select>
		};
		
		var expectedResponse = '';

		$httpBackend.expectPOST('/route', $rootScope.routeDetails).respond(201, expectedResponse);
		$rootScope.startRoute();
		expect($rootScope.status).toBe('Saving new...');
		$httpBackend.flush();
		expect($rootScope.status).toBe('Success');
	});


	// it('should send auth header', function() {
	// 	var controller = createController();
	// 	$httpBackend.flush();
	// 
	// 	$httpBackend.expectPOST('/add-msg.py', undefined, function(headers) {
	// 		// check if the header was send, if it wasn't the expectation won't
	// 		// match the request and the test will fail
	// 		return headers['Authorization'] == 'xxx';
	// 	}).respond(201, '');
	// 
	// 	$rootScope.saveMessage('whatever');
	// 	$httpBackend.flush();
	// });
});