class empleat {
    constructor(n, e, s) {
        this.nom = n;
        this.edat = e;
        this.salari = s;
    }
}

let dades = [
    { nom: "Joan Puig", edat: 48, salari: 2900 },
    { nom: "Ingasi Roma", edat: 35, salari: 2750 },
    { nom: "Júlia Coll", edat: 22, salari: 1900 },
    { nom: "Pere García", edat: 22, salari: 1775 },
    { nom: "Alba Roig", edat: 55, salari: 3100 },
    { nom: "Eva Carrasco", edat: 44, salari: 1950 },
    { nom: "Clàudia Mena", edat: 35, salari: 4250 }
];


function comprovaEdat(){
    const edat = document.getElementById("edat").value;
    let cont=0;
    for(let i=0;i<dades.length;i++){
        if(dades[i].edat==edat){
            cont++;
        }

    }
    document.getElementById("resultatEdat").innerHTML=cont;
}

function comprovaSalari(){
    const salari = document.getElementById("salari").value;
    let cont=0;
    for(let i=0;i<dades.length;i++){
        if(dades[i].salari>salari){
            cont++;
        }

    }
    document.getElementById("resultatSalari").innerHTML=cont;
}
