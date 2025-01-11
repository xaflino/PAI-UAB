const Sis=document.createElement("li");
let contingut=document.createTextNode("Sis");
Sis.appendChild(contingut);
llista.appendChild(Sis);

const tres=document.createElement("li");
let contingut1=document.createTextNode("Tres");
tres.appendChild(contingut1);
llista.insertBefore(tres,llista.children[2]);
