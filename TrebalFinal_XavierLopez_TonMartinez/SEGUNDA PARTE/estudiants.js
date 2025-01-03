// Comprova si l'objecte obj està carregat
function verificarObj() {
    if (!obj || obj.length === 0) {
        alert("Carrega un arxiu abans d'executar l'opció.");
        return false;
    }
    return true;
}

// Funció per mostrar el resultat a la secció indicada   
// Totes les funcions que conformen mostrar el resultat he requerit l'ajuda del ChatGPT perquè anava molt perdut.
function mostrarResultat(id, contingut) {
    const resultatDiv = document.getElementById("resultats"); //Localitza element amb id=resultats
    resultatDiv.innerHTML = ""; // Netejar contingut anterior
    const result = document.createElement("div"); 
    result.id = id;
    result.innerHTML = contingut;
    resultatDiv.appendChild(result); // Posa el nou <div> que es el contingut a dins de resultats.
}

// Calcular el nombre total d'accidents de l'any
function exercici01() {
    if (!verificarObj()) return; // Verifica que obj sigui True
    let totalAccidents = 0; // Inicialitza un comptador per als accidents
    for (let i = 0; i < obj.length; i++) { // Recorre cada entrada dins obj, és a dir, cada fila del CSV.
        totalAccidents++; // Incrementa el comptador per cada entrada
    }
    mostrarResultat("resultat01", `<p>Total d'accidents: ${totalAccidents}</p>`); // Mostra el resultat 
}

// Escriure el dia amb més accidents
function exercici02() {
    if (!verificarObj()) return; // Verifica que obj sigui True
    const accidentsPerDia = {}; 
    for (let i = 0; i < obj.length; i++) { 
        const dia = obj[i].diaSet; // Obté el dia de la setmana de cada entrada. Ajuda ChatGPT
        if (accidentsPerDia[dia]) { // Si ja existeix el dia, incrementa el seu valor
            accidentsPerDia[dia]++;
        } else { // Si no, inicialitza amb 1
            accidentsPerDia[dia] = 1;
        }
    }

    let diaMax = ""; 
    let maxAccidents = 0; 
    for (let dia in accidentsPerDia) { // Recorre cada dia al diccionari
        if (accidentsPerDia[dia] > maxAccidents) { // Si aquest dia té més accidents
            maxAccidents = accidentsPerDia[dia]; // Actualitza 
            diaMax = dia; // Assigna el nom del dia del que maxAccidents té el valor
        }
    }

    mostrarResultat("resultat02", `<p>Dia amb més accidents: ${diaMax} (${maxAccidents} accidents)</p>`); // Mostra el resultat
}

// Escriure quants accidents hi ha per districte
function exercici03() {
    if (!verificarObj()) return; 
    const accidentsPerDistricte = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // Inicialitza un array amb 10 valors a 0
    let altres = 0; // Per comptar els accidents fora dels districtes del 1-10

    for (let i = 0; i < obj.length; i++) { 
        const districte = obj[i].nDist; // Obté el districte de l'accident. Ajuda ChatGPT
        if (districte >= 1 && districte <= 10) { 
            accidentsPerDistricte[districte - 1]++; // Incrementa el comptador del districte corresponent. Restem 1 perque el districte 1 al array té la posició 0.
        } else { // Si no és dins dels districtes 1-10
            altres++; // Incrementa el comptador "altres"
        }
    }

    let llistaHTML = "<ul>"; // Inicialitza llista
    for (let i = 0; i < accidentsPerDistricte.length; i++) { // Recorre els districtes
        llistaHTML += `<li>Districte ${i + 1}: ${accidentsPerDistricte[i]} accidents</li>`; // Afegir cada districte i els seus accidents. Ajuda ChatGPT per saber com escriure-ho.
    }
    llistaHTML += `<li>Altres: ${altres} accidents</li>`; // Afegir els accidents d'altres zones
    llistaHTML += "</ul>"; // Tanca la llista HTML

    mostrarResultat("resultat03", llistaHTML); 
}

// Calcular el nombre d'accidents per districte
function exercici04() {
    if (!verificarObj()) return; 
    creaFormulari(); 
    document.getElementById("districtes").addEventListener("change", (event) => {
        const districteSeleccionat = event.target.value; // Guarda el districte seleccionat
        let totalAccidents = 0; 
        for (let i = 0; i < obj.length; i++) { 
            if (obj[i].districte === districteSeleccionat) { // Si l'accident és del districte que volem incrementa comptador.
                totalAccidents++; 
            }
        }
        mostrarResultat("resultat04", `<p>Accidents al districte ${districteSeleccionat}: ${totalAccidents}</p>`); // Mostra el resultat
    });
}

// Afegir esdeveniments a les opcions del menú
document.getElementById("exer01").addEventListener("click", exercici01);
document.getElementById("exer02").addEventListener("click", exercici02);
document.getElementById("exer03").addEventListener("click", exercici03);
document.getElementById("exer04").addEventListener("click", exercici04);
