
(function() {
  'use strict';

  angular
      .module('app.login')
      .config(routeConfig);

  routeConfig.$inject = ['$routeProvider'];

  function routeConfig($routeProvider) {
      $routeProvider
      .when('/login', {
        templateUrl: 'app/modules/login/login.html',
        controller: 'userLoginCtrl',
        controllerAs:'vm',
        resolve: {
        lazy: ['$ocLazyLoad', function ($ocLazyLoad) {
           return $ocLazyLoad.load(
        {
          files: ['app/modules/login/login-user.controller.js'],
          cache: false
        });
        }]
     }
    });
  }
})();
