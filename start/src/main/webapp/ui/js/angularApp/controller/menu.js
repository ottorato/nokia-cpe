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
            		display: "Catalogs",
            		children: [
                    	{
                    		display: "States",
                    		children: [],
                    		href: "/status/catalogs"
                    	}, {
                    	  display: "Countries",
                    	  children: [],
                  		  href: "/catalogs"
                    	}, {
                    	  display: "Address",
                    	  children: [],
                  		  href: "/status/address"
                    	}
                    ]
            	}, {
	                display: "Dashboard",
	                children: [],
	        		href: "/status/app"
            	}
            ]
            menuCtrl.menuItems = menus;
        })();
        
    }]);
})();
