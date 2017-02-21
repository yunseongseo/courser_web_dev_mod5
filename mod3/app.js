(function() {

	'use strict';
	angular.module('NarrowItDownApp', [])
	.controller('NarrowItDownController', NarrowItDownController)
	.service('MenuSearchService', MenuSearchService)
	.directive('foundItems', FoundItems);


	FoundItems.$inject = [];
	function FoundItems() {
		var ddo = {
			templateUrl:'founditem.html',
			restrict : "AE",
			scope: {
				items: '<',
				onRemove: '&',
			},
		};
		return ddo;
	}

	NarrowItDownController.$inject = ['$scope', 'MenuSearchService'];
	function NarrowItDownController($scope, MenuSearchService) {
		var self = this;
		self.found = [];
		
		self.search = function() {
			var promise = MenuSearchService.getMatchedMenuItems($scope.search_term);
			promise.then(function(result) {
				self.found = MenuSearchService.getFoundItems();
			});
		};

		self.removeItem = function(index) {
			self.found.splice(index, 1);
		}
	}



	MenuSearchService.$inject = ['$http', '$q'];
	function MenuSearchService($http, $q) {
		var service = this;
		var foundItems = [];

		service.getMatchedMenuItems = function(searchTerm) {
			var deferred = $q.defer();
			$http({
				method: 'GET',
				url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
			}).then(function (result) {
				var loaded = result.data.menu_items;
				for (var i = 0; i < loaded.length; i++) {
					if (loaded[i].description.includes(searchTerm)) {
						foundItems.push(loaded[i]);
					}
				}
				deferred.resolve(result);
			});

			return deferred.promise;
		};

		service.getFoundItems = function() {
			return foundItems;
		}
	}
})();