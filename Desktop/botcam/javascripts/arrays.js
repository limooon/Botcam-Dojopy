/*
push(): Agrega uno o más elementos al final de un array y devuelve la nueva longitud del array.
*/
const array = [1, 2, 3];
array.push(4, 5);
console.log(array); // Output: [1, 2, 3, 4, 5]
/*
pop(): Elimina el último elemento de un array y lo devuelve.
*/
const array2 = [1, 2, 3];
const ultimoElemento = array2.pop();
console.log(ultimoElemento); // Output: 3
/*
shift(): Elimina el primer elemento de un array y lo devuelve, reduciendo la longitud del array.
*/
const array3 = [1, 2, 3];
const primerElemento = array3.shift();
console.log(primerElemento); // Output: 1
/*
.unshift(): Agrega uno o más elementos al inicio de un array y devuelve la nueva longitud del array.
*/
const array4 = [2, 3];
array.unshift(0, 1);
console.log(array4); // Output: [0, 1, 2, 3]
/*
.concat(): Combina dos o más arrays y devuelve un nuevo array sin modificar los originales.
*/
const array5 = [1, 2];
const array6 = [3, 4];
const newArray = array5.concat(array6);
console.log(newArray); // Output: [1, 2, 3, 4]
/*
slice(): Devuelve una copia superficial de una porción de un array como un nuevo array seleccionando los elementos indicados por índices de inicio y fin.
*/
const array7 = [1, 2, 3, 4, 5];
const newArray2 = array7.slice(1, 4);
console.log(newArray2); // Output: [2, 3, 4]
/*
splice(): Cambia el contenido de un array eliminando elementos existentes y/o agregando nuevos elementos.
*/
const array8 = [1, 2, 3, 4, 5];
array8.splice(2, 1, 'a', 'b');
console.log(array8); // Output: [1, 2, "a", "b", 4, 5]
/*
forEach(): Ejecuta una función proporcionada una vez por cada elemento del array.
*/
const array9 = [1, 2, 3];
array9.forEach(elemento => console.log(elemento));
/*
map(): Crea un nuevo array con los resultados de llamar a una función proporcionada en cada elemento del array.
*/
const array10 = [1, 2, 3];
const newArray3 = array10.map(elemento => elemento * 2);
console.log(newArray3); // Output: [2, 4, 6]
/*
filter(): Crea un nuevo array con todos los elementos que pasan la prueba implementada por la función proporcionada.
*/
const array11 = [1, 2, 3, 4, 5];
const newArray4 = array11.filter(elemento => elemento % 2 === 0);
console.log(newArray4); // Output: [2, 4]
/*
El método reduce() se utiliza para reducir los elementos de un array a un único valor. Toma una función de reducción como argumento y esta función se aplica acumulativamente a cada elemento del array, de izquierda a derecha, para reducirlos a un solo valor.
*/
const array12 = [1, 2, 3, 4, 5];

// Suma todos los elementos del array
const suma = array12.reduce((acumulador, elemento) => acumulador + elemento, 0);
console.log(suma); // Output: 15

// Calcula el producto de todos los elementos del array
const producto = array12.reduce((acumulador, elemento) => acumulador * elemento, 1);
console.log(producto); // Output: 120


let id = [1,2,3,4,5,6,7,8,9,0];

const empleados =[

    { id:id[0] ,nombre:'edgar',edad:30,tipo:'base',sueldo:1600 },
    { id:id[1] ,nombre:'ruben',edad:30,tipo:'confianza',sueldo:1000 },
    { nombre:'edgar',edad:30,tipo:'base' ,sueldo:1030},
    { nombre:'ruben',edad:30,tipo:'confianza' ,sueldo:1400},
    { nombre:'edgar',edad:30,tipo:'base' ,sueldo:1000},
    { nombre:'ruben',edad:30,tipo:'confianza',sueldo:1000 },
    { nombre:'edgar',edad:30,tipo:'base' },
    { id:id[2] ,nombre:'zulethe',edad:10,tipo:'confianza',sueldo:1700 },

];

let res1 = id.includes(3);//true
console.log(res1);

let res3 = empleados.filter((empleados)=>{
    return empleados.sueldo >= 1300;
})
console.log(res3);

// Filtrar empleados con sueldo definido
const empleadosConSueldo = empleados.filter(empleado => empleado.sueldo !== undefined);

// Calcular la suma de los sueldos utilizando reduce
let sumaSueldos = empleadosConSueldo.reduce((total, empleado) => {
    return total + empleado.sueldo;
}, 0);

console.log(sumaSueldos);