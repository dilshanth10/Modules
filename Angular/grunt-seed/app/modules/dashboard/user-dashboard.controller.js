			(function () {
				"use strict";

				angular.module('app.userDashboard').controller('carerdashboardController',
					carerdashboardController);
				carerdashboardController.$inject = ['$scope', '$rootScope',
					'commonService', '$filter', '$interval'
				];

				function carerdashboardController($scope, $rootScope, commonService,
					$filter, $interval) {
					var vm = this;

					vm.num = 0;
					$interval(function () {
						vm.num += 1;
					}, 10);

					var x = commonService.getDetails(function (data) {
						var x = data;
					});
				}
			})();