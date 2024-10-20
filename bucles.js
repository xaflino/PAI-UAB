// 16.3.- Escriu un programa que, donat un nombre N, escrigui a la consola la suma de tots els nombres entre 1 i N.
let num=parseInt(prompt("Escriu un nombre"));
let suma=0;

for(let i=1; i<=num; i++){
   suma+=i;
}
console.log(suma);