(function () {
    'use strict';

    var serviceId = 'toolsService';

    angular.module('app').factory(serviceId, ['commonService', 
    	function (commonService) {
    	
    		var javaControllerPrefix = "/tools";
    	
	    	var service = {
	    			getAddressData: getAddressData,
	    			getCPData: getCPData,
	    			getMunicipiosPorEstado: getMunicipiosPorEstado,
	    			getColoniasPorMunicipio: getColoniasPorMunicipio
	    	};
	    	return service;
	    	
	    	function getAddressData() {
	            var res = commonService.ajaxGetRequets(javaControllerPrefix + '/getAddressData');
	            return res;
	    	}
	    	
	    	function getCPData(cp) {
	            return commonService.ajaxGetRequets(javaControllerPrefix + '/getCPData?cp=' + cp);
	        }
	    	
	    	function getMunicipiosPorEstado(id) {
	            return commonService.ajaxGetRequets(javaControllerPrefix + '/getMunicipiosPorEstado?id=' + id);
	        }
	    	
	    	function getColoniasPorMunicipio(id) {
	            return commonService.ajaxGetRequets(javaControllerPrefix + '/getColoniasPorMunicipio?id=' + id);
	        }
    }]);
})();