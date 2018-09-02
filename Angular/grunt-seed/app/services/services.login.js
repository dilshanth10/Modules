(function(){
  'use strict';
  
  angular.module('coreModule').service('commonService',commonService);
  commonService.$inject = ['$http'];
  function commonService ($http){
  
      var service = {};
	  service.getDetails = getDetails;
	  
	  return service;
  
    var vm = this;
	    function getDetails(callback) {
        var userendpoint = 'http://jsonplaceholder.typicode.com/posts';
        // var userendpoint = 'http://localhost:8080/details';
        
        var responseData = {};
        $http.get(userendpoint)
            .success(function (data, status, headers, confige) {
                responseData.data = data;
                responseData.status = status;
                if (status === 200) {
                    callback(responseData);
                }
            })
            .error(function (data, status, headers, confige) {
                responseData.data = data;
                responseData.status = status;
                callback(responseData);
            });

    }
    
    
  }
  })();