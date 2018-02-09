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
                $scope.clearField();
                $location.path('/');
            } else {              
                let toastContent = '<span class="flow-text">Invaild Credentials</span>';  
                Materialize.toast(toastContent, 3000);
            }
        });
    }

    // clear fields
    $scope.clearField = function() {
        $scope.username = "";
        $scope.password = "";
    }
}