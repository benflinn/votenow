'use strict';

angular.module('votenowApp')
  .config(function ($routeProvider) {
    $routeProvider
      .when('/mypolls', {
        templateUrl: 'app/mypolls/mypolls.html',
        controller: 'MypollsCtrl'
      });
  });
