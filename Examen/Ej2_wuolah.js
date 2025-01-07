function comprovar(){
    lletra=document.getElementById("lletres").value;
    text=document.getElementById("comentaris").value;
    let comptador=0;
    if(lletra.length==1){
        for(let i=0;i<text.length;i++){
            if(text[i]===lletra){
                comptador++;
            }
        }
        document.getElementById("resultat").innerHTML=comptador;
    }
    
    else if(lletra.length==2){
        for (let i = 0; i < text.length - 1; i++) {
            if (text[i] + text[i + 1] === lletra) { //IMPORTANTE
                comptador++;
            }
        }
        document.getElementById("resultat").innerHTML =comptador;
    } 
}
