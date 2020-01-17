(function () {
        'use strict';
        var controllerId = 'toolsController';
        angular.module('app').controller(controllerId, ['$scope', 'common', 'uiGridConfiguration', 'toolsService', 'commonService',
        function ($scope, common, uiGridConfiguration, toolsService, commonService) {

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
            	toolsService.getCPData(vm.address.cp).then(function (data) {
	            	if (data && data.objeto.codigosPostales) {
	            		vm.colonias = data.objeto.codigosPostales;
	            		vm.municipios = [];
            			vm.municipios[0] = vm.colonias[0].municipio;
            			vm.address.idMunicipio = vm.colonias[0].municipio;
            			vm.address.idEstado = vm.colonias[0].municipio.estado;
            		} else {
            			logError("No data found.")
            		}
	            })
            }
            
            vm.getMunicipiosPorEstado = function () {
            	toolsService.getMunicipiosPorEstado(vm.address.idEstado).then(function (data) {
	            	if (data) {
	            		vm.municipios = data.objeto.municipios;
	            		//vm.colonias = [];
	            		//vm.address.cp = '';
            		} else {
            			logError("No data found.")
            		}
	            })
            }
            
            vm.getColoniasPorMunicipio = function () {
            	toolsService.getColoniasPorMunicipio(vm.address.idMunicipio).then(function (data) {
	            	if (data) {
	            		vm.colonias = data.objeto.codigosPostales;
	            		vm.address.cp = '';
            		} else {
            			logError("No data found.")
            		}
	            })
            }
            
            vm.setMunicipioId = function (idColonia) {
            	angular.forEach(vm.colonias, function(value, key) {
            		if (value.id === idColonia) {
            			vm.municipios = [];
            			vm.municipios[0] = value.municipio;
            			vm.address.idMunicipio = value.municipio;
            			vm.address.idEstado = value.municipio.estado;
            			vm.address.cp = value.sCP;
            		}
            	});
            }
         }]);
})();