(function () {
    'use strict';

    angular.module('data')
    .component('menuitems', {
        templateUrl: 'templates/item-detail.template.html',
        bindings: {
            details: '<',
        },
    });
})();