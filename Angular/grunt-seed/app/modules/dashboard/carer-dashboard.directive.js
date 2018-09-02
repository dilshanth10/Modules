angular.module('app.userDashboard').directive('carerDashboard', function () {
  /*
  calendar: This directive binds data (two way bind) for the calendar inputs.
  */
  return {
    scope: true,
    controller: 'carerdashboardController',
    controllerAs: 'vm',
    templateUrl: 'app/modules/dashboard/carer-dashboard.html'

  };
});