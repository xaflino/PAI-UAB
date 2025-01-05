const nom = document.getElementById("nom");
const cognom = document.getElementById("cognom");

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
