			(function () {
				"use strict";

				angular.module('app.userDashboard').controller('carerdashboardController',
					carerdashboardController);
				carerdashboardController.$inject = ['$scope', '$rootScope',
					'commonService', '$filter', '$interval'
				];

				function carerdashboardController($scope, $rootScope, commonService,
					$filter, $interval) {
					//var vm = this;

					$scope.num = 0;
					$interval(function () {
						$scope.num += 1;
					}, 10);

					var x = commonService.getDetails(function (data) {
						var x = data;
					});
				}
			})();