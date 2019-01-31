function copiaADomNotif(objetoDestino, objetoOrigen) {
    objetoDestino.calle = objetoOrigen.calleNotificacion;
    objetoDestino.numeroExt = objetoOrigen.numeroExtNotificacion;
    objetoDestino.numeroInt = objetoOrigen.numeroIntNotificacion;
    objetoDestino.colonia = objetoOrigen.coloniaNotificacion;
}

function initDatePickers() {
    $("div.date").each(function () {
        $(this).datetimepicker({
            format: "DD/MM/YYYY",
            locale: "es",
            useCurrent: false
        });
        $(this).find("input").inputmask(
            Constants.Inputmask.DATE_MASK,
            {
                'placeholder': Constants.Inputmask.DATE_PLACEHOLDER
            });
    });
}

function changeNameInputs(selector, prefijo) {
    $(selector).each(function () {
        var sufijo = $(this).attr("name").split(".")[1];
        $(this).attr("name", prefijo + "." + sufijo);
    });
}

function tabChange(tab, navigation, index){
    if (index>-1){
        var divName = $(tab).find("a").attr("href");
        var form = $(divName +" form");
        if ($(form).find("input[name='nombre']").val()===""){
            alert("falta el nombre");
            return false;
        }else{
            saveContrato();
            return true;
        }

    }else{
        return true;
    }
}

function createWizard() {
    $('[data-toggle="tooltip"]').tooltip();
    $('#rootwizard').bootstrapWizard({onTabChange: tabChange, onTabShow: function(tab, navigation, index) {
        var $total = navigation.find('li').length;
        var $current = index+1;
        var $percent = ($current/$total) * 100;
        $('#rootwizard .progress-bar').css({width:$percent+'%'});
    }});
    window.prettyPrint && prettyPrint();
}

