'use strict';

angular.module('votenowApp')
    .controller('MainCtrl', function($scope, $http) {
        $scope.awesomeThings = [];

        function refresh() {
            $http.get('/api/things').success(function(awesomeThings) {
                $scope.awesomeThings = awesomeThings;
            });
        }

        refresh();

        $scope.addThing = function() {
            if ($scope.newThing === '') {
                return;
            }
            $http.post('/api/things', {
                name: $scope.newThing,
                option1: $scope.option1,
                option2: $scope.option2,
                option3: $scope.option3,
                option4: $scope.option4,
                option5: $scope.option5,
                score1: 0,
                score2: 0,
                score3: 0,
                score4: 0,
                score5: 0
            });
            $scope.newThing = '';
            $scope.option1 = '';
            $scope.option2 = '';
            $scope.option3 = '';
            $scope.option4 = '';
            $scope.option5 = '';
            refresh();
        };

        $scope.deleteThing = function(thing) {
            $http.delete('/api/things/' + thing._id);
            refresh();
        };

        $scope.onePlusThing = function(thing, score, scorePlusName) {
            thing[scorePlusName]++;
            $http.put('/api/things/' + thing._id, thing);
            console.log(thing);

            refresh();
        };
    });
