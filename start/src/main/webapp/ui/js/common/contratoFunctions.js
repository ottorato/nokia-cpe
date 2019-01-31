var contrato = {};
contrato.idContrato = null;
var flag = false;

/**
 * Regresa el id de la Tab previamente activa
 * @param evt
 * @returns {string} id de la tab previamente activa
 */

function getPreviousTabName(evt) {
    var href = evt.relatedTarget.hash;
    return href.substr(1, href.length);
}

/**
 * Devuelve el nombre del objeto en base al id de la form.
 * la convención es form_nombre para eliminar form_
 * @param id receibe el id de la form. Se espera de la forma form_nombre
 */
function obtenerNombreObjetoDTO(id) {
    return id.substr(5, id.length);
}

/**
 * Devuelve la representación JSON del formulario que recibe
 * @param form El formulario que se debe de transofrmar a JSON
 * @returns {*|jQuery} representación JSON del formulario
 */
function obtieneJsonization(form) {
    // return $(form).serializeArray().reduce(function (obj, v) {
    //     if (v.value===''){
    //         obj[v.name] = null;
    //     }else{
    //         obj[v.name] = v.value;
    //     }
    //     return obj;
    // }, {});
    return $(form).serializeObject();
}

function setValuesFromJSON(data, forms) {
    forms.each(function () {
        var objeto;
        var objetoNombreDTO = obtenerNombreObjetoDTO(this.id);
        if (data[objetoNombreDTO] !== undefined) {
            objeto = data[objetoNombreDTO];
        } else {
            objeto = data;
        }
        $("#" + this.id + " input").each(function () {
            var elemName = $(this).attr("name");
            if (elemName !== undefined && elemName !== '') {
                $(this).val(objeto[elemName]);
            }
        });
    });
}

function guardarFormulario(objetoDTO, forms) {
    // var url = Constants.Context.APP_PATH + '/contrato/guardar' + tabName;
    var url = Constants.Context.APP_PATH + '/contrato/guardar';
    $.ajax({
        url: url,
        contentType: 'application/json',
        type: 'POST',
        dataType: 'json',
        data: JSON.stringify(objetoDTO,function (key, value) {
            return value=== "" ? null: value;
        }),
        success: function (data) {
            setValuesFromJSON(data, forms);
        },
        error: function (request, data) {
            // console.log(data.message);
            console.log(request.responseText);
        }
    });
}

function saveContrato() {
    var forms = $("#rootwizard form");
    // forms.each(function () {
    //     if(this.id !== 'form_documentacion' && this.id !== 'form_datosEvento'){
    //         if (this.id === 'form_datosContrato'){
    //             var datosCont = obtieneJsonization(this);
    //             for(var key in datosCont){
    //                 contrato[key]=datosCont[key];
    //             }
    //         }else{
    //             contrato[obtenerNombreObjetoDTO(this.id)] = obtieneJsonization(this);
    //         }
    //     }
    // });
    console.log(contrato);
    // guardarFormulario(contrato, forms);
}


// function saveForm(tabName) {
//     var forms = $("#" + tabName + " form");
//     var dto = {};
//     if (forms.length > 1) {
//         forms.each(function () {
//             dto[obtenerNombreObjetoDTO(this.id)] = obtieneJsonization(this);
//         });
//     } else {
//         dto = obtieneJsonization(forms);
//     }
//     guardarFormulario(dto, tabName, forms);
// }

// $(document).ready(function () {
//     $('a[data-toggle="tab"]').on('show.bs.tab', function (evt) {
//         // var prevTabName = getPreviousTabName(evt);
//         // saveForm(prevTabName);
//         if (flag==false){
//             evt.preventDefault();
//             flag=true;
//         }else{
//             flag=false;
//         }
//         // saveContrato();
//         console.log(flag);
//     });
// });