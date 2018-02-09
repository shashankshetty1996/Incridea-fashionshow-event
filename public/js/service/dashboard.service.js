"use strict";

angular.module("myApp").factory("DashboardService", DashboardService);

DashboardService.$inject = ["DetailsService", "ParticipantsService"];

function DashboardService(DetailsService, ParticipantsService) {
    let service = {};
    let response;
    
    service.addDetails = addDetails;
    service.addParticipants = addParticipants;
    service.getListByTeamID = getListByTeamID;
    
    return service;

    function addDetails(collegename, teamname, callback) {
        DetailsService.addDetails(collegename, teamname)
            .then(function(res) {
                response = {success: true, message: res};
                callback(response);
            }, function(res) {
                response = res;
                callback(response);
            });
    }

    function addParticipants(teamID, teamDetails, callback) {
        ParticipantsService.addParticipants(teamID, teamDetails)
            .then(function(res) {
                response = {success: true, message: res};
                callback(response);
            }, function(res) {
                response = res;
                callback(response);
            });    
    }

    function getListByTeamID(teamID, callback) {
        ParticipantsService.getListByTeamID(teamID)
            .then(function(res) {
                response = {success: true, message: res};
                callback(response);
            }, function(res) {
                response = res;
                callback(response);
            }); 
    }
}
