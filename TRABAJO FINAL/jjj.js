// Captura de elementos del formulario
const formulari = document.getElementById("formulari");
const enviarBtn = document.getElementById("enviar");
const esborrarBtn = document.getElementById("esborrar");
const mostrarContrasenya = document.getElementById("mostrar-contrasenya");
const mostrarConfirmar = document.getElementById("mostrar-confirmar");

// Funció per capitalitzar el nom
function capitalitzarNom(text) {
    const paraules = text.split(" ");
    for (let i = 0; i < paraules.length; i++) {
        paraules[i] = paraules[i][0].toUpperCase() + paraules[i].slice(1).toLowerCase();
    }
    return paraules.join(" ");
}

// Validacions de camps
function validarNom() {
    const nom = document.getElementById("nom");
    const errorNom = document.getElementById("error-nom");
    if (nom.value.trim() === "") {
        errorNom.textContent = "El nom és obligatori.";
        return false;
    }
    nom.value = capitalitzarNom(nom.value);
    errorNom.textContent = "";
    return true;
}

function validarEdat() {
    const edat = document.getElementById("edat");
    const errorEdat = document.getElementById("error-edat");
    if (edat.value === "") {
        errorEdat.textContent = "Selecciona un rang d'edat.";
        return false;
    }
    errorEdat.textContent = "";
    return true;
}

function validarCodiPostal() {
    const codi = document.getElementById("codi-postal");
    const errorCodi = document.getElementById("error-codi");
    let esNumero = true;
    if (codi.value.length !== 5) esNumero = false;
    for (let i = 0; i < codi.value.length; i++) {
        if (codi.value[i] < '0' || codi.value[i] > '9') {
            esNumero = false;
            break;
        }
    }
    if (!esNumero) {
        errorCodi.textContent = "El codi postal ha de tenir 5 dígits.";
        return false;
    }
    errorCodi.textContent = "";
    return true;
}

function validarEmail() {
    const email = document.getElementById("email");
    const errorEmail = document.getElementById("error-email");
    let arrova = false;
    let punt = false;
    for (let i = 0; i < email.value.length; i++) {
        if (email.value[i] === "@") arrova = true;
        if (arrova && email.value[i] === ".") punt = true;
    }
    if (!arrova || !punt) {
        errorEmail.textContent = "El correu electrònic no és vàlid.";
        return false;
    }
    errorEmail.textContent = "";
    return true;
}

function validarContrasenya() {
    const contrasenya = document.getElementById("contrasenya");
    const errorContrasenya = document.getElementById("error-contrasenya");
    const valor = contrasenya.value;
    let majuscula = false, minuscula = false, digits = 0, especial = false;
    const especials = "!@#$%^&*()_+[]-={};:|,.<>?/";

    for (let i = 0; i < valor.length; i++) {
        const c = valor[i];
        if (c >= 'A' && c <= 'Z') majuscula = true;
        else if (c >= 'a' && c <= 'z') minuscula = true;
        else if (c >= '0' && c <= '9') digits++;
        else if (especials.includes(c)) especial = true;
    }

    if (valor.length < 8 || !majuscula || !minuscula || digits < 2 || !especial) {
        errorContrasenya.textContent = "La contrasenya no compleix els requisits.";
        return false;
    }
    errorContrasenya.textContent = "";
    return true;
}

function validarConfirmarContrasenya() {
    const contrasenya = document.getElementById("contrasenya");
    const confirmar = document.getElementById("confirmar-contrasenya");
    const errorConfirmar = document.getElementById("error-confirmar");
    if (confirmar.value !== contrasenya.value) {
        errorConfirmar.textContent = "Les contrasenyes no coincideixen.";
        return false;
    }
    errorConfirmar.textContent = "";
    return true;
}

function validarPrivacitat() {
    const privacitat = document.getElementById("privacitat");
    const errorPrivacitat = document.getElementById("error-privacitat");
    if (!privacitat.checked) {
        errorPrivacitat.textContent = "Accepta la política de privacitat.";
        return false;
    }
    errorPrivacitat.textContent = "";
    return true;
}

// Mostrar/Ocultar contrasenya
mostrarContrasenya.addEventListener("change", () => {
    const contrasenya = document.getElementById("contrasenya");
    contrasenya.type = mostrarContrasenya.checked ? "text" : "password";
});

mostrarConfirmar.addEventListener("change", () => {
    const confirmar = document.getElementById("confirmar-contrasenya");
    confirmar.type = mostrarConfirmar.checked ? "text" : "password";
});

// Validació general del formulari
function validarFormulari() {
    const resultat = document.getElementById("resultat");
    let valid = true;

    if (!validarNom()) valid = false;
    if (!validarEdat()) valid = false;
    if (!validarCodiPostal()) valid = false;
    if (!validarEmail()) valid = false;
    if (!validarContrasenya()) valid = false;
    if (!validarConfirmarContrasenya()) valid = false;
    if (!validarPrivacitat()) valid = false;

    if (valid) {
        resultat.textContent = "Formulari enviat correctament!";
        alert(`Formulari Enviat:\nNom: ${document.getElementById("nom").value}`);
    } else {
        resultat.textContent = "Revisa els errors abans d'enviar.";
    }
}

// Esborrar el formulari
function esborrarFormulari() {
    formulari.reset();
    const errors = document.querySelectorAll(".error");
    for (let i = 0; i < errors.length; i++) {
        errors[i].textContent = "";
    }
    document.getElementById("resultat").textContent = "";
}

// Assignar esdeveniments
document.getElementById("nom").addEventListener("blur", validarNom);
document.getElementById("edat").addEventListener("change", validarEdat);
document.getElementById("codi-postal").addEventListener("blur", validarCodiPostal);
document.getElementById("email").addEventListener("blur", validarEmail);
document.getElementById("contrasenya").addEventListener("blur", validarContrasenya);
document.getElementById("confirmar-contrasenya").addEventListener("blur", validarConfirmarContrasenya);
document.getElementById("privacitat").addEventListener("change", validarPrivacitat);
enviarBtn.addEventListener("click", validarFormulari);
esborrarBtn.addEventListener("click", esborrarFormulari);
