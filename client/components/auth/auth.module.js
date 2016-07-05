'use strict';

angular.module('musicSocialApp.auth', ['musicSocialApp.constants', 'musicSocialApp.util',
    'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
