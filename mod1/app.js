(function() {
	'use strict';

	angular.module('app_mod1', [])
	.controller('app_mod1_controller', LunchCheckController);

	LunchCheckController.$inject = ['$scope', '$filter'];
	function LunchCheckController($scope, $filter) {
		$scope.checkTooMuch = function() {
			var foods = $scope.input_foods.split(',');
			foods = foods.filter(function(e) { return e.trim().length !== 0 });

			if (foods.length > 3) {
			 	$scope.message_result = "Too much!"
			} else {
				$scope.message_result = "Enjoy!"
			}
		}
	}
})();