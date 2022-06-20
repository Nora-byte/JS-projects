/* Variables JS, las variables son elementos que contienen los datos,
tanto en formato numericos como texto. Existe cuatro tipos de declaracion 
de variables: var, let, const, nothing (nulo) */

// Usando Var: variable que se puede modificar durante una operacion
var x = 5;
var y = 6;
var z = x+y;

console.log(z) // resultado -> 11

// Usando let: variable que se puede modificar durante una operacion
let x = 4;
let y = 6;
let z = x + y;

console.log(z) // resultado -> 10

// Usando const: variable que no se puede modificar una vez declarada

const price1 = 5;
const price2 = 6;
let total = price1 + price2;

console.log(total) // resultado -> 11

// Usando nothing: variable nula o no existente que una vez llamada no presenta ningun dato

x = 5;
y = 6;
z = x + y;
console.log(z) // resultado -> NULL