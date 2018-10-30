// fix para jquery-validation
import $ from 'jquery';
// jQuery validation para el formulario
import jqueryValidation from 'jquery-validation';


$(function() {

    $("form[name='registration']").validate({
        // Reglas de validacion
        rules: {

            email: {
                required: true,
                email: true
            }
        },
        // Mensajes de validacion
        // messages: {
        //     email: "Por favor introduce un email valido"
        // },
        submitHandler: function(form) {
            form.submit();
        }
    });
});
