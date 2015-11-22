'use strict';

angular.module('votenowApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/poll/:id', {
        templateUrl: 'app/poll/poll.html',
        controller: 'PollCtrl'
      });
  });
