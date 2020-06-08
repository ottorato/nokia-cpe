(function () {
        'use strict';
        var controllerId = 'toolsController';
        angular.module('app').controller(controllerId, ['$scope', 'common', 'uiGridConfiguration', 'toolsService', 'uploadService',
        function ($scope, common, uiGridConfiguration, toolsService, uploadService) {

            var vm = this;
            var getLogFn = common.logger.getLogFn;
            var logSuccess = getLogFn(controllerId, 'success');
            var logError = getLogFn(controllerId, 'error');

            vm.windowTitle = "T o o l s";
            vm.DEFAULT_OPTION_SELECT = "Take your pick";
            
            vm.address = {};
            vm.estados = [];
            vm.municipios = [];
            vm.colonias = [];
            
            (function () {
	            toolsService.getAddressData().then(function (data) {
	            	if (data) {
	            		vm.estados = data.objeto.estados;
            		} else {
            			logError("No data found.")
            		}
	            })
            })();
            
            vm.getCPData = function () {
            	console.log('getCPData...')
            	toolsService.getCPData(vm.address.cp).then(function (data) {
	            	if (data && data.objeto.codigosPostales) {
	            		vm.colonias = data.objeto.codigosPostales;
	            		vm.municipios = [];
            			vm.municipios[0] = vm.colonias[0].municipio;
            			vm.address.municipio = vm.colonias[0].municipio;
            			vm.address.estado = vm.colonias[0].municipio.estado;
            		} else {
            			logError("No data found.")
            		}
	            })
            }
            
            vm.getMunicipiosPorEstado = function () {
            	console.log('estado:' + vm.address.estado)
            	console.log('getMunicipiosPorEstado...')
            	var prev = vm.address.idEstado;
            	toolsService.getMunicipiosPorEstado(vm.address.estado.id).then(function (data) {
            		//vm.address.idEstado = prev;
	            	if (data) {
	            		vm.municipios = data.objeto.municipios;
	            		vm.colonias = [];
	            		vm.address.cp = '';
            		} else {
            			logError("No data found.")
            		}
	            })
            }
            
            vm.getColoniasPorMunicipio = function () {
            	console.log('getColoniasPorMunicipio...' + vm.address.municipio)
            	
            	toolsService.getColoniasPorMunicipio(vm.address.municipio.id).then(function (data) {
	            	if (data && data.objeto.codigosPostales) {
	            		vm.colonias = data.objeto.codigosPostales;
	            		if (vm.colonias.length == 1) {
	            			vm.address.colonia = vm.colonias[0];
	            			vm.address.cp =vm.address.colonia.sCP;
	            		} else {
	            			vm.address.cp = '';
	            		}
            		} else {
            			logError("No data found.")
            		}
	            })
            }
            
            vm.setMunicipioId = function (idColonia) {
            	console.log('setMunicipioId...')
            	angular.forEach(vm.colonias, function(value, key) {
            		if (value.id == idColonia) {
            			vm.municipios = [];
            			vm.municipios[0] = value.municipio;
            			vm.address.municipio = value.municipio;
            			vm.address.estado = value.municipio.estado;
            			vm.address.cp = value.sCP;
            		}
            	});
            }
            
            vm.data = 'none';
            vm.add = function() {
            	var ff = document.getElementById('file').files;
              var f = document.getElementById('file').files[0],
                  r = new FileReader();
              r.onloadend = function(e){
                vm.data = e.target.result;
              }
              r.readAsBinaryString(f);
            }
            
            vm.uploadFile = function() {
            	var files = document.getElementById('file').files;
            	var formData = new FormData();
            	angular.forEach(files, function(file) {
            		formData.append('file', file);
            	});
            	uploadService.uploadFile(formData);
            }
            
         }]);
})();