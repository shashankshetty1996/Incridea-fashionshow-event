"use strict";

angular.module("myApp").factory("UserService", UserService);

UserService.$inject = ["$http"];

function UserService($http) {
    let service = {}
    
    service.getUser = getUser;
    
    return service;

    function getUser(username, password) {
        let data = {username: username, password: password};
        return $http.post('/users/', data).then(handleSuccess, handleError("Error: in getting users"));
    }

    // Private function
    function handleSuccess(res) {
        return res.data;
    }

    function handleError(error) {
        return function () {
            return { success: false, message: error };
        };
    }
}
