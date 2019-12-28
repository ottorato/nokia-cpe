(function () {
        'use strict';
        var controllerId = 'catalogsController';
        angular.module('app').controller(controllerId, ['$scope', 'common', 'uiGridConfiguration', 'catalogsService', 'commonService',
        function ($scope, common, uiGridConfiguration, catalogsService, commonService) {

            var vm = this;
            var getLogFn = common.logger.getLogFn;
            var logSuccess = getLogFn(controllerId, 'success');
            var logError = getLogFn(controllerId, 'error');

            vm.windowTitle = "Catalogs";
            vm.DEFAULT_OPTION_SELECT = "Take your pick";
            
            vm.selTab1 = 1;
            vm.selTab2 = 2;
            
            vm.setTab = function (panel, tab) {
                if (panel === 'preview')
                    vm.selTab2 = tab;
                else
                    vm.selTab1 = tab;
            };
            
            vm.isSet = function (panel, tab) {
                var selected = false;

                if (panel === 'preview' && vm.selTab2 === tab) selected = true;
                if (panel === 'data' && vm.selTab1 === tab) selected = true;

                return selected;
            };
            
            vm.paises = [];
            vm.marcas = [];
            vm.modelos = [];
            vm.cpes = [];
            
            vm.pais = {};
            vm.brand = {};
            vm.modelo = {};
            vm.cpe = {};
            
            
            vm.modelo.id = 0;
            vm.modelo.idBrand = 0;
            vm.comboModelo = true;
            
            vm.gridOptions = new uiGridConfiguration();
            vm.gridOptions.enableFiltering = false;
            vm.gridOptions.multiSelect = false;
            vm.gridOptions.paginationPageSizes = [ 25, 50, 75, 100];
            vm.gridOptions.paginationPageSize = 25;
            vm.gridOptions.noUnselect = true;
            vm.gridOptions.enableScrollbars = 2;
            vm.gridOptions.keepLastSelected = false;
            
            
            
            var botones = '<div class="text-center">' +
            '<a href="#" title="Edit" ng-show="true" ng-click="grid.appScope.goEdicion(row.entity)"> <i class="fa fa-pencil "></i></a>' +
            '<a href="#" title="Delete" ng-click="grid.appScope.goBorrar(row.entity.id)"> <i class="fa fa-trash-o "></i></a>' +
            '</div>';
            
            vm.gridOptions.columnDefs = [
            	{
                    field: 'brand.oui',
                    displayName: 'OUI',
                    width: '20%'
                }, {
                    field: 'brand.nombre',
                    displayName: 'Product Class',
                    width: '20%'
                }, {
                	field: 'brand.pais.nombre',
                    displayName: 'Origin',
                    width: '30%'
                }, {
                	field: 'nombre',
                    displayName: 'Device Name',
                    width: '20%'
                }, {
                    name: 'del',
                	displayName: '',
                    enableColumnMenu: false,
                    enableHiding: false,
                    enableFiltering: false,
                    width: '10%',
                    cellTemplate: botones
                }
            ];
            
            vm.gridOptionsG2 = new uiGridConfiguration();
            
            var botonesG2 = '<div class="text-center">' +
            '<a href="#" title="Edit Record" ng-show="true" ng-click="grid.appScope.goEdicion(row.entity)"> <i class="fa fa-pencil "></i></a>' +
            '<a href="#" title="Delete" ng-show="true" ng-click="grid.appScope.goBorrar(row.entity.id)"> <i class="fa fa-trash-o "></i></a>' +
            '<a href="#" title="Disable" ng-show="row.entity.enabled" ng-click="grid.appScope.toggleEnable(row.entity.id, false)"> <i class="fa fa-thumbs-down"></i></a>' +
            '<a href="#" title="Enable" ng-show="row.entity.disabled" ng-click="grid.appScope.toggleEnable(row.entity.id, true)"> <i class="fa fa-thumbs-up"></i></a>' +
            '</div>';
            
            vm.gridOptionsG2.columnDefs = [
            	{
            		field: 'model.brand.pais.nombre',
                    displayName: 'Origin',
                    width: '15%'
                }, {
                    field: 'model.brand.oui',
                    displayName: 'OUI',
                    width: '15%'
                }, {
                    field: 'model.brand.nombre',
                    displayName: 'Product Class',
                    width: '15%'
                }, {
                	field: 'serie',
                    displayName: 'SN',
                    width: '15%'
                }, {
                	field: 'suscriptor',
                    displayName: 'Suscriber Id',
                    width: '15%'
                }, {
                	field: 'firmware',
                    displayName: 'Firmware',
                    width: '15%'
                }, {
                    name: 'del',
                	displayName: '',
                    enableColumnMenu: false,
                    enableHiding: false,
                    enableFiltering: false,
                    width: '10%',
                    cellTemplate: botonesG2
                }
            ];
            
            (function () {
            	catalogsService.listaInicial().then(function (data) {
            		if (data) {
            			vm.paises = data.objeto.paises;
            			vm.marcas = data.objeto.brands;
                        vm.modelos = data.objeto.modelos;
                        vm.cpes = data.objeto.cpes;
                        
                        vm.gridOptions.data = vm.modelos;
                        vm.gridOptionsG2.data = vm.cpes;
            		} else {
            			
            		}
            	})
            })();
            
            vm.savePais = function () {
            	catalogsService.guardarPais(vm.pais.id, vm.pais.nombre, vm.pais.nombreCorto).then(function (data) {
            		if (data) {
            			if (data.codigo === 0) {
            				logSuccess(data.mensaje);
                			vm.paises = data.objeto.paises;
                			vm.pais = {};
            			} else {
            				logError(data.mensaje);
            			}
            		}
            	})
            }
            
            vm.saveBrand = function () {
            	catalogsService.guardarMarca(vm.brand.idPais, vm.brand.nombre, vm.brand.oui).then(function (data) {
            		if (data) {
            			if (data.codigo === 0) {
            				logSuccess(data.mensaje);
            				vm.marcas = data.objeto.brands;            
            				
            	            vm.brand = {};
            			} else {
            				logError(data.mensaje);
            			}
            		}
            	})
            }
            
            vm.saveModelo = function () {
            	catalogsService.guardarModelo(vm.modelo.id, vm.modelo.brand.id, vm.modelo.nombre).then(function (data) {
            		if (data) {
            			if (data.codigo === 0) {
            				logSuccess(data.mensaje);
                            vm.modelos = data.objeto.modelos;
                            
                            vm.gridOptions.data = vm.modelos;
                            vm.modelo = {};
                            vm.modelo.id = 0;
            			} else {
            				logError(data.mensaje);
            			}
            		} else {
        				logError("Error grave");
        			}
            	})
            }
            
            vm.saveCPE = function () {
            	var cpeDTO = {
            			id: vm.cpe.id,
            			serie: vm.cpe.serial,
            			suscriptor: vm.cpe.suscriber,
            			firmware: vm.cpe.firmware,
            			ipAddress: vm.cpe.ip,
            			macAddress: vm.cpe.mac,
            			modelId: vm.cpe.model
            	}
            	catalogsService.guardarCPE(cpeDTO).then(function (data) {
            		if (data) {
            			commonService.procesaRespuestaBackend(data);
            			vm.cpe = {};
            		}
            	})
            }
            
            vm.cancelEdit = function () {
            	vm.comboModelo = true;
            	vm.modelo = {id:0};
            }
            
            vm.getMarcaById = function (obj, id) {
            	var ret;
            	angular.forEach(obj, function(value, indx) {
            		if (value.id == id) {
            			ret = obj[indx];
            		}
            	});
            	return ret;
            }
            
            $scope.goEdicion = function (modelo) {
            	vm.modelo = {};
            	vm.comboModelo = false;
            	vm.modelo.id = modelo.id;
            	vm.modelo.brand = vm.getMarcaById(vm.marcas, modelo.brand.id);
            	vm.modelo.nombre = modelo.nombre;
            	
            	angular.element('#modeloName').focus()
            }
            
            $scope.goBorrar = function (id) {
            	catalogsService.borrarModelo(id).then(function (data) {
            		if (data) {
            			if (data.codigo === 0) {
            				logSuccess(data.mensaje);
                            vm.modelos = data.objeto.modelos;  
                            vm.gridOptions.data = vm.modelos;
            			} else {
            				logError(data.mensaje);
            			}
            		}
            	})
            }
            
            $scope.toggleEnable = function (id, enabled) {
            	catalogsService.toggleEnable(id, enabled).then(function (data) {
            		if (data) {
            			commonService.procesaRespuestaBackend(data);
            			vm.cpes = data.objeto.cpes;
            			vm.gridOptionsG2.data = vm.cpes;
            		}
            	})
            }
            
            
            
        }]);
})();