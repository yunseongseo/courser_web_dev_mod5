(function() {
	'use strict';

	angular.module('data')
		.controller('ItemController', ItemController);
		
	ItemController.$inject = ['item'];
	function ItemController(item) {
  		var itemCtrl = this;
  		itemCtrl.details = item.menu_items;
  		itemCtrl.name = item.category.name;
	}
})();