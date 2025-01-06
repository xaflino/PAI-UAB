function comprova(){
    let contraseña=document.getElementById("pas1").value;
    let numeros="1234567890"
    let digits = false
    if(contraseña.length<10){
        document.getElementById("resultat").innerHTML="La contrasenya ha de tenir almenys 10 caràcters";
        return
    } 

    for(let i=0;i<contraseña.length;i++){
        for(let j=0;j<numeros.length;j++){
            if(contraseña[i]===numeros[j]){
                digits=true;
                break;
            } 
        }
        if (digits===true){
            break;
        } 
    }
    if (digits===false){
        document.getElementById("resultat").innerHTML="La contrasenya ha de tenir almenys un digit"; 
    } else{
        document.getElementById("resultat").innerHTML="La contrasenya compleix els requisits";
    }
}