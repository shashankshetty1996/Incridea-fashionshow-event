angular
.module('myApp')
.controller('bobController',bobController);

bobController.$inject = ['$scope'];
function bobController($scope) {
    $scope.msg = "Under Maintains Coming Soon......";
}