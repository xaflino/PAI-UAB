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