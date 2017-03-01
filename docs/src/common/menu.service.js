(function () {
"use strict";

angular.module('common')
.service('MenuService', MenuService);


MenuService.$inject = ['$http', 'ApiPath'];
function MenuService($http, ApiPath) {
  var service = this;
  var signupInfo = null;

  service.getCategories = function () {
    return $http.get(ApiPath + '/categories.json').then(function (response) {
      return response.data;
    });
  };

  service.getMenuItems = function (category) {
    var requestUrl = ApiPath + '/menu_items/' + category + '.json';
    console.log(requestUrl);
    return $http.get(requestUrl).then(function (response) {
      return response.data;
    });
  };

  service.setSignupInfo = function(signupDictionary) {
    signupInfo = signupDictionary;
  };

  service.getSignupInfo = function() {
    return signupInfo;
  }
}
})();
