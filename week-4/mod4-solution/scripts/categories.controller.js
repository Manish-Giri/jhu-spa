(function () {
'use strict';
angular.module('MenuApp')
.controller('CategoriesController', CategoriesController);
CategoriesController.$inject = ['categories'];
function CategoriesController(categories) {
  const categoriesCtrl = this;
  categoriesCtrl.categories = categories;
}
})();
