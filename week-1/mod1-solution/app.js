(function() {
    var myApp = angular.module("LunchCheck", []);
    
    myApp.controller('LunchCheckController', ['$scope', '$log', function($scope, $log) {
        $scope.items = "";
        $log.info($scope.items);
        $scope.message = "";
    
        $scope.checkLunch = function() {
    
            if(!$scope.items) {
                $scope.message = "Please enter data first";
            }
    
            else {
                let lunchItems = $scope.items.split(",").filter(e => /\S/.test(e));
                $scope.message = lunchItems.length <= 3 ? "Enjoy!" :  "Too much!";
            }
            $scope.items = "";
        }
    }])
})()
