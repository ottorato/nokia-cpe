'use strict';


/**
 * @JSdoc Object
 * @name constants.js
 * @description Declara las variables que se consideran constantes dentro de la
 *              aplicacion.
 *
 */

var Constants = (function() {
    var self = {};

    /**
     * @JSdoc Object
     * @name Context
     *
     * @description Constantes de contexto de aplicacion.
     */
    self.Context = {
        CTX_PATH : '',
        APP_PATH : '',
        IMG_PATH : ''
    };

    /**
     * @JSdoc Object
     * @name Validacion
     *
     * @description Constantes Para validaciones.
     */
    self.Validation = {
        REGEX_RFC : /^[a-zA-Z]{4}(\d{6})((\D|\d){3})?$/,
        REGEX_CORREO : /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
        REGEX_CARACTERES_ALFABETICO : '^[a-zA-Z\ \'\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00f1\u00d1\u00FC\u00DC]+$',
        REGEX_CARACTERES_ALFANUMERICO : '^[a-zA-Z0-9\ \'\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00f1\u00d1\u00FC\u00DC]+$',
        REGEX_CARACTERES_ALFANUMERICO_PLUS : '^[a-zA-Z0-9-\ \'\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00f1\u00d1\u00FC\u00DC]+$',
        REGEX_CARACTERES_CORREO : '^[a-zA-Z0-9\u00e1\u00e9\u00ed\u00f3\u00fa\u00c1\u00c9\u00cd\u00d3\u00da\u00f1\u00d1\u00FC\u00DC\u0040\u005F\u002E\u002D]+$'
    };

    /**
     * @JSdoc Object
     * @name Date
     *
     * @description Constantes Para campos de fecha.
     */
    self.Date = {
        SHOW_ON_BUTTON : 'button'
    };

    /**
     * @JSdoc Object
     * @name Inputmask
     *
     * @description Constantes Para mascaras en campos de entrada.
     */
    self.Inputmask = {
        DATE_MASK : 'dd/mm/yyyy',
        DATE_PLACEHOLDER : 'dd/mm/yyyy'
    };

    /**
     * @JSdoc Object
     * @name DialogMessage
     *
     * @description Constantes Para menasjes.
     */
    self.DialogMessage = {
        SELECTOR : '#dialog-mensaje',
        DEFAULT_OPTIONS : {
            autoOpen: false,
            closeOnEscape: false,
            resizable: false,
            draggable: false,
            closeText: 'Cerrar',
            width: 400,
            height:200,
            modal: true
        }
    };

    /**
     * @JSdoc Object
     * @name Wait
     *
     * @description Constantes Para imagen de espera.
     */
    self.Wait = {
        SELECTOR : '#wait',
        DEFAULT_OPTIONS : {
            autoOpen: false,
            closeOnEscape: false,
            resizable: false,
            draggable: false,
            closeText: 'Cerrar',
            width: 150,
            height: 150,
            modal: true,
            dialogClass:'wait'
        }
    };

    /*
     * @JSdoc String
     * @name DEFAULT_OPTION_SELECT
     *
     * @description Opción por defecto en combos.
     */
    // self.DEFAULT_OPTION_SELECT = '-- Seleccionar --';
    self.APP_MESSAGE = {
    		commonService_expiraSesion_warn : 'La sesión expiró.'
    };

    self.TitulosContrato = {
        FER: 'Solicitud de Contrato para Feria',
        BRC: 'Solicitud de Validación Brochure TMKT',
        ADF: 'Solicitud de Addendum Fomento para BC',
        ADA: 'Solicitud de Adenda para Agronegocio Agricultor',
        FOM: 'Solicitud de Contrato para Fomento',
        PAT: 'Solicitud de Contrato para Patrocinio',
        AGA: 'Solicitud de Contrato para Agronegocios Agricultor',
        AGS: 'Solicitud de Contrato para Agronegocios Sembradora',
        AGT: 'Solicitud de Contrato para Agronegocios Trilladora',
        AGB: 'Solicitud de Contrato para Agronegocios Bodega',
        NPA: 'Solicitud de Contrato para Arrendamiento de Modelorama',
        NPE: 'Solicitud de Contrato para Empresario de Modelorama',
        PRV: 'Solicitud de Contrato para Proveedores'
    };

    self.PestaniaTitular = {
        FER: 'Organizador',
        PAT: 'Organizador',
        BRC: 'Cliente',
        ADF: 'Cliente',
        FOM: 'Cliente',
        AGA: 'Agricultor',
        ADA: 'Agricultor',
        AGS: 'Titular',
        AGT: 'Titular',
        AGB: 'Titular',
        NPA: 'Contraparte',
        NPE: 'Empresario',
        PRV: 'Proveedor'
    };

    self.labelizeInputs = function(){
        $('.form-control[disabled="disabled"], .form-control[disabled="true"]').addClass("labelized");
       // $('#hechicero').find('span.spanConInput').hide();
    };

    return self;
}());