/**
 * Se realiza el registro de un usuario
 * @author Alex
 */
$(document).ready(function () {
    $("form").submit(function (event) {
        event.preventDefault();
        let username = $("#username").val();
        let email = $("#email").val();
        let password = $("#password").val();
        let repeatPassword = $("#repassword").val();


        if (username === "" || password === "" || email === "") {
            $("#repassword").after("<span class='error'>Todos los campos son obligatorios</span>");
            return;
        }

        if (password !== repeatPassword) {
            $("#repassword").after("<span class='error'>Las contraseñas no coinciden</span>");
            return;

        }

        /*Guardarlo en una sesión*/
        let usuarios = [];
        if (sessionStorage.getItem("usuarios")) {
            usuarios = JSON.parse(sessionStorage.getItem("usuarios"));
        }

        /*Comprobar si el usuario ya existe*/
        for (let i = 0; i < usuarios.length; i++) {
            if (username === usuarios[i].username) {
                $("#username").after("<span class='error'>El usuario ya existe</span>");
                return;
            }
        }

        usuarios.push({username, password, email});
        sessionStorage.setItem("usuarios", JSON.stringify(usuarios));
        /*volver al inicio */
        window.location.href = "../Login/login.html";
    });

});