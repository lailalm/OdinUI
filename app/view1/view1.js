'use strict';

angular.module('myApp.view1', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/view1', {
    templateUrl: 'view1/view1.html',
    controller: 'View1Ctrl'
  });
}])

.controller('View1Ctrl', ['$scope', function($scope, $http) {
	function initialize() {
		$scope.vtdirect = 
	    [
		    {name: "Bank Transfer",  path: "bank_transfer", feature:['expiry', 'permata', 'refund']},
		    {name: "BBM Money",   path: "bbm_money", feature:['expiry', 'basic', 'refund']},
		    {name: "BCA KlikPay",   path: "bca_klikpay",  feature:['expiry', 'basic', 'refund']}
		];
		$scope.vtweb = 
	    [
		    {name: "Bank Transfer",  path: "bank_transfer", feature:['mobile_basic', 'permata']},
		    {name: "BBM Money",   path: "bbm_money", feature:['desktop','device','expiry_message','mobile_basic']},
		    {name: "BCA KlikPay",   path: "bca_klikpay",  feature:['basic','mobile_basic']}
		];

	}

  function getResponse() {
  	alert('debug');
  	$http.post('localhost:3000/tests', '{"webdriver" : "firefox", "environment" : "staging", "include_paths" :["vtdirect/bank_transfer/permata.feature" ]}').
		  success(function(data, status, headers, config) {
		    // this callback will be called asynchronously
		    // when the response is available
		  }).
		  error(function(data, status, headers, config) {
		    // called asynchronously if an error occurs
		    // or server returns response with an error status.
		    alert('suc');

		  });
  }

	initialize();
  // getResponse();

}]);