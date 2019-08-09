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
            '<a href="#" title="Modem online" ng-show="true"> <i class="fa fa-check-square"></i></a>' +
            '<a href="#" title="Modem offline" ng-show="grid.appScope.checkCPEStat(row.id)"> <i class="fa fa-database"></i></a>' +
            '</div>';
            
            vm.gridOptions.columnDefs = [
            	{
                    field: 'model.brand.oui',
                    displayName: 'OUI',
                    width: '20%'
                }, {
                    field: 'model.nombre',
                    displayName: 'Product Class',
                    width: '20%'
                }, {
                	field: 'serie',
                    displayName: 'Serial Number',
                    width: '30%'
                }, {
                	field: 'suscriptor',
                    displayName: 'SuscriberID',
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
            	dashboardService.listaCPEs().then(function (data) {
            		if (data) {
                        vm.cpes = data.objeto.cpes;
                        vm.endpoints = data.objeto.endpoints;
                        
                        vm.gridOptions.data = vm.cpes;
            		} else {
            			
            		}
            	})
            })();
            
            vm.checkStatus = function (idEndPont) {
            	angular.forEach(vm.cpes, function (item) {
	            	dashboardService.cpeStatus(idEndPont, item.id).then(function (data) {
	            		if (data) {

	            		}
	            	})
            	});
            }
            
            $scope.checkCPEStat = function (id) {
            	return false;
            }
            
            
            
        }]);
})();