document.getElementById("registroForm").addEventListener("submit", function (e) {
            e.preventDefault();
            const usuario = document.getElementById("Usuario").value;
            const contrasena = document.getElementById("Contraseña").value;
    
            // Guardar en LocalStorage
            localStorage.setItem("Usuario", usuario);
            localStorage.setItem("Contraseña", contrasena);
    
            alert("Registro exitoso. Ahora puedes iniciar sesion");
            window.location.href = "index.html"; // Redirigir a la pagina de inicio de sesion
        });
