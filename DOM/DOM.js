// Exercici 5.1
// a.	Número d'enllaços que hi ha a la pàgina
function e51a(){
	alert( "Número d'enllaços: " + document.links.length);
}
// b.	Adreça (URL) del penúltim enllaç
function e51b(){
	alert("El penúltim enllaç apunta a: " +document.links[document.links.length-2].href);
}
//c.	Numero d'enllaços que ho fan a http://www.uab.cat
function e51c(){
	var comptador = 0;
	for(var i=0; i<document.links.length; i++) {
		// És necessari comprovar els enllaços http://www.uab.cat i
		// http://www.uab.cat/ per les diferències entre navegadors
		if(document.links[i].href == "http://www.uab.cat" || document.links[i].href == 	"http://www.uab.cat/") {
			comptador ++;
		}
	}
	alert("Hi ha "+comptador+" enllaços que apunten a http://www.uab.cat");
}
//d.	Número d'enllaços al tercer paràgraf.
function e51d(){
	var parrafs = document.getElementsByTagName("p");
	enllaços = parrafs[2].getElementsByTagName("a");
	alert("Número d'enllaços del tercer pàragraf: "+enllaços.length);
}

// Exercici 5.2
// a. Al final de dels paràgrafs existents.
function e52a(){ 
	//Crear node de tipus element 
	var nouParraf = document.createElement("p"); 
	// Crear node de tipus text 
	var contingut = document.createTextNode("Hola Món!"); 
	// Afegir el node text com a fill del node element 
	nouParraf.appendChild(contingut); 
	// Afegir el node Element com a fill de la pàgina 
	document.body.appendChild(nouParraf);
}
// b. Entre el segon i el tercer paràgraf.
function e52b(){
	//totsElsParrafs és un Node ListObject que tonté els tres paràgrafs
	var totsElsParrafs = document.getElementsByTagName("p");	
 	//Crear node de tipus element 
	var nouParraf = document.createElement("p");
	// Crear node de tipus text 
	var contingut = document.createTextNode("Hola Món!");
	// Afegir el node text com a fill del node element
	nouParraf.appendChild(contingut);
	// Afegir el node Element com a fill del segon element del Node ListObjects 
	totsElsParrafs[1].appendChild(nouParraf);
}


// Exercici 5.3
// Afegir "Salve Mundi!" a la llista en penúltima posició. 
function e53a(){	
	// llista és un Node ListObject que tonté els elements <li>
	var llista = document.getElementById("llista");
	var nElements = llista.childNodes.length; //Número de fills
  
	//Crear node de tipus element
 	var nouItem= document.createElement("LI");
 	// Crear node de tipus text 
 	var textNode = document.createTextNode("Salve Mundi!");
	// Afegir el node text com a fill del node element 
 	nouItem.appendChild(textNode);

	/***************************************************************************/
	// Afegir el node Element com a fill del segon element del Node ListObjects 
	// Cal tenir present què:
	// llista.childNodes[0], apunta al l'atribut id=llista
	// llista.childNodes[1], apunta al primer element <li>
	// llista.childNodes[2], apunta al text del primer element <li>
	// llista.childNodes[3], apunta al segon element <li>
	// llista.childNodes[4], apunta al text del segon element <li>
	// Per tant:
	// Si hi ha 6 etiquetes <li> hi haurà 13 elements 
	// El text del darrer serà l'element 13
	// El element <li> serà l'element 12
	// El penúltim element <li> serà l'element nElements - 3  
	/***************************************************************************/
	
	llista.childNodes[nElements-4].appendChild(nouItem);//inserim després
}


// Canviar l'estil de la llista
function e53b(){
	document.getElementById("llista").style.listStyle = "none";
}

// Exercici 5.4
// Amagar el 2on paràgraf
function e54(){
	var paragrafs = document.getElementsByTagName("p");
	var boto = document.getElementById("mostraAmaga");
	// El segon paràgraf és el que està a la posició 1
	if (paragrafs[1].style.display != "none"){
		paragrafs[1].style.display = "none";
		boto.innerHTML = "Mostra paràgraf";
	} else {
		paragrafs[1].style.display = "";
		boto.innerHTML = "Amagar paràgraf";
	}
}