angular
.module('myApp')
.controller('dashboardController',dashboardController);

dashboardController.$inject = ['$scope', '$location', 'DashboardService'];
function dashboardController($scope, $location, DashboardService) {    
    // $scope.noparticipant = 0;
    // $scope.teamname;
    // $scope.collegename;

    $scope.cardcount = [];
    for(let i = 1; i <= $scope.noparticipant; i++) {
        $scope.cardcount.append(i);
    }

    $scope.participantCounter = function() {
        // reset the card count
        $scope.cardcount = [];
        for(let i = 1; i <= $scope.noparticipant; i++) {
            let data = {id: i,name: '', usn: '',phone: '', email: '' };
            $scope.cardcount.push(data);
        }
    }

    $scope.submit = function() {
        let collegename = $scope.collegename;
        let teamname = $scope.teamname;
        let noparticipant = $scope.noparticipant;
        let teamDetails = $scope.cardcount;

        DashboardService.addDetails(collegename, teamname, function(response) {
            if(response.success) {
                // Get Team ID
                let teamID = response.message.team_id;
                DashboardService.addParticipants(teamID, teamDetails, function(resp) {
                    if(resp.success) {
                        // successful
                        localStorage.setItem("team-id", teamID);
                        $location.path('/fashion');
                    }
                });
            }
        });
    }
}