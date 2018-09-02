(function () {
  'use strict';

  angular.module('app.login').controller('userLoginCtrl', userLoginCtrl);
  userLoginCtrl.$inject = ['$timeout', 'commonService'];
  function userLoginCtrl($timeout, commonService){

    var vm = this;
    vm.systemName = "Child Care System";
    vm.userLogin = userLogin;

    commonService.getDetails(function(userData){
      var data = userData.data;
      vm.userData = data;
      vm.userDataFirst = data[0].title;
    });

    function userLogin(){
      commonService.getDetails(function(userData){
        var data = userData.data;
        
        if(userData.status === 200){
          vm.success = "Successfully Logged in";
        }
        else{
          vm.success = "Login Failed";
        }
      });
    }

  }
                     
 
})();