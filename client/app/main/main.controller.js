'use strict';

angular.module('votenowApp')
    .controller('MainCtrl', function($scope, $http, localStorageService) {

        var votes = localStorageService.get('storedVotes') || [];

        $scope.awesomeThings = [];

        $http.get('/api/things').success(function(awesomeThings) {
            $scope.awesomeThings = awesomeThings;
        });

        $scope.voteCheck = function(obj) {
            if (votes.indexOf(obj._id)==-1) {
                return true;
            } else {
                return false;
            }
        }


        $scope.onePlusThing = function(obj, num) {
            
            if (votes.indexOf(obj._id) != -1) {
                alert('you have already voted in this poll.');
            } else {
                obj.scores[num]++;
                votes.push(obj._id);
                localStorageService.set('storedVotes', votes);
                $http.put('/api/things/' + obj._id, obj);
            }


        };

    });
