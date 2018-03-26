(function() {
'use strict';

angular.module('data').service('MenuDataService', MenuDataService);
MenuDataService.$inject = ['$http'];
function MenuDataService($http) {
  const menuService = this;

  menuService.getAllCategories = function() {
    return $http({
      method: 'GET',
      url: 'https://davids-restaurant.herokuapp.com/categories.json'
    });
  };

  menuService.getItemsForCategory = function(categoryShortName) {
    return $http({
      method: 'GET',
      url: 'https://davids-restaurant.herokuapp.com/menu_items.json',
      params: {category: categoryShortName}
    });
  };
}
})();
