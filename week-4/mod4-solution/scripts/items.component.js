(function() {
'use strict';
angular.module('MenuApp')
  .component('items', {
    templateUrl: './templates/itemscomponent.template.html',
    bindings: {
      items: '<'
    }
  });
})();
