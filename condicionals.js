// 13.1.- Escriu un programa que donat un número llegit amb prompt escrigui el missatge "el número llegit és negatiu" si el número és més petit que zero.
//    let numeroNegatiu = parseInt(prompt("Introdueix un número:"));
//    if (numeroNegatiu<0) {
//       document.write("El numero llegit es negatiu");
//       console.log("El numero llegit es negatiu");
//   }

// 14.2.- Escriu un programa que donat un número llegit amb prompt, escrigui el missatge “el número llegit és parell” si el número es parell i “el número llegit es senar” en cas contrari.

//  let nombre = prompt("introdueix nombre");   //Porque no parseint??
//  if (nombre % 2 == 0) {
//     document.write("El nombre es parell");
//     console.log("El nombre es parell");
//  } else {
//     document.write("El nombre es senar");
//     console.log("El nombre es senar");
//  }

// 14.3.- Escriu un programa que, donat dos números llegits amb prompt, escrigui a la consola quin és el més gran. Només pots fer servir una instrucció if-else.

// let numero1=parseInt(prompt("Escriu numero"));
// let numero2=parseInt(prompt("Escriu numero"));

// if (numero1>numero2){
//     console.log("El nombre més gran es el primer:"+numero1)
// } else {
//     console.log("El nombre més gran es el segon:"+numero2)
// }

// 15.3.- Escriu un programa, que donat una lletra que representa un dia de la setmana (l - dilluns, m - dimarts, x - dimecres, j - dijous, ...) escrigui a la consola si el dia és laborable o festiu. Són laborables de dilluns a divendres. Fes servir la instrucció switch.

// let dia=prompt("Escriu la primera lletra del dia de la setmana que vulguis en minúcula:");

//switch (dia){
//    case "l":
//        console.log("Laborable");
//   case "m":
//        console.log("Laborable");
//    case "x":
//        console.log("Laborable");
//    case "s":
//        console.log("Festivo")
//}

// 14.6.- En un control d’alcoholèmia necessiten un programa que els hi digui si una persona pot conduir o no. El programa demanarà dues dades: Si la persona té carnet de conduir i el
// valor que ha sortit a la prova d’alcoholèmia. El programa ha de respondre que sí pot conduir si té carnet de conduir i la prova d’alcoholèmia ha donat un valor inferior a 0.25

// let carnet=prompt("Tens carnet de conduir?");
// let prova=parseFloat(prompt("Escriu resultat de la prova"));

// if (carnet="si" && prova<0.25){
//    document.write("Pots Conduir");
//    console.log("Pots Conduir");
// }

// 14.8.- Escriu un programa que simuli la compra a una web. L’usuari haurà d’introduir una quantitat (el que cal pagar) per teclat fent servir la instrucció prompt.
// En cas que la quantitat sigui 30€ o més, es mostrarà a la consola un missatge indicant que el cost total és de 30€ donat que el transport és gratis.
// En cas que la quantitat sigui inferior a 30€, es mostrarà un missatge dient el preu total que consistirà en l’introduït més 4.95€ en concepte de cost d’enviament.

// let pagament = parseFloat(prompt("Introdueix la quantitat a pagar:"));

// if (pagament>=30) {
//    console.log("Cost total=30$");
// } else {
//     let costEnvio= 4.95;
//     let total= pagament + costEnvio;
//    console.log("Cost total="+total+"$");
// }

// 14.9.-
// let gelat= prompt("Vols Con (c) o Terrina (t)?");
// let sabor= prompt("Quin sabor vols? Vainilla, Xocolata, Turró, Menta, Oreo, Crema, Gerds, Atmelles");
// let PreuT=3.95
// let PreuC=3.45
// let A=0.5
// let B=1
// let CA=3.95
// let TA=4.45
// let CB=4.45
// let TB=4.95

// if (sabor!=="Vainilla"&&sabor!=="Xocolata"&&sabor!=="Turró"&&sabor!=="Menta"&&sabor!=="Oreo"&&sabor!=="Crema"&&sabor!=="Gerds"&&sabor!=="Atmelles"&&gelat!=="c"&&gelat!=="t"){
//     console.log("Error, dades malament");
// } else if (gelat==="c"){
    if(sabor==="Vainilla"||sabor==="Xocolata"){
        console.log("El preu es "+PreuC+"$");
    }else if (sabor==="Menta"||sabor==="Oreo"||sabor==="Turró"){
        console.log("El preu es "+CA+"$");
    }else{
        console.log("El preu es "+CB+"$");
    }
// } else if (gelat==="t"){
//     if(sabor==="Vainilla"||sabor==="Xocolata"){
//         console.log("El preu es "+PreuT+"$");
//     }else if (sabor==="Menta"||sabor==="Oreo"||sabor==="Turró"){
//         console.log("El preu es "+TA+"$");
//     }else{
//         console.log("El preu es "+TB+"$");
//     }
// }

// 15.2.-
// let gelat = prompt("Terrina (t) o Con (c)?");
// let PreuT = 3.95;
// let PreuC = 3.45;
// let sabor = prompt("Quin sabor vols? Vainilla, Xocolata, Turró, Menta, Oreo, Crema, Gerds, Atmelles");
// let supl1 = 0.5;
// let supl2 = 1;

//if (gelat==="t"||gelat==="c"){
    if (gelat==="t"){
        switch (sabor){
            case "Vainilla":
            case "Xocolata":
                console.log(PreuT);
                break;
            case "Oreo":
            case "Turró":
            case "Menta":
                console.log(PreuT+supl1);
                break;
            case "Crema":
            case "Atmelles":
            case "Gerds":
                console.log(PreuT+supl2);
                break;
            default:
                console.log("Tens un error al sabor")       
        }
    } else if (gelat==="c"){
        switch (sabor){
            case "Vainilla":
            case "Xocolata":
                console.log(PreuC);
                break;
            case "Oreo":
            case "Turró":
            case "Menta":
                console.log(PreuC+supl1);
                break;
            case "Crema":
            case "Atmelles":
            case "Gerds":
                console.log(PreuC+supl2);
                break;
            default:
                console.log("Tens un error al sabor")       
        }
    }
//} else {
//    console.log("Tens un error en les dades.");
//}

