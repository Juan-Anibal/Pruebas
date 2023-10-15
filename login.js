/*function ir(){
var c 1955;
var u "Juan";
if(document.forms.password.value==c && document.forms.login.value==u){
    alert("Bienvenido a Riqísima");
    window.location "beneficios.html";}

    else{
        alert("Usuario y/o contraseña incorrectos");
    }
}

const $submit = document.getElementById("submit"),
      $email = document.getElementById("email"),
      $name = document.getElementById("name");
      $mensaje = document.getElementById("mensaje");

function validarInput() {

    if ($name.value === "") {
        alert("Tenés que  completar la casilla con tu Nombre");
        $name.style.border = "2px solid red";
    } else { $name.style.border = "2px solid blue"; }

    if ($email.value === "") {
        alert("Tenés que  completar la casilla con tu E-mail");
        $email.style.border = "2px solid red";
    } else { $email.style.border = "2px solid blue"; }

    if ($mensaje.value === "") {
        alert("Tenés que escribír tu consulta");
        $mensaje.style.border = "2px solid red";
    } else { $mensaje.style.border = "2px solid blue"; }

    return true;
}


// EVENTO

document.addEventListener("click", (e) => {
    if (e.target === $submit) {
        validarInput();
        }
    });
//[18:03, 25/9/2023] +54 9 11 3570-6621: Lo resolvi así.
//Cambiale el valor de los getElement by id por los tuyos y en valor llena los espacios de las comillas por el nombre y el usuario .