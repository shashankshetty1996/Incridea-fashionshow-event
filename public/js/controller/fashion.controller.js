angular
.module('myApp')
.controller('fashionController',fashionController);

fashionController.$inject = ['$scope'];
function fashionController($scope) {
    $scope.msg = "Under Maintains Coming Soon......";
}