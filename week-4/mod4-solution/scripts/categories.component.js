(function() {
'use strict';

angular.module('MenuApp')
  .component('categories', {
    templateUrl: './templates/categoriescomponent.template.html',
    bindings: {
      items: '<'
    }
  });
})();
