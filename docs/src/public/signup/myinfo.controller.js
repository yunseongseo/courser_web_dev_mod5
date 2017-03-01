(function() {
	'use strict';
	angular.module('public')
	.controller('MyinfoController', MyinfoController);

	MyinfoController.$inject = ["myInfo"];
	function MyinfoController(myInfo) {
		console.log("MyInfoController is created");
		var $ctrl = this;
		$ctrl.myInfo = myInfo;
	}
})();