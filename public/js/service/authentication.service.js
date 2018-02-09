"use strict";

angular.module("myApp").factory("AuthenticationService", AuthenticationService);

AuthenticationService.$inject = ["$http", "$rootScope", "UserService"];

function AuthenticationService($http, $rootScope, UserService) {
    let service = {}
    let response;
    
    service.login = login;
    service.setCredentialToken = setCredentialToken;
    service.clearCredentialToken = clearCredentialToken;
    service.getLoginStatus = getLoginStatus;
    
    return service;

    function login(username, password, callback) {
        UserService.getUser(username, password)
            .then(function(user) {
                if(user !== null && user.username === username) {
                    response = {success: true};
                    setCredentialToken(username, user.token)
                } else {
                    response = {success: false, message: "Username or Password is incorrect"}
                }
                callback(response);
            });
    }

    function setCredentialToken(username, token) {
        // setting currentUser in globals
        $rootScope.globals = {
            currentUser: {
                username: username,
                token: token
            }
        };

        // set default auth header for http requests
        $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;
        // Local Storage concept.
        localStorage.setItem('globals', JSON.stringify($rootScope.globals));
    }

    function clearCredentialToken() {
        // clearing currentUser object
        $rootScope.globals = {};
        localStorage.removeItem('globals');
        // removing http header
        $http.defaults.headers.common.Authorization = 'Bearer';
    }

    function getLoginStatus() {
        if ($rootScope.globals.currentUser) {
            return true;
        } else {
            return false;
        }
    }
}