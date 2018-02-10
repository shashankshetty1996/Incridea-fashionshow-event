angular.module("myApp", [])
.controller('reportController',reportController);

reportController.$inject = ['$scope', '$http', 'DashboardService'];
function reportController($scope, $http, DashboardService) {
    // Getting team id
    let teamID = localStorage.getItem('team-id');

    // setting auth
    let token = JSON.parse(localStorage.getItem('globals')).currentUser.token;
    $http.defaults.headers.common['Authorization'] = 'Bearer ' + token;

    $scope.teamID = teamID;

    $scope.print = function() {
        window.print();
        location.href('/');
    }

    // Report of all the participants
    DashboardService.getListByTeamID(teamID, function(response) {
        if(response.success) {
            $scope.ParticipantsList = response.message; 
        }
    });
}