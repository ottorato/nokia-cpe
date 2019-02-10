(function () {
        'use strict';
        var controllerId = 'dashBoardController';
        angular.module('app').controller(controllerId, ['$scope', 'common', 'uiGridConfiguration', 'dashboardService', 'commonService',
        function ($scope, common, uiGridConfiguration, dashboardService, commonService) {

            var vm = this;
            var getLogFn = common.logger.getLogFn;
            var logSuccess = getLogFn(controllerId, 'success');
            var logError = getLogFn(controllerId, 'error');

            vm.windowTitle = "Catálogos";
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
            
            vm.gridOptions.onRegisterApi = function (gridApi) {
            	vm.gridApi = gridApi;
                gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                         $scope.selUEN = row.entity;
                         vm.selUEN = row.entity;
                });
            };
            
            var botones = '<div class="text-center">' +
            '<a href="#" title="Editar la Solicitud" ng-show="true" ng-click="grid.appScope.goEdicion(row.entity)"> <i class="fa fa-pencil "></i></a>' +
            '<a href="#" title="Cancelar Solicitud" ng-click="grid.appScope.goBorrar(row.entity.id)"> <i class="fa fa-close "></i></a>' +
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
            
            (function () {
            	dashboardService.listaInicial().then(function (data) {
            		if (data) {
            			vm.paises = data.objeto.paises;
            			vm.marcas = data.objeto.brands;
                        vm.modelos = data.objeto.modelos;
                        vm.cpes = data.objeto.cpes;
                        
                        vm.gridOptions.data = vm.modelos;
            		} else {
            			
            		}
            	})
            })();
            
            vm.savePais = function () {
            	dashboardService.guardarPais(vm.pais.id, vm.pais.nombre, vm.pais.nombreCorto).then(function (data) {
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
            	dashboardService.guardarMarca(vm.brand.idPais, vm.brand.nombre, vm.brand.oui).then(function (data) {
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
            	dashboardService.guardarModelo(vm.modelo.id, vm.modelo.brand.id, vm.modelo.nombre).then(function (data) {
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
            	dashboardService.guardarCPE(cpeDTO).then(function (data) {
            		if (data) {
            			commonService.procesaRespuestaBackend(data);
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
            	dashboardService.borrarModelo(id).then(function (data) {
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
            
            
            
        }]);
})();