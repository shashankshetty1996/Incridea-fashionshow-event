angular
.module('myApp')
.controller('hackrideaController',hackrideaController);

hackrideaController.$inject = ['$scope'];
function hackrideaController($scope) {
    $scope.msg = "Under Maintains Coming Soon......";
}