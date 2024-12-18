// Treballarem sempre amb una variable global, obj, què és una taula on estan 
// guardats tots els accidents de l'any. Qualsevol altre variable que necessitem
// haurà de ser, necessàriament, una variable local.

// Com que al document html no hi ha controladors d'esdeveniments, els haurem de crear aquí:

// Calcular el nombre total d'accidents de l'any
function exercici01() {
    const totalAccidents = obj.length; // Contar el total de accidentes
    document.getElementById("resultat01").textContent = `Total d'accidents: ${totalAccidents}`;
}
    
function exercici02() {
    const accidentsPerDia = {}; // Almacena los accidentes por día

    for (let i = 0; i < obj.length; i++) {
        const dia = obj[i].DIA_SETMANA; // Obtener el día de la semana
        if (dia) {
            if (!accidentsPerDia[dia]) {
                accidentsPerDia[dia] = 1; // Si no existe, inicializar
            } else {
                accidentsPerDia[dia]++; // Si ya existe, incrementar
            }
        }
    }

    // Buscar el día con más accidentes
    let diaMax = "";
    let maxAccidents = 0;

    for (let dia in accidentsPerDia) {
        if (accidentsPerDia[dia] > maxAccidents) {
            maxAccidents = accidentsPerDia[dia];
            diaMax = dia;
        }
    }

    document.getElementById("resultat02").textContent = 
        `Dia amb més accidents: ${diaMax} (${maxAccidents} accidents)`;
}


function exercici03() {
    const accidentsPerDistricte = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; // Inicializar a 0
    let altres = 0; // Contador para los distritos no válidos

    for (let i = 0; i < obj.length; i++) {
        const districte = parseInt(obj[i].DISTRICTE); // Obtener el distrito
        if (districte >= 1 && districte <= 10) {
            accidentsPerDistricte[districte - 1]++; // Incrementar contador del distrito
        } else {
            altres++; // Contar como "Altres"
        }
    }

    // Crear la lista no ordenada
    const llista = document.createElement("ul");

    for (let i = 0; i < accidentsPerDistricte.length; i++) {
        const element = document.createElement("li");
        element.textContent = `Districte ${i + 1}: ${accidentsPerDistricte[i]} accidents`;
        llista.appendChild(element);
    }

    // Añadir el contador de "Altres"
    const altresElement = document.createElement("li");
    altresElement.textContent = `Altres: ${altres} accidents`;
    llista.appendChild(altresElement);

    const resultat = document.getElementById("resultat03");
    resultat.innerHTML = ""; // Limpiar contenido anterior
    resultat.appendChild(llista);
}

function exercici04() {
    creaFormulari(); // Crear el formulario

    document.getElementById("selectDistricte").addEventListener("change", (event) => {
        const districteSeleccionat = parseInt(event.target.value);
        let totalAccidents = 0;

        for (let i = 0; i < obj.length; i++) {
            if (parseInt(obj[i].DISTRICTE) === districteSeleccionat) {
                totalAccidents++;
            }
        }

        document.getElementById("resultat04").textContent = 
            `Accidents al districte ${districteSeleccionat}: ${totalAccidents}`;
    });
}

document.getElementById("exer01").addEventListener("click", () => {
    exercici01();
});

document.getElementById("exer02").addEventListener("click", () => {
    exercici02();
});

document.getElementById("exer03").addEventListener("click", () => {
    exercici03();
});

document.getElementById("exer04").addEventListener("click", () => {
    exercici04();
});
