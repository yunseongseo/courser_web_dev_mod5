(function() {
	'use strict';

	angular.module('MenuApp').
		config(RoutesConfig);

	RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
	function RoutesConfig($stateProvider, $urlRouterProvider) {

		$urlRouterProvider.otherwise('/');
		$stateProvider

		.state('home', {
			url: '/',
			templateUrl: 'templates/home.template.html',
		})

		.state('categories', {
			url: '/categories',
			templateUrl: 'templates/main-categories.template.html',
			controller: 'MainCategoryController as mainCatCtrl',
			resolve: {
				items: ['MenuDataService', function(MenuDataService) {
					return MenuDataService.getAllCategories();
				}]
			}
		})

		.state('menuitem', {
			url: '/categories/{shortname}',
			templateUrl:'templates/items.template.html',
			controller: 'ItemController as itemCtrl',
			resolve: {
				item: ['MenuDataService', '$stateParams', function(MenuDataService, $stateParams) {
					return MenuDataService.getItemsForCategory($stateParams.shortname);
				}]
			}
		});

	}
})();