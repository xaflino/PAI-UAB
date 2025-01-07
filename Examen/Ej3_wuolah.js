function compartirEnllacos(){
    const p3=document.getElementById("aquest");
    const enllaços=p3.getElementsByTagName("a");

    document.getElementById("resultats").innerHTML=enllaços.length;
// b)
    const paragraf=document.getElementsByTagName("p");
    paragraf[0].style.display="none";
    paragraf[1].style.display="none";
    paragraf[3].style.display="none";
}

