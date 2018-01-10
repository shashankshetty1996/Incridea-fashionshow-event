angular
.module('myApp')
.controller('loginController',loginController);

loginController.$inject = ['$scope', 'AuthenticationService'];
function loginController($scope, AuthenticationService) {
    $scope.msg = "INCRIDEA";

    $scope.login = function() {
        let username = $scope.username;
        let password = $scope.password;

        AuthenticationService.login(username, password, function(response) {
            if(response.success) {
                alert('login successful');
            } else {
                alert('login failed');
            }
        });
    }
}