'use strict';

/**
 * @ngdoc overview
 * @name newApp
 * @description
 * # newappApp
 *
 * Main module of the application.
 */
var MakeApp = angular
    .module('coreModule', [
        'ngAnimate',
        'ngCookies',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'ngTouch',
        'oc.lazyLoad',
        'app.userDashboard',
        'app.login'
    ]);

