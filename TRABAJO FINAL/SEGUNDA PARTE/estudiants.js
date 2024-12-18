// Comprova si l'objecte obj està carregat
function verificarObj() {
    if (!obj || obj.length === 0) {
        alert("Carrega un arxiu abans d'executar l'opció.");
        return false;
    }
    return true;
}

// Funció per mostrar el resultat a la secció indicada
function mostrarResultat(id, contingut) {
    const resultatDiv = document.getElementById("resultats");
    resultatDiv.innerHTML = ""; // Netejar contingut anterior
    const result = document.createElement("div");
    result.id = id;
    result.innerHTML = contingut;
    resultatDiv.appendChild(result);
}

// Calcular el nombre total d'accidents de l'any
function exercici01() {
    if (!verificarObj()) return;
    let totalAccidents = 0;
    for (let i = 0; i < obj.length; i++) {
        totalAccidents++;
    }
    mostrarResultat("resultat01", `<p>Total d'accidents: ${totalAccidents}</p>`);
}

// Escriure el dia amb més accidents
function exercici02() {
    if (!verificarObj()) return;
    const accidentsPerDia = {};
    for (let i = 0; i < obj.length; i++) {
        const dia = obj[i].diaSet;
        if (accidentsPerDia[dia]) {
            accidentsPerDia[dia]++;
        } else {
            accidentsPerDia[dia] = 1;
        }
    }

    let diaMax = "";
    let maxAccidents = 0;
    for (let dia in accidentsPerDia) {
        if (accidentsPerDia[dia] > maxAccidents) {
            maxAccidents = accidentsPerDia[dia];
            diaMax = dia;
        }
    }

    mostrarResultat("resultat02", `<p>Dia amb més accidents: ${diaMax} (${maxAccidents} accidents)</p>`);
}

// Escriure quants accidents hi ha per districte
function exercici03() {
    if (!verificarObj()) return;
    const accidentsPerDistricte = Array(10).fill(0);
    let altres = 0;

    for (let i = 0; i < obj.length; i++) {
        const districte = obj[i].nDist;
        if (districte >= 1 && districte <= 10) {
            accidentsPerDistricte[districte - 1]++;
        } else {
            altres++;
        }
    }

    let llistaHTML = "<ul>";
    for (let i = 0; i < accidentsPerDistricte.length; i++) {
        llistaHTML += `<li>Districte ${i + 1}: ${accidentsPerDistricte[i]} accidents</li>`;
    }
    llistaHTML += `<li>Altres: ${altres} accidents</li>`;
    llistaHTML += "</ul>";

    mostrarResultat("resultat03", llistaHTML);
}

// Calcular el nombre d'accidents per districte
function exercici04() {
    if (!verificarObj()) return;
    creaFormulari();
    document.getElementById("districtes").addEventListener("change", (event) => {
        const districteSeleccionat = event.target.value;
        let totalAccidents = 0;
        for (let i = 0; i < obj.length; i++) {
            if (obj[i].districte === districteSeleccionat) {
                totalAccidents++;
            }
        }
        mostrarResultat("resultat04", `<p>Accidents al districte ${districteSeleccionat}: ${totalAccidents}</p>`);
    });
}

// Afegir esdeveniments a les opcions del menú
document.getElementById("exer01").addEventListener("click", exercici01);
document.getElementById("exer02").addEventListener("click", exercici02);
document.getElementById("exer03").addEventListener("click", exercici03);
document.getElementById("exer04").addEventListener("click", exercici04);
