// Captura de elements del formulari
const formulari = document.getElementById("formulari");
const enviarBtn = document.getElementById("enviar");
const esborrarBtn = document.getElementById("esborrar");
const mostrarContrasenya = document.getElementById("mostrar-contrasenya");
const mostrarConfirmar = document.getElementById("mostrar-confirmar");

// Funció per capitalitzar el nom
function capitalitzarNom(text) {
    const paraules = text.split(" "); // Crea un array on cada element es una paraula de la cadena, ho necessitem si volem possar les inicials del nom i cognoms en majúscules.
    for (let i = 0; i < paraules.length; i++) {
        paraules[i] = paraules[i][0].toUpperCase() + paraules[i].slice(1).toLowerCase(); // Fica la primera lletra de cada paraula en majúscula, lletra que ocupa la posició 0 de la cadena. També posa la resta de lletres de la paraula en minúscula, per això (slice) he tingut que demanar-li ajuda al ChatGPT.
    }
    return paraules.join(" ");
}

// Validacions de camps
function validarNom() {
    const nom = document.getElementById("nom");
    const errorNom = document.getElementById("error-nom");
    if (nom.value.trim() === "") { // Comprovem si el camp està buit
        errorNom.textContent = "El nom és obligatori."; // Retornem l'error escrivint que el nom és obligatori.
        return false;
    }
    nom.value = capitalitzarNom(nom.value);
    errorNom.textContent = ""; // Borrem el missatge d'error que hem mostrat anteriorment quan el camp de nom sigui correcte.
    return true;
}

function validarEdat() {
    const edat = document.getElementById("edat");
    const errorEdat = document.getElementById("error-edat");
    if (edat.value === "") {
        errorEdat.textContent = "Selecciona un rang d'edat."; // Fem el mateix que amb el nom, si no s'ha seleccionat cap rang d'edat mostrem missatge.
        return false;
    }
    errorEdat.textContent = ""; // Per borrar el missatge d'error quan el camp s'hagi omplert.
    return true;
}

function validarCodiPostal() {
    const codi = document.getElementById("codi-postal");
    const errorCodi = document.getElementById("error-codi");
    let esNumero = true;
    if (codi.value.length !== 5){
        esNumero = false; // Sobretot per validar que tingui 5 digits i no menys. L'usuari no podrà possar més de 5 nombres per el maxlength del HTML
    }
    for (let i = 0; i < codi.value.length; i++) {
        if (codi.value[i] < '0' || codi.value[i] > '9') { // Anem dígit a dígit per veure que tots són entre el 0 i el 9. Si no, sortirà el missatge d'error.
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
    let repeticions = 0; // Inicialitzarem un comptador que servirà per verificar que nomès hi hagi un arrova i un punt al correu escrit.
    for (let i = 0; i < email.value.length; i++) {
        if (email.value[i] === "@") {  // Comprova si el text en el camp del email té @
            arrova = true;
            repeticions++; // Per cada arrova trobada suma un
        }
        if (arrova && email.value[i] === "."){ // Comprova si el text en el camp del email té arrova i punt
            punt = true;
            repeticions++;  // Per cada punt trobat suma un
        } 
    }
    if (repeticions>2){ // Si hi ha més de dos punts el correu no serà vàlid perquè contè dos arrovas o dos punts o ambdues
        errorEmail.textContent = "El correu electrònic no és vàlid.";
        return false;
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
        const lletra = valor[i];
        if (lletra >= 'A' && lletra <= 'Z') majuscula = true;  //Mira lletra per lletra per comprovar si hi ha majúscula
        else if (lletra >= 'a' && lletra <= 'z') minuscula = true; //Comprova si hi ha minúscula
        else if (lletra >= '0' && lletra <= '9') digits++; // Compta quants digits hi ha
        else if (especials.includes(lletra)) especial = true; // Si alguna lletra és algun dels caràcters especials. La funció especial.includes graciès a ajuda de ChatGPT.
    }

    if (valor.length < 8 || !majuscula || !minuscula || digits < 2 || !especial) { // Comprova que es cumpleixin tots els requisits.
        errorContrasenya.textContent = "La contrasenya no compleix els requisits.";
        return false;
    }
    errorContrasenya.textContent = "";
    return true;
}

function validarConfirmarContrasenya() { // Comprovem que la contrasenya sigui igual.
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
    if (!privacitat.checked) { // Si no hem marcat la casella, escriu l'error. La funció privacitat.checked està treta amb ajuda de ChatGPT.
        errorPrivacitat.textContent = "Accepta la política de privacitat.";
        return false;
    }
    errorPrivacitat.textContent = "";
    return true;
}

// Mostrar/Ocultar contrasenya fet amb ajuda de ChatGPT
mostrarContrasenya.addEventListener("change", () => {
    // Obtenim l'element del camp de contrasenya
    const contrasenya = document.getElementById("contrasenya");

    // Canviem el tipus del camp de contrasenya:
    // Si la casella "mostrarContrasenya" està seleccionada (checked),
    // el tipus serà "text" per mostrar la contrasenya.
    // Si no està seleccionada, el tipus serà "password" per ocultar-la.
    contrasenya.type = mostrarContrasenya.checked ? "text" : "password";
});
// Repetim per el confirmar contrasenya
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
    formulari.reset(); // Neteja tot el formulari
    const errors = document.querySelectorAll(".error"); 
    for (let i = 0; i < errors.length; i++) {
        errors[i].textContent = ""; // Neteja tots els missatges d'error que hi hagi.
    }
    document.getElementById("resultat").textContent = ""; // Borra el contingut del element HTML amb el id "resultat"
}

// Assignem esdeveniments
document.getElementById("nom").addEventListener("blur", validarNom);
document.getElementById("edat").addEventListener("change", validarEdat);
document.getElementById("codi-postal").addEventListener("blur", validarCodiPostal);
document.getElementById("email").addEventListener("blur", validarEmail);
document.getElementById("contrasenya").addEventListener("blur", validarContrasenya);
document.getElementById("confirmar-contrasenya").addEventListener("blur", validarConfirmarContrasenya);
document.getElementById("privacitat").addEventListener("change", validarPrivacitat);
enviarBtn.addEventListener("click", validarFormulari);
esborrarBtn.addEventListener("click", esborrarFormulari);
