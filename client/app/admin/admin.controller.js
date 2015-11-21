'use strict';

angular.module('votenowApp')
    .controller('AdminCtrl', function($scope, $http, Auth, User) {

        var erased = [];

        // Use the User $resource to fetch all users
        $scope.users = User.query();

        $scope.delete = function(user) {
            User.remove({
                id: user._id
            });
            angular.forEach($scope.users, function(u, i) {
                if (u === user) {
                    $scope.users.splice(i, 1);
                }
            });
        };


        $scope.awesomeThings = [];

        $http.get('/api/things').success(function(awesomeThings) {
            $scope.awesomeThings = awesomeThings;
        });

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
