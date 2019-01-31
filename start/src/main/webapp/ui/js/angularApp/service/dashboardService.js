(function () {
    'use strict';

    var serviceId = 'dashboardService';

    angular.module('app').factory(serviceId, ['commonService', 
    	function (commonService) {
    	
	    	var service = {
				listaPaises: listaPaises,
				listaModelos: listaModelos,
				listaModems: listaModems,
				listaInicial: listaInicial,
				guardarPais: guardarPais,
				borrarModelo: borrarModelo,
				guardarMarca: guardarMarca,
				guardarModelo: guardarModelo
	    	};
	    	return service;
	    	
	    	function listaPaises() {
	            var res = commonService.ajaxGetRequets('/dash/listaPaises');
	            return res;
	    	}
	    	
	    	function listaModelos() {
	            var res = commonService.ajaxGetRequets('/dash/listaModelos');
	            return res;
	    	}
	    	
	    	function listaModems() {
	            var res = commonService.ajaxGetRequets('/dash/listaModems');
	            return res;
	    	}
	    	
	    	function listaInicial() {
	            var res = commonService.ajaxGetRequets('/dash/listaInicial');
	            return res;
	    	}
	    	
	    	function guardarPais(id, nombre, nombreCorto) {
	            return commonService.ajaxPostRequets('/dash/guardarPais?id=' + id + '&nombre=' + nombre + '&nombreCorto=' + nombreCorto);
	        }
	    	
	    	function borrarModelo(id) {
	            return commonService.ajaxPostRequets('/dash/borrarModelo?id=' + id);
	        }
	    	
	    	function guardarModelo(id, idMarca, nombre) {
	            return commonService.ajaxPostRequets('/dash/guardarModelo?id=' + id + '&idMarca=' + idMarca + '&nombre=' + nombre);
	        }
	    	
	    	function guardarMarca(idPais, nombre, oui) {
	            return commonService.ajaxPostRequets('/dash/guardarMarca?idPais=' + idPais + '&nombre=' + nombre + "&oui=" + oui);
	        }
    }]);
})();