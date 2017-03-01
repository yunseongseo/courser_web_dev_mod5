(function () {
	"use strict";
	angular.module('public')
	.component('favitem', {
  		templateUrl: 'src/public/signup/singleitem.html',
  		bindings: {
    		selectedmenu: '<'
  		},
  		controller: favMenuController,
});

favMenuController.$inject = ['MenuService'];
function favMenuController(MenuService) {
	var $ctrl = this;
	$ctrl.failed = false;

	MenuService.getMenuItems($ctrl.selectedmenu).then(function(response) {
		console.log(response);
		$ctrl.failed = false;
		$ctrl.menu = response;
	}, 
	function(error) {
		console.log(error);
		$ctrl.failed = true;
	});
	
	// var MenuService.getMenuItems
	// console.log($ctrl);

}

})();
