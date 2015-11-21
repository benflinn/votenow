'use strict';

angular.module('votenowApp')
    .controller('MypollsCtrl', function($scope, $http) {
        $scope.awesomeThings = [];
        var erased = [];

        var userId = 'anonymous';

        $http.get('/api/users/me').success(function(success) {
            userId = success._id;
            refresh();
        });

        function refresh() {

            $http.get('/api/things').success(function(awesomeThings) {
                var yourPolls = [];
                for (var x = 0; x < awesomeThings.length; x++) {
                    if (awesomeThings[x].createdBy === userId) {
                        yourPolls.push(awesomeThings[x]);
                    }
                }
                $scope.awesomeThings = yourPolls;
            });
        }

        $http.get('/api/users/me').success(function(success) {
            userId = success._id;
        });

        $scope.newChoices = [0, 1];
        $scope.newAnswers = [];

        $scope.addChoice = function() {
            $scope.newChoices.push($scope.newChoices.length);
        };

        $scope.addThing = function() {
            if ($scope.newThing === '') {
                return;
            }

            var emptyScores = Array.apply(null, new Array($scope.newChoices.length)).map(Number.prototype.valueOf, 0);

            $http.post('/api/things', {
                name: $scope.newThing,
                choices: $scope.newAnswers,
                scores: emptyScores,
                createdBy: userId
            });

            $scope.newThing = '';
            $scope.newChoices = [0, 1];
            $scope.newAnswers = [];

            refresh();
        };

        $scope.deleteThing = function(thing) {
            $http.delete('/api/things/' + thing._id);
            erased.push(thing._id);
        };

        $scope.removed = function(thing) {
            if (erased.indexOf(thing._id) === -1) {
                return false;
            } else {
                return true;
            }
        };

    });
