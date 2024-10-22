// 16.3.- Escriu un programa que, donat un nombre N, escrigui a la consola la suma de tots els nombres entre 1 i N.
// let num=parseInt(prompt("Escriu un nombre"));
// let suma=0;

// for(let i=1; i<=num; i++){
//    suma+=i;
// }
// console.log(suma); 


// 16.7.- Escriu un programa que, donat un número N, escrigui a la consola la taula de multiplicar de N.
// let n = parseInt(prompt("Escriu numero"));
// let i=1;

// for (i=1; i<=10; i++){
//     console.log(i*n);
// }

// 16.9.- Escriu un programa que donat un número N, escrigui N asteriscos (*)
// let n= prompt("Escriu numero");
// let i=1;
// let text="";
// for(i=1;i<=n;i++){
//     text+="*";
// }
// console.log(text);


// 17.1.- Escriu, fent servir la instrucció while, un programa que escrigui a la consola 10 cops el text “Estem fent bucles”.
// let i=1;
// text="";
// while (i<=10){
//     text += "Estem fent bucles while</br>";
//     i++;
// }
// document.write(text);

// O TAMBIÉN:

// let j = 1,
//   text = "";
// while (j <= 10) {
//   text += "Estem fent bucles while</br>";
//   document.getElementById("identificador1").innerHTML = text;
//   j++;
// }


// 17.5.- Escriu un programa que, donats dos números N i M, escrigui en la consola la llista de multiplicacions N*1, N*2, N*3, N*4,...,N*M Per evitar problemes per la mida del resultat (en cas que N o M siguin molt grans) l’escriptura de multiplicacions s’ha d’aturar si el resultat és més gran que 999999 (faig servir l’espai com a separadors de milers per tal que quedi més clar el nombre).
// let n = parseInt(prompt("Escriu un numero"));
// let m = parseInt(prompt("Escriu un numero"));
// let i = 1;
// let resultat = 0;

// while (i<=m){
//     resultat = n*i;
//     if (resultat<=999999){
//         console.log(resultat);
//     }
//     i++;
// }


// 17.3.- Escriu un programa, fent servir la instrucció while, que, donat un número N, escrigui a la consola tots els números de N a 1 (per tant, en ordre descendent). Observa el que passa si N < 1
// let n = parseInt(prompt("Escriu un nombre n"));
// let text="";
// let i=n;
// while(i>0){
//     text+=i;
//     i--;
// }
// console.log(text);


//17.4.- Fibonacci

// let n = parseInt(prompt("Introdueix un número per a la seqüència de Fibonacci:"));
// let fib1 = 1, fib2 = 1;
// let i = 3; 

// if (n >= 1) {
//     console.log(fib1); 
// }
// if (n >= 2) {
//     console.log(fib2); 
// }

// while (i <= n) {
//    let fibNext = fib1 + fib2; 
//    console.log(fibNext); 
//    fib1 = fib2; 
//    fib2 = fibNext; 
//    i++; 
// }


// 17.2.-
// let i=5;
// while (i<=20){
//     console.log(i);
//     i++;
// }

// 16.7.-
// let N = parseInt(prompt("Donam un número"));
// for(let i = 1; i<=10; i++){
//     let multiplicacio = N * i;
//     console.log(multiplicacio);
// }


