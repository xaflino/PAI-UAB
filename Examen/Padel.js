const nom = document.getElementById("nom");
const cognom = document.getElementById("cognom");

// Capitalitzar
nom.addEventListener("blur",function(){
    let text=nom.value;
    let majusN=text[0].toUpperCase();
    let minusN="";
    for(let i=1;i<text.length;i++){
        minusN+=text[i].toLowerCase();
    }
    nom.value=majusN+minusN;
    
})

cognom.addEventListener("blur",function(){
    let text=cognom.value;
    let majusN=text[0].toUpperCase();
    let minusN="";
    for(let i=1;i<text.length;i++){
        minusN+=text[i].toLowerCase();
    }
    cognom.value=majusN+minusN;
    
})



// Habilitar Cognom
document.getElementById("nom").addEventListener("blur", function(){
    if (nom.value!==""){
        cognom.disabled=false;
    }
    else{
        cognom.disabled=true;
    }
    
})

// Habilitar Sexe
cognom.addEventListener("blur",function(){
    if (cognom.disabled==false){
        document.getElementById("sexe").disabled=false
    }
})

// Habilitar nivell
document.getElementById("sexe").addEventListener("blur",function(){
    if (document.getElementById("sexe").disabled==false){
        document.getElementById("nivell").disabled=false;
    }
})

// Habiltar entreno
document.getElementById("nivell").addEventListener("blur",function(){
    if (document.getElementById("nivell").disabled==false){
        document.getElementById("si").disabled=false;
        document.getElementById("no").disabled=false;
    }
})

// Habilitar On i Quant
document.getElementById("si").addEventListener("change", function() {
    if (this.checked) {
        document.getElementById("on").disabled = false;
        document.getElementById("un").disabled = false;
        document.getElementById("dos").disabled = false;
        document.getElementById("més").disabled = false;
    }
});

document.getElementById("no").addEventListener("change", function() {
    if (this.checked) {
        document.getElementById("on").disabled = true;
        document.getElementById("un").disabled = true;
        document.getElementById("dos").disabled = true;
        document.getElementById("més").disabled = true;
    }
});
    

// Estils
nom.onfocus=function(){
    nom.style.color="black";
}
nom.onblur=function(){
    nom.style.color="gray";
}
cognom.onfocus=function(){
    cognom.style.color="black";
}
cognom.onblur=function(){
    cognom.style.color="gray";
}

// Avisos
nom.addEventListener("blur",function(){
    avisNOM=document.getElementById("Snom");
    if(nom.value==""){
        document.getElementById("Snom").innerHTML="*Cal omplir aquest camp"
        avisNOM.style.color="red";
    }else{
        avisNOM.innerHTML="";
    }
})
cognom.addEventListener("blur",function(){
    avisCOGNOM=document.getElementById("Scognom");
    if(cognom.value==""){
        document.getElementById("Scognom").innerHTML="*Cal omplir aquest camp"
        avisCOGNOM.style.color="red";
    } else{{
        avisCOGNOM.innerHTML="";
    }}
})

class Jugador{
    dades(nom, cognom, nivell, entreno){
        this.nom=nom;
        this.cognom=cognom;
        this.nivell=nivell;
        this.entreno=entreno;
    }
}

// Array para almacenar jugadores
let jugadores = [];

// Botón de enviar
document.querySelector("button").addEventListener("click", function () {
    // Validar que todos los campos estén completos
    if (
        nom.value === "" ||
        cognom.value === "" ||
        document.getElementById("sexe").value === "Predeterminado" ||
        document.getElementById("nivell").value === "Predeterminado"
    ) {
        alert("Por favor, completa todos los campos requeridos.");
        return;
    }

    // Obtener valores del formulario
    let nomValue = nom.value;
    let cognomValue = cognom.value;
    let sexeValue = document.getElementById("sexe").value;
    let nivellValue = document.getElementById("nivell").value;
    let entrenoValue = document.getElementById("si").checked ? "Sí" : "No";
    let onValue = document.getElementById("on").value || "No especificado";
    let diesValue = [];
    if (document.getElementById("un").checked) diesValue.push("1 dia");
    if (document.getElementById("dos").checked) diesValue.push("2 dies");
    if (document.getElementById("més").checked) diesValue.push("Més de 3 dies");

    // Crear un nuevo jugador y guardarlo en el array
    let jugador = new Jugador();
    jugador.dades(nomValue, cognomValue, nivellValue, { entreno: entrenoValue, on: onValue, dies: diesValue });
    jugadores.push(jugador);

    // Mostrar jugadores registrados
    mostrarJugadores();
    esborrarFormulari();
});


function esborrarFormulari() {
    document.getElementById("form1").reset();
}

// Mostrar jugadores en una lista
function mostrarJugadores() {
    // Contenedor donde se mostrará la lista
    let lista = document.getElementById("jugadores-registrados");
    lista.innerHTML = ""; // Limpiar lista previa

    // Crear elementos para cada jugador
    jugadores.forEach((jugador, index) => {
        let item = document.createElement("li");
        item.textContent = `${index + 1}. ${jugador.nom} ${jugador.cognom} - Nivell: ${jugador.nivell}, Entreno: ${jugador.entreno.entreno}, On: ${jugador.entreno.on}, Dies: ${jugador.entreno.dies.join(", ")}`;
        lista.appendChild(item);
    });
}
