'use strict';

angular.module('votenowApp')
    .controller('PollCtrl', function($scope, $route, $routeParams, $http, localStorageService) {

    	var votes = localStorageService.get('storedVotes') || [];

        var pollAddress = $routeParams.id;
        var pollData = [];

        $http.get('/api/things/' + pollAddress).success(function(awesomeThings) {
            pollData = awesomeThings;
            console.log(pollData);
            $scope.pollData = pollData;
        });

        $scope.voteCheck = function(obj) {
            if (votes.indexOf(obj._id)===-1) {
                return true;
            } else {
                return false;
            }
        };

        $scope.onePlusThing = function(obj, num) {

            if (votes.indexOf(obj._id) !== -1) {
                alert('You have already voted in this poll.');
            } else {
                obj.scores[num]++;
                votes.push(obj._id);
                localStorageService.set('storedVotes', votes);
                $http.put('/api/things/' + obj._id, obj);
            }


        };

    });
