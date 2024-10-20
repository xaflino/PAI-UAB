// 13.1.- Escriu un programa que donat un número llegit amb prompt escrigui el missatge "el número llegit és negatiu" si el número és més petit que zero.
//   let numeroNegatiu = parseInt(prompt("Introdueix un número:"));
//   if (numeroNegatiu<0) {
//      document.write("El numero llegit es negatiu");
//      console.log("El numero llegit es negatiu");
//  }

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

let dia=prompt("Escriu la primera lletra del dia de la setmana que vulguis en minúcula:");

switch (dia){
    case "l":
        console.log("Laborable");
    case "m":
        console.log("Laborable");
    case "x":
        console.log("Laborable");
    case "s":
        console.log("Festivo")

}