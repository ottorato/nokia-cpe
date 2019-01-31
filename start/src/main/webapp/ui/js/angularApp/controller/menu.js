(function () {
    'use strict';
    var controllerId = 'menu';
    angular.module('app').controller(controllerId, ['commonService', '$interval', '$scope', '$window',
    	function (commonService, $interval, $scope, $window) {
        var menuCtrl = this;
        console.log("Getting menues");
        
        (function () {
            var menus = [
            	{
            		display: "Catálogos",
            		children: [
                    	{
                    		display: "Estados",
                    		children: [
                    			{
                    				display: "Alta",
                            		href: "/paises",
                            		children: []
                    			}
                    		]
                    	}, {
                    	  display: "Países",
                    		href: "/paises",
                    		children: [
                    			{
                    				display: "Alta",
                            		href: "/paises",
                            		children: []
                    			}
                    		]
                    	}
                    ]
            	}
            ];
            menuCtrl.menuItems = menus;
        })();
        
    }]);
})();
