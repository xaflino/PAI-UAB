const nom = document.getElementById("nom");
const cognom = document.getElementById("cognom");

// Habilitar Sexe
document.getElementById("nom").addEventListener("blur", function(){
    if (nom.value!==""){
        cognom.disabled=false;
    }
    else{
        cognom.disabled=true;
    }
    
})







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
