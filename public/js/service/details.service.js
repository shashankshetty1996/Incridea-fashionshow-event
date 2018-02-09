"use strict";

angular.module("myApp").factory("DetailsService", DetailsService);

DetailsService.$inject = ["$http"];

function DetailsService($http) {
    let service = {}
    
    service.addDetails = addDetails;
    
    return service;

    function addDetails(collegename, teamname) {
        let data = {collegename: collegename, teamname: teamname};
        return $http.post('/api/details', data).then(handleSuccess, handleError("Error: in getting details"));
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
