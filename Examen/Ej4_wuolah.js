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
    const edatInput=document.getElementById("edat").value;
    let numEmpleats=0;
    for(let i=0; i<dades.length;i++){
        if(dades[i].edat==edatInput){
            numEmpleats++;
        }
    }
    document.getElementById("resultatEdat").innerHTML=numEmpleats;
}

function comprovaSalari1(){
    const sInput=parseInt(document.getElementById("salari").value);
    let mes=false;
    for(let i=0;i<dades.length;i++){
        if(sInput<dades[i].salari){
            mes=true;
            break;
        }
    }
    if(mes==false){
        document.getElementById("resultatSalari").innerHTML="No hi ha ningú que cobri més";
    }else{
        document.getElementById("resultatSalari").textContent="Si que hi ha gent que cobra més";
    }
    
}