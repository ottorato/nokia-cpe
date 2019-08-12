(function () {
        'use strict';
        var controllerId = 'dashBoardController';
        angular.module('app').controller(controllerId, ['$scope', 'common', 'uiGridConfiguration', 'dashboardService', 'commonService',
        function ($scope, common, uiGridConfiguration, dashboardService, commonService) {

            var vm = this;
            var getLogFn = common.logger.getLogFn;
            var logSuccess = getLogFn(controllerId, 'success');
            var logError = getLogFn(controllerId, 'error');

            vm.windowTitle = "Dashboard";
            vm.DEFAULT_OPTION_SELECT = "Take your pick";
            
            vm.cpes = [];
            vm.datosModems = [];
            vm.endpoints = [];
            
            vm.cpe = {};
            vm.endpoint = {};
            
            vm.gridOptions = new uiGridConfiguration();
            vm.gridOptions.enableFiltering = false;
            vm.gridOptions.multiSelect = true;
            vm.gridOptions.enableRowSelection = true;
            vm.gridOptions.enableSelectAll = true;
            vm.gridOptions.showGridFooter = true;
            
            vm.gridOptions.paginationPageSizes = [ 25, 50, 75, 100];
            vm.gridOptions.paginationPageSize = 25;
            vm.gridOptions.noUnselect = false;
            vm.gridOptions.enableScrollbars = 2;
            vm.gridOptions.keepLastSelected = false;
            
            vm.gridOptions.onRegisterApi = function (gridApi) {
            	vm.gridApi = gridApi;
                gridApi.selection.on.rowSelectionChanged($scope, function (row) {
                	
                });
            };
            
            var botones = '<div class="text-center">' +
            '<a href="#" title="Modem online" ng-show="row.entity.reachable"> <i class="fa fa-check-square"></i></a>' +
            '<a href="#" title="Modem offline" ng-show="!row.entity.reachable&&row.entity.managed"> <i class="fa fa-times"></i></a>' +
            '<a href="#" title="Modem managed" ng-show="row.entity.managed" ng-click="grid.appScope.checkCPEStat(row.entity.reachable)"> <i class="fa fa-database"></i></a>' +
            '<a href="#" title="Modem unmanaged" ng-show="!row.entity.managed"> <i class="fa fa-ban"></i></a>' +
            
            '<a class="font-icons-table" href="#" title="Radio Enabled" ng-show="row.entity.radio"> <i class="fa fa-wifi"></i></a>' +
            '<a class="font-icons-table-tachado" href="#" title="Radio Disabled" ng-show="!row.entity.radio&&row.entity.managed">&nbsp;No WiFi</a>' +
            
            '<a class="font-icons-table" href="#" title="DHCP Enabled" ng-show="row.entity.dhcp">&nbsp;DHCP</a>' +
            '<a class="font-icons-table-tachado" href="#" title="No DHCP" ng-show="!row.entity.dhcp&&row.entity.managed"><del>&nbsp;DHCP</del></a>' +
            
            '<a class="font-icons-table" href="#" title="NAT Enabled" ng-show="row.entity.nat">&nbsp;NAT</a>' +
            '<a class="font-icons-table-tachado" href="#" title="NAT No Enabled" ng-show="!row.entity.nat&&row.entity.managed"><del>&nbsp;NAT</del></a>' +
            
            '<a class="font-icons-table" href="#" title="5GHz ready" ng-show="row.entity.frecuency5GHz">&nbsp;5GHz</a>' +
            '<a class="font-icons-table-tachado" href="#" title="5GHz not available" ng-show="!row.entity.frecuency5GHz&&row.entity.managed"><del>&nbsp;5GHz</del></a>' +
            
            '</div>';
            
            vm.gridOptions.columnDefs = [
            	{
                    field: 'cpe.model.brand.nombre',
                    displayName: 'Brand',
                    width: '10%'
                }, {
                    field: 'cpe.model.brand.oui',
                    displayName: 'OUI',
                    width: '15%'
                }, {
                    field: 'cpe.model.nombre',
                    displayName: 'Product Class',
                    width: '15%'
                }, {
                	field: 'cpe.serie',
                    displayName: 'Serial Number',
                    width: '15%'
                }, {
                	field: 'cpe.suscriptor',
                    displayName: 'SuscriberID',
                    width: '20%'
                }, {
                	field: 'date',
                    displayName: 'Date',
                    cellFilter: 'date:"yyyy-MM-dd HH:mm:ss"',
                    width: '10%'
                }, {
                    name: 'del',
                	displayName: '',
                    enableColumnMenu: false,
                    enableHiding: false,
                    enableFiltering: false,
                    width: '15%',
                    cellTemplate: botones
                }
            ];
            
            (function () {
            	dashboardService.listaCPEs().then(function (data) {
            		if (data) {
                        vm.datosModems = data.objeto.datosModems;
                        vm.endpoints = data.objeto.endpoints;
                        
                        vm.gridOptions.data = vm.datosModems;
            		} else {
            			logError(data.mensaje);
            		}
            	})
            })();
            
            function parseResult(res) {
            	var ind;
            	angular.forEach(vm.datosModems, function (item, index) {
            		if (item.cpe.id === res.cpe.id) {
            			ind = index;
            		}
            	});
            	vm.datosModems[ind].date = res.date;
            	vm.datosModems[ind].reachable = res.reachable;
            	vm.datosModems[ind].managed = res.managed;
            	vm.datosModems[ind].radio = res.radio;
            	vm.datosModems[ind].dhcp = res.dhcp;
            	vm.datosModems[ind].frecuency5GHz = res.frecuency5GHz;
            	vm.datosModems[ind].nat = res.nat;

            }
            
            vm.checkStatus = function (idEndPont) {
            	angular.forEach(vm.datosModems, function (item) {
	            	dashboardService.cpeStatus(idEndPont, item.cpe.id).then(function (data) {
	            		if (data) {
	            			parseResult(data.objeto);
	            		} else {
	            			logError(data.mensaje);
	            		}
	            	})
            	});
            }
            
            $scope.checkCPEStat = function (id) {
            	alert(id)
            	return false;
            }
            
            
            
        }]);
})();