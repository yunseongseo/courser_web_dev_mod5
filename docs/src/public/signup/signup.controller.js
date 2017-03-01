(function() {
	'use strict';
	angular.module('public')
	.controller('SignupController', SignupController);

	SignupController.$inject = ["signupInfoSetter"];
	function SignupController(signupInfoSetter) {
		var $signupCtrl = this;
		$signupCtrl.signupInfoSetter = signupInfoSetter;
		$signupCtrl.registered = false;

		$signupCtrl.submit = function() {
			var signupInfo = {
				firstname:$signupCtrl.firstname,
				lastname:$signupCtrl.lastname,
				email:$signupCtrl.email,
				phone:$signupCtrl.phone,
				menu_shortname:$signupCtrl.menu_shortname
			}

			$signupCtrl.signupInfoSetter(signupInfo);
			$signupCtrl.registered = true;
		}

	}
})();