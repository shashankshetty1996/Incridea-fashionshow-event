angular
.module('myApp')
.controller('rootController',rootController);

rootController.$inject = ['$scope', '$interval', 'AuthenticationService'];
function rootController($scope, $interval, AuthenticationService) {
    $scope.loggedIn = false;

    $interval(function(){
        $scope.loggedIn = AuthenticationService.getLoginStatus();
    }, 1000);
}