<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="ISO-8859-1"%>
<%@ taglib uri='http://java.sun.com/jsp/jstl/core' prefix='c'%>

<!DOCTYPE html>
<html data-ng-app="app">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=9; IE=8; IE=7; IE=EDGE"/>
	    
	<script type="text/javascript" src='<c:url value="/ui/js/common/constants.js"/>' charset="UTF-8"></script>
	
	<script type="text/javascript">
        Constants.Context.CTX_PATH = '${pageContext.request.contextPath}';
        Constants.Context.APP_PATH = Constants.Context.CTX_PATH + '';
        Constants.Context.Usuario = '${nombreUsuario}';
        Constants.Context.idUsuario = '${idUsuario}';
    </script>
	<link rel="shortcut icon" href='<c:url value="/ui/img/favicon.ico"/>' type="image/x-icon">
	<link rel="icon" href='<c:url value="/ui/img/favicon.ico"/>' type="image/x-icon">
	    
	<title>Nokia Inc.</title>
	<base href='${pageContext.request.contextPath}/'>
	
	<!-- Google fonts -->
	<link href='<c:url value="/ui/css/google-fonts/Titillium_Web.css"/>' rel='stylesheet' type='text/css'>
	<link href='<c:url value="/ui/css/google-fonts/Roboto_Condensed.css"/>' rel='stylesheet' type='text/css'>
	<link href='<c:url value="/ui/css/google-fonts/Raleway.css"/>' rel='stylesheet' type='text/css'>
	
	<!-- Bootstrap styles -->
	<link rel="stylesheet" href="webjars/bootstrap/${bootstrapVersion}/css/bootstrap.min.css">
	<!-- FontAwesome styles -->
	<link rel="stylesheet" href="webjars/font-awesome/4.6.3/css/font-awesome.css" />
	<!-- UIGrid styles -->
	<link rel="stylesheet" href="webjars/ui-grid/3.1.1/ui-grid.css" />
	<!-- Block styles, application spinner css -->
	<link rel="stylesheet" href="webjars/angular-block-ui/0.2.2/dist/angular-block-ui.min.css" />
	<!-- Menú styles -->
	<link href='<c:url value="/ui/bower_components/metisMenu/dist/metisMenu.min.css"/>' rel="stylesheet" type="text/css" media="screen"/>
    <link href='<c:url value="/ui/css/responsive.css"/>' rel="stylesheet" type="text/css" media="screen"/>
    <link href='<c:url value="/ui/dist/css/sb-admin-2.css"/>' rel="stylesheet" type="text/css" media="screen"/>
	<link href='<c:url value="/ui/bower_components/ng-bootstrap-submenu/ng-bootstrap-submenu.min.css"/>' rel="stylesheet" type="text/css" media="screen"/>
	<!-- Baloon (logger) styles -->
	<link href='<c:url value="/ui/css/mensajes/toastr.css"/>' rel="stylesheet" type="text/css" media="screen"/>
	<!-- Application styles -->
	<link href='<c:url value="/ui/css/style.css"/>' rel="stylesheet" type="text/css" media="screen"/>
</head>
<body>
	<!--  Base markup-->
	<div ng-include="'view/principal/inicio.html'"></div>
	<!-- jQuery -->
	<script src="webjars/jquery/${jQueryVersion}/jquery.min.js"></script>
	<!-- AngularJS -->
	<script src="webjars/angularjs/${angularVersion}/angular.js"></script>
	<script src="webjars/angularjs/${angularVersion}/angular-animate.js"></script>
	<script src="webjars/angularjs/${angularVersion}/angular-route.js"></script>
	<script src="webjars/angularjs/${angularVersion}/angular-sanitize.js"></script>
	
	<script src='<c:url value="/ui/bower_components/ng-bootstrap-submenu/ng-bootstrap-submenu.min.js"/>'></script>	
	
	<!-- AngularJS base application -->
	<script src='<c:url value="/ui/js/app.js"/>' charset="UTF-8"></script>

	<!-- Common components -->
	
	<script src='<c:url value="/ui/js/common/common.js"/>' charset="UTF-8"></script>
	<script src='<c:url value="/ui/js/common/logger.js"/>' charset="UTF-8"></script>
	<script src='<c:url value="/ui/js/common/toastr.js"/>' charset="UTF-8"></script>
	
	<script src="webjars/bootstrap/${bootstrapVersion}/js/bootstrap.min.js"></script>
	
	<!-- angular-ui-mask -->
	<script src='<c:url value="/ui/bower_components/angular-ui-mask/dist/mask.min.js"/>' charset="UTF-8"></script>	
	<!-- DOJO -->
	<script src="webjars/dojo/1.10.4/dojo/dojo.js"></script>
	<script src="webjars/angular-ui-mask/1.6.8/src/mask.js"></script>
	<script src="webjars/angular-block-ui/0.2.2/dist/angular-block-ui.js"></script>
	<script src="webjars/angular-ui-bootstrap/2.5.0/ui-bootstrap.js"></script>
	<!-- Grid -->
	<script src="webjars/ui-grid/3.1.1/ui-grid.js"></script>
	<script src='<c:url value="/ui/js/common/uiGridConfiguration.js"/>' charset="UTF-8"></script>
	
	<!-- Services -->
	<script src='<c:url value="/ui/js/angularApp/service/commonService.js"/>' charset="UTF-8"></script>
	<script src='<c:url value="/ui/js/angularApp/service/dashboardService.js"/>' charset="UTF-8"></script>
	<script src='<c:url value="/ui/js/angularApp/service/catalogsService.js"/>' charset="UTF-8"></script>
	<script src='<c:url value="/ui/js/angularApp/service/toolsService.js"/>' charset="UTF-8"></script>
	
	<!-- Controllers -->
	<script src='<c:url value="/ui/js/angularApp/controller/menu.js"/>' charset="UTF-8"></script>
	<script src='<c:url value="/ui/js/angularApp/controller/dashBoard.js"/>' charset="UTF-8"></script>
	<script src='<c:url value="/ui/js/angularApp/controller/catalogs.js"/>' charset="UTF-8"></script>
	<script src='<c:url value="/ui/js/angularApp/controller/tools.js"/>' charset="UTF-8"></script>
	
</body>
</html>