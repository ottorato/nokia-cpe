(function () {
    'use strict';

    var serviceId = 'dashboardService';

    angular.module('app').factory(serviceId, ['commonService', 
    	function (commonService) {
    	
    		var javaControllerPrefix = "/dash";
    	
	    	var service = {
	    			listaCPEs: listaCPEs,
	    			cpeStatus: cpeStatus
	    	};
	    	return service;
	    	
	    	function listaCPEs() {
	            var res = commonService.ajaxGetRequets(javaControllerPrefix + '/listaCPEs');
	            return res;
	    	}
	    	
	    	function cpeStatus(endpoint, id) {
	            return commonService.ajaxGetRequets(javaControllerPrefix + '/cpeStatus?id=' + id + '&endPoint=' + endpoint);
	        }
    }]);
})();