"use strict";

angular.module("myApp").factory("ParticipantsService", ParticipantsService);

ParticipantsService.$inject = ["$http"];

function ParticipantsService($http) {
    let service = {}
    
    service.addParticipants = addParticipants;
    service.getListByTeamID = getListByTeamID;
    
    return service;

    function addParticipants(teamID, noparticipant, teamDetails) {
        let data = {teamID: teamID, noparticipant: noparticipant, teamDetails: teamDetails};
        return $http.post('/api/participants', data).then(handleSuccess, handleError("Error: in getting details"));
    }

    function getListByTeamID(teamID) {
        return $http.get('/api/participants/' + teamID).then(handleSuccess, handleError("Error: in getting details"));
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
