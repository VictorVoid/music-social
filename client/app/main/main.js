'use strict';

angular.module('musicSocialApp')
  .config(function($stateProvider) {
    $stateProvider.state('main', {
      url: '/',
      templateUrl: 'components/main/main.html'
    });
  });
