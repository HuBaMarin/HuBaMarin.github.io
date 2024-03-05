/**
 * Se realiza la autenticación del usuario en el sistema.
 * @author Alex
 */

$(document).ready(function() {
    $('form').on('submit', function(event) {
        event.preventDefault(); // para prevenir el envío del formulario

        let arrayUsuarios = JSON.parse(sessionStorage.getItem("usuarios"));

        var username = $('#usuario').val();
        var password = $('#password').val();

        for (let arrayUsuario of arrayUsuarios) {
            if (arrayUsuario.username === username && arrayUsuario.password === password) {
                window.location.href = "../index.html";
                return;
            }
        }
    });
});

