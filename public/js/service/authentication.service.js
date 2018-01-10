"use strict";

angular.module("myApp").factory("AuthenticationService", AuthenticationService);

AuthenticationService.$inject = ["UserService"];

function AuthenticationService(UserService) {
    let service = {}
    let response;
    
    service.login = login;
    
    return service;

    function login(username, password, callback) {
        UserService.getUser(username, password)
            .then(function(user) {
                if(user !== null && user.username === username && user.password === password) {
                    response = {success: true};
                } else {
                    response = {success: false, message: "Username or Password is incorrect"}
                }
                callback(response);
            });
    }
}