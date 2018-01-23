angular
.module('myApp')
.controller('dashboardController',dashboardController);

dashboardController.$inject = ['$scope'];
function dashboardController($scope, $window) {
    $scope.msg = "INCRIDEA";   
    
    // Set same heights for all the three cards.
    // let setMaxHeight = function(height) {
    //     console.log("height is "+ height);
    //     console.log(document.querySelector('#about-hackridea'));
    //     document.querySelector('#about-hackridea').setAttribute("style","height:"+height+"px");
    //     document.querySelector('#about-fashion-show').style.height = height;
    //     document.querySelector('#about-bob').setAttribute("style","height:"+height+"px");
    //     console.log(document.querySelector('#about-hackridea'));        
    // }

    // // initial setup of cards height
    // let hack = document.querySelector('#about-hackridea').clientHeight,
    //         fs = document.querySelector('#about-fashion-show').clientHeight, 
    //         bob = document.querySelector('#about-bob').clientHeight;
    // setMaxHeight(Math.max(hack, fs, bob));

    // window.onresize = function() {
    //     // get heights of all the three cards
    //     let hack = document.querySelector('#about-hackridea').clientHeight,
    //         fs = document.querySelector('#about-fashion-show').clientHeight, 
    //         bob = document.querySelector('#about-bob').clientHeight;
    //     console.log('Hackridea Card size is '+hack);
    //     console.log('Fashion Show Card size is '+fs);
    //     console.log('BOB Card size is '+bob);
    //     setMaxHeight(Math.max(hack, fs, bob));
    // }
}