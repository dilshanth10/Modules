
(function() {
  'use strict';

  angular
      .module('app.userDashboard')
      .config(routeConfig);

  routeConfig.$inject = ['$routeProvider'];

  function routeConfig($routeProvider) {
      $routeProvider
      .when('/dashboard', {
        template: '<carer-dashboard></carer-dashboard>',
        resolve: {
          check:['$location', function($location){  
           
        }],
          lazy: ['$ocLazyLoad', function ($ocLazyLoad) {
            return $ocLazyLoad.load(
          {
            files: ['app/modules/dashboard/user-dashboard.controller.js'],
            cache: false
        });
        }]
      }
    });
  }
})();