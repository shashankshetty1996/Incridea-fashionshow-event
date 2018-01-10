angular
.module('myApp')
.controller('loginController',loginController);

loginController.$inject = ['$scope', '$location', 'AuthenticationService'];
function loginController($scope, $location, AuthenticationService) {
    // Alert Messages
    $scope.successMsg = "Login Successful";
    $scope.errorMsg = "Invalid Credentials";

    // status initialization
    $scope.errorStatus = false;
    $scope.successStatus = false;

    // clear credentials
    AuthenticationService.clearCredentialToken();

    // login button
    $scope.login = function() {
        let username = $scope.username;
        let password = $scope.password;

        AuthenticationService.login(username, password, function(response) {
            if(response.success) {
                $scope.toggleSuccessStatus();
                $scope.clearField();
                $location.path('/');
            } else {
                $scope.toggleErrorStatus();
            }
        });
    }

    // clear fields
    $scope.clearField = function() {
        $scope.username = "";
        $scope.password = "";
    }

    // toggle status
    $scope.toggleSuccessStatus = function() {
        $scope.successStatus = !$scope.successStatus;
    }

    $scope.toggleErrorStatus = function() {
        $scope.errorStatus = !$scope.errorStatus;
    }
}