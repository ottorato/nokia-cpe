(function () {
    'use strict';

    var serviceId = 'commonService';

    angular.module('commonModule', []).factory(serviceId, commonService);

    commonService.$inject = ['$http', '$q', 'common'];

    function commonService($http, $q, common) {
        var sesionTerminada = false;

        var getLogFn = common.logger.getLogFn;
        var log = getLogFn(serviceId);
        var logSuccess = getLogFn(serviceId, 'success');
        var logError = getLogFn(serviceId, 'error');
        var logWarning = getLogFn(serviceId, 'warning');
        var contador = 0;

        var service = {
            ajaxGetRequets: ajaxGetRequets,
            ajaxGetWithParamsRequets: ajaxGetWithParamsRequets,
            ajaxPostRequets: ajaxPostRequets,
            ajaxPostRequetsConfig: ajaxPostRequetsConfig,
            
            ajaxDeleteRequest: ajaxDeleteRequest
        };
        return service;

        function ajaxDeleteRequest(url){
        	var deferred = $q.defer();
            $http.delete(Constants.Context.APP_PATH + url).then(
                function (response) {
                    resetContador();
                    deferred.resolve(response.data);
                },
                function (errResponse) {
                    return $q.reject(errResponse);
                });
            return deferred.promise;
        }
        function resetContador() {
            contador = 0;
        }

        function getContador() {
            return contador;
        }

        function increaseContador() {
            contador++;
        }

        function getLoggedUser() {
            return ajaxPostRequets('/usuario/getLoggedUser').then(function (data) {
                return data;
            });
        }

        function ajaxGetRequets(url) {
            var deferred = $q.defer();
            $http.get(Constants.Context.APP_PATH + url).then(
                function (response) {
                    try {
                        if (response.data.indexOf('LOGIN') > -1) {
                            if (!sesionTerminada)
                                alert('La sesión expiró.');
                            sesionTerminada = true
                            window.location.replace(Constants.Context.APP_PATH + '/login');
                        }
                    } catch (e) {
                        // TODO: handle exception
                    }
                    resetContador();
                    deferred.resolve(response.data);
                },
                function (errResponse) {
                    switch (errResponse.status) {
                        case 302:
                            if (errResponse.data.indexOf('LOGIN') > -1) {
                                if (!sesionTerminada)
                                    alert('La sesión expiró.');
                                sesionTerminada = true
                                window.location.replace(Constants.Context.APP_PATH + '/login');
                            }
                            break;
                        case 500:
                            logError(Constants.APP_MESSAGE.commonService_expiraSesion_error);
                    }
                    return $q.reject(errResponse);
                });
            return deferred.promise;
        }
        
        
        function ajaxGetWithParamsRequets(url, params) {
            var deferred = $q.defer();
            $http.get(Constants.Context.APP_PATH + url, {params: params,  cache: false}).then(
                function (response) {
                    try {
                        if (response.data.indexOf('LOGIN') > -1) {
                            if (!sesionTerminada)
                                alert('La sesión expiró.');
                            sesionTerminada = true
                            window.location.replace(Constants.Context.APP_PATH + '/login');
                        }
                    } catch (e) {
                        // TODO: handle exception
                    }
                    resetContador();
                    deferred.resolve(response.data);
                },
                function (errResponse) {
                    switch (errResponse.status) {
                        case 302:
                            if (errResponse.data.indexOf('LOGIN') > -1) {
                                if (!sesionTerminada)
                                    alert('La sesión expiró.');
                                sesionTerminada = true
                                window.location.replace(Constants.Context.APP_PATH + '/login');
                            }
                            break;
                        case 500:
                            logError(Constants.APP_MESSAGE.commonService_expiraSesion_error);
                    }
                    return $q.reject(errResponse);
                });
            return deferred.promise;
        }
        
        
        
        function revisaSession(url) {
        	var deferred = $q.defer();
            $http.get(url).then(
                function (response) {
                	deferred.resolve(response.data);
                },
                function (errResponse) {
                    return $q.reject(errResponse);
                });
            return deferred.promise;
        }

        function ajaxPostRequets(url, param) {
            var deferred = $q.defer();
            $http.post(Constants.Context.APP_PATH + url, param).then(
                function (response) {
                    try {
                        if (response.data.indexOf('LOGIN') > -1) {
                            if (!sesionTerminada)
                                alert('La sesión expiró.');
                            sesionTerminada = true
                            window.location.replace(Constants.Context.APP_PATH + '/login');
                        }
                    } catch (e) {
                        // TODO: handle exception
                    }
                    resetContador();
                    deferred.resolve(response.data);

                },
                function (errResponse) {
                    switch (errResponse.status) {
                        case 302:
                            if (errResponse.data.indexOf('LOGIN') > -1) {
                                if (!sesionTerminada)
                                    alert('La sesión expiró.');
                                sesionTerminada = true
                                window.location.replace(Constants.Context.APP_PATH + '/login');
                            }
                            break;
                        case 500:
                            logError(Constants.APP_MESSAGE.commonService_expiraSesion_error);
                    }
                    return $q.reject(errResponse);
                });
            return deferred.promise;
        }

        function ajaxPostRequetsConfig(url, param, config) {
            var deferred = $q.defer();
            $http.post(Constants.Context.APP_PATH + url, param, config).then(
                function (response) {
                    try {
                        if (response.data.indexOf('LOGIN') > -1) {
                            if (!sesionTerminada)
                                alert('La sesión expiró.');
                            sesionTerminada = true;
                            window.location.replace(Constants.Context.APP_PATH + '/login');
                        }
                    } catch (e) {
                        // TODO: handle exception
                    }
                    resetContador();
                    deferred.resolve(response.data);
                },
                function (errResponse) {
                    switch (errResponse.status) {
                        case 302:
                            if (errResponse.data.indexOf('LOGIN') > -1) {
                                if (!sesionTerminada)
                                    alert('La sesión expiró.');
                                sesionTerminada = true;
                                window.location.replace(Constants.Context.APP_PATH + '/login');
                            }
                            break;
                        case 500:
                            logError(Constants.APP_MESSAGE.commonService_expiraSesion_error);
                    }
                    return $q.reject(errResponse);
                });
            return deferred.promise;
        }

        function commonModalOptions() {
            return {
                backdrop: true,
                backdropClick: true,
                dialogFade: false,
                keyboard: true
            };
        }

        /**
         * Sirve para marcar como requerido el label que acompaña la selección de fechas
         * @param boton Nombre del botón que se encarga de mostrar ocultar el calendario
         * @param $event objeto evento
         * @param vm controller dueño del botón
         */

        function openCalendar(boton, $event, vm) {
            vm[boton] = !vm[boton];
            var elem = $event.currentTarget || $event.srcElement;
            $(elem).parent().parent().find("label.ng-untouched").removeClass("ng-untouched");
        }
    }
})();
