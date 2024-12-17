// Treballarem sempre amb una variable global, obj, què és una taula on estan 
// guardats tots els accidents de l'any. Qualsevol altre variable que necessitem
// haurà de ser, necessàriament, una variable local.

// Com que al document html no hi ha controladors d'esdeveniments, els haurem de crear aquí:

function exercici01() {
    // Calcular el nombre total d'accidents de l'any
    const totalAccidents = obj.length;
    document.getElementById("resultat01").textContent = `Total d'accidents: ${totalAccidents}`;
}

function exercici02() {
    // Calcular el dia amb més accidents
    const accidentsPerDia = {};

    obj.forEach(accident => {
        const dia = accident.DIA_SETMANA;
        accidentsPerDia[dia] = (accidentsPerDia[dia] || 0) + 1;
    });

    const diaAmbMesAccidents = Object.entries(accidentsPerDia).reduce((a, b) => b[1] > a[1] ? b : a);
    document.getElementById("resultat02").textContent = `Dia amb més accidents: ${diaAmbMesAccidents[0]} (${diaAmbMesAccidents[1]} accidents)`;
}

function exercici03() {
    // Accidents per districte
    const accidentsPerDistricte = Array(10).fill(0);

    obj.forEach(accident => {
        const districte = parseInt(accident.DISTRICTE); // Convertir a número
        if (districte > 0 && districte <= 10) {
            accidentsPerDistricte[districte - 1] += 1;
        }
    });

    const llista = document.createElement("ul");
    accidentsPerDistricte.forEach((total, index) => {
        const element = document.createElement("li");
        element.textContent = `Districte ${index + 1}: ${total} accidents`;
        llista.appendChild(element);
    });

    const resultat = document.getElementById("resultat03");
    resultat.innerHTML = ""; // Netejar contingut anterior
    resultat.appendChild(llista);
}

function exercici04() {
    // Crear el formulari i afegir l'escoltador d'esdeveniments
    creaFormulari();

    document.getElementById("selectDistricte").addEventListener("change", (event) => {
        const districteSeleccionat = parseInt(event.target.value);
        const totalAccidents = obj.filter(accident => parseInt(accident.DISTRICTE) === districteSeleccionat).length;
        
        document.getElementById("resultat04").textContent = `Accidents al districte ${districteSeleccionat}: ${totalAccidents}`;
    });
}
