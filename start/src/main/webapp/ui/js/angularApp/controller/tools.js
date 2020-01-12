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
         }]);
})();