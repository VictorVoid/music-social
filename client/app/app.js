'use strict';

angular.module('musicSocialApp', ['musicSocialApp.auth', 'musicSocialApp.admin',
    'musicSocialApp.constants', 'ngCookies', 'ngResource', 'ngSanitize', 'ui.router',
    'validation.match'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
