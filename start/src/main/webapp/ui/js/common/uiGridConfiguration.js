(function() {
    'use strict';
    var app = angular.module('app');

    app.constant('uiGridConfiguration', getUiGridConfig());
    /*@param
     *string tipo - añade o cambia funcionalidades del objeto para las propiedades del grid
     *@return object
     **/
    function getUiGridConfig(tipo) {
        return function(tipo) {
            var grid = {
                paginationPageSizes: [5, 10, 15, 20],
                paginationPageSize: 10,
                rowSelection: true,
                modifierKeysToMultiSelect: false,
                noUnselect: true,
                exporterMenuCsv: true,
                enableGridMenu: true,
                enableRowSelection: true,
                enableColumnResizing: true,
                exporterMenuSelectedData: true,
                exporterMenuAllData: true,
                multiSelect: false,
                enableRowHeaderSelection: false,
                enableFiltering: false,
                i18n:'sp',
                exporterOlderExcelCompatibility: true,
                exporterLinkLabel: 'Resultados',
                exporterPdfDefaultStyle: {
                  fontSize: 9
                },
                exporterPdfTableStyle: {
                	margin: [0, 5, 0, 15]
                },
                exporterPdfTableHeaderStyle: {
                  fontSize: 10,
                  bold: true,
                  italics: true,
                  color: 'blue'
                },
                exporterPdfFilename: 'Búsqueda contratos.pdf',
                exporterCsvFilename: 'Búsqueda contratos.csv',
                exporterPdfOrientation: 'landscape',
                exporterPdfPageSize: 'LETTER',
                exporterPdfMaxGridWidth: 650

            };
            if (tipo === 'multi') {
                grid.multiSelect = true;
                grid.enableRowHeaderSelection = true;
                grid.noUnselect = false;
                grid.enableFiltering = true;
            } else if (tipo === 'multinofilter') {
                grid.enableRowHeaderSelection = true;
                grid.noUnselect = false;
                grid.enableFiltering = false;
            }else if (tipo === 'miniGridPrv') {
            	grid.exporterMenuCsv = false;
                grid.paginationPageSize = 100;
                grid.paginationPageSizes = [100];
                grid.showGridFooter = false; 
                grid.showColumnFooter = false;
                grid.exporterMenuCsv = false;
                grid.enableGridMenu = false;
                grid.enableRowSelection = false;
                grid.enablePaginationControls = false;
            }
            return grid;
        };
    }
})();
