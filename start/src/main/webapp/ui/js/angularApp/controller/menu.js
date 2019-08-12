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
            		display: "Catalogos",
            		children: [
                    	{
                    		display: "Estados",
                    		children: [],
                    		href: "/status/catalogs"
                    	}, {
                    	  display: "Países",
                    	  children: [],
                  		href: "/catalogs"
                    	}
                    ]
            	}, {
	                display: "Dashboard",
	                children: [],
	        		href: "/status/dashboard"
            	}
            ]
            menuCtrl.menuItems = menus;
        })();
        
    }]);
})();
