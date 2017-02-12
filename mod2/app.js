(function() {
	'use strict';

	angular.module('MyApp', [])
	.controller('ToBuyController', ToBuyController)
	.controller('AlreadyBoughtController', AlreadyBoughtController)
	.service('ShoppingListCheckOffService', ShoppingListCheckOffService);

	ToBuyController.$inject = ['ShoppingListCheckOffService']
	function ToBuyController(ShoppingListCheckOffService) {
		var self = this;
		self.items = function() {
			return ShoppingListCheckOffService.toBuyList;
		}

		self.moveToBought = function(index) {
			ShoppingListCheckOffService.moveToBoughtItem(index);
		}

		self.isEmpty = function() {
			return ShoppingListCheckOffService.toBuyList.length == 0;
		}
	}

	AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
	function AlreadyBoughtController(ShoppingListCheckOffService) {
		var self = this;
		self.items = function() {
			return ShoppingListCheckOffService.boughtList;
		}

		self.isEmpty = function() {
			return ShoppingListCheckOffService.boughtList.length == 0;
		}
	}

	function ShoppingListCheckOffService() {
		var service = this;

		service.toBuyList = [
			{name:"Cookie", quantity:10},
			{name:"Candy", quantity:5},
			{name:"Ice cream", quantity:20},
			{name:"Chocolate", quantity:50},
			{name:"Juice", quantity:15},
		];

		service.boughtList = [];

		service.moveToBoughtItem = function(indexInToBuyList) {
			var item = service.toBuyList[indexInToBuyList];
			service.toBuyList.splice(indexInToBuyList, 1);
			service.boughtList.push(item)
		}
	}
})();