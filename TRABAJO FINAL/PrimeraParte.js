// Código JavaScript para la primera parte del proyecto, simplificado y con nombres de variables en español

// Función para capitalizar la primera letra de cada palabra
function capitalizarNombre(entrada) {
    const palabras = entrada.split(' ');
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1).toLowerCase();
    }
    return palabras.join(' ');
}

// Función para validar el código postal (5 dígitos exactamente)
function validarCodigoPostal(codigo) {
    return codigo.length === 5 && !isNaN(codigo);
}

// Función para validar el correo electrónico
function validarCorreoElectronico(correo) {
    const partes = correo.split('@');
    if (partes.length === 2 && partes[1].includes('.')) {
        return true;
    }
    return false;
}

// Función para validar la contraseña
function validarContrasena(contrasena) {
    let tieneMayuscula = false;
    let tieneMinuscula = false;
    let contadorDigitos = 0;
    let tieneCaracterEspecial = false;

    for (let caracter of contrasena) {
        if (caracter >= 'A' && caracter <= 'Z') tieneMayuscula = true;
        if (caracter >= 'a' && caracter <= 'z') tieneMinuscula = true;
        if (!isNaN(caracter)) contadorDigitos++; //Hecho con ayuda de ChatGPT
        if ("!@#$%^&*()_+[]{};:,.<>?".includes(caracter)) tieneCaracterEspecial = true;
    }

    return contrasena.length >= 8 && tieneMayuscula && tieneMinuscula && contadorDigitos >= 2 && tieneCaracterEspecial;
}

// Validar que las contraseñas coinciden
function validarConfirmacionContrasena(contrasena, confirmarContrasena) {
    return contrasena === confirmarContrasena;
}

// Gestionar el botón de enviar
function manejarEnvio() {
    const campoNombre = document.getElementById("name");
    const campoCodigoPostal = document.getElementById("postalCode");
    const campoCorreo = document.getElementById("email");
    const campoContrasena = document.getElementById("password");
    const campoConfirmarContrasena = document.getElementById("confirmPassword");
    const casillaPrivacidad = document.getElementById("privacyCheckbox");

    let esValido = true;

    // Nombre y apellidos
    if (campoNombre.value.trim() === "") {
        alert("El campo de nombre es obligatorio.");
        esValido = false;
    } else {
        campoNombre.value = capitalizarNombre(campoNombre.value);
    }

    // Código postal
    if (!validarCodigoPostal(campoCodigoPostal.value)) {
        alert("El código postal debe tener 5 dígitos.");
        esValido = false;
    }

    // Correo electrónico
    if (!validarCorreoElectronico(campoCorreo.value)) {
        alert("El correo electrónico no es válido.");
        esValido = false;
    }

    // Contraseña
    if (!validarContrasena(campoContrasena.value)) {
        alert("La contraseña no cumple con los requisitos.");
        esValido = false;
    }

    // Confirmar contraseña
    if (!validarConfirmacionContrasena(campoContrasena.value, campoConfirmarContrasena.value)) {
        alert("Las contraseñas no coinciden.");
        esValido = false;
    }

    // Checkbox de privacidad
    if (!casillaPrivacidad.checked) {
        alert("Debes aceptar la política de privacidad.");
        esValido = false;
    }

    if (esValido) {
        alert("Formulario enviado correctamente!");
        console.log({
            nombre: campoNombre.value,
            codigoPostal: campoCodigoPostal.value,
            correo: campoCorreo.value,
            contrasena: campoContrasena.value
        });
    }
}

// Gestionar el botón de borrar
function manejarBorrado() {
    document.getElementById("form").reset();
}

// Agregar los listeners para los botones
document.getElementById("submitButton").addEventListener("click", manejarEnvio);
document.getElementById("clearButton").addEventListener("click", manejarBorrado);
