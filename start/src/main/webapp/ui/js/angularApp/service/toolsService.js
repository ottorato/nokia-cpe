(function () {
    'use strict';

    var serviceId = 'toolsService';

    angular.module('app').factory(serviceId, ['commonService', 
    	function (commonService) {
    	
    		var javaControllerPrefix = "/tools";
    	
	    	var service = {
	    			getAddressData: getAddressData,
	    			cpeStatus: cpeStatus
	    	};
	    	return service;
	    	
	    	function getAddressData() {
	            var res = commonService.ajaxGetRequets(javaControllerPrefix + '/getAddressData');
	            return res;
	    	}
	    	
	    	function cpeStatus(endpoint, id) {
	            return commonService.ajaxGetRequets(javaControllerPrefix + '/cpeStatus?id=' + id + '&endPoint=' + endpoint);
	        }
    }]);
})();