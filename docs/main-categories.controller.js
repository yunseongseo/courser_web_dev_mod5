(function() {
	'use strict';

	angular.module('data')
		.controller('MainCategoryController', MainCategoryController);

	MainCategoryController.$inject = ['items'];
	function MainCategoryController(items) {
  		var mainCatCtrl = this;
  		mainCatCtrl.items = items;
	}
})();