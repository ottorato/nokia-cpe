(function () {
    'use strict';

    var serviceId = 'uploadService';

    angular.module('app').factory(serviceId, ['commonService', 
    	function (commonService) {
    	
    		var javaControllerPrefix = "/tools";
    	
	    	var service = {
	    			uploadFile: uploadFile
	    	};
	    	return service;
	    	
	    	function uploadFile(formData) {
	            var res = commonService.ajaxPostRequetsUpload(javaControllerPrefix + '/upload', formData);
	            return res;
	    	}
    }]);
})();