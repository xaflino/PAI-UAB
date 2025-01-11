document.getElementById("mostrar").addEventListener("click",function(){
    const nom=document.getElementById("nombre").value;
    const cognom=document.getElementById("apellido").value;
    document.getElementById("resultado").innerHTML=`${nom} ${cognom}`;
});


