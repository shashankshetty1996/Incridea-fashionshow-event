angular
.module('myApp')
.controller('fashionController',fashionController);

fashionController.$inject = ['$scope', 'DashboardService'];
function fashionController($scope, DashboardService) {
    // Getting team id
    let teamID = localStorage.getItem('team-id');

    $scope.teamID = teamID;

    // Report of all the participants
    DashboardService.getListByTeamID(teamID, function(response) {
        if(response.success) {
            $scope.ParticipantsList = response.message; 
        }
    });

    $scope.printMe = function() {
        window.print();
    }
}