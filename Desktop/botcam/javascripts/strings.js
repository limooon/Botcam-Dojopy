/*
length: Este método devuelve la longitud de una cadena, es decir, el número de caracteres que contiene.
*/
const texto = "Hola Mundo";
console.log(texto.length); // Output: 10
/*
charAt(index): Devuelve el carácter en la posición especificada de una cadena.
*/
const texto2 = "Hola Mundo";
console.log(texto2.charAt(0)); // Output: H
/*
substring(startIndex, endIndex): Extrae los caracteres desde startIndex hasta endIndex (no incluido) de una cadena y devuelve la subcadena.
*/
const texto3 = "Hola Mundo";
console.log(texto3.substring(0, 4)); // Output: Hola
/*
slice(startIndex, endIndex): Similar a substring(), pero también permite índices negativos para contar desde el final de la cadena.
*/
const texto4 = "Hola Mundo";
console.log(texto4.slice(-5)); // Output: Mundo
/*
toUpperCase(): Convierte todos los caracteres de una cadena a mayúsculas.
*/
const texto5 = "Hola Mundo";
console.log(texto5.toUpperCase()); // Output: HOLA MUNDO
/*
toLowerCase(): Convierte todos los caracteres de una cadena a minúsculas.
*/
const texto6 = "Hola Mundo";
console.log(texto6.toLowerCase()); // Output: hola mundo
/*
indexOf(substring): Devuelve el índice de la primera ocurrencia de substring en una cadena, o -1 si no se encuentra.
*/
const texto7 = "Hola Mundo";
console.log(texto7.indexOf("Mundo")); // Output: 5
/*
replace(oldValue, newValue): Reemplaza la primera ocurrencia de oldValue con newValue en una cadena.
*/
const texto8 = "Hola Mundo";
console.log(texto8.replace("Mundo", "Planeta")); // Output: Hola Planeta
/*
trim(): Elimina los espacios en blanco al principio y al final de una cadena.
*/
const texto9 = "   Hola Mundo   ";
console.log(texto9.trim()); // Output: Hola Mundo
/*
split(separator): Divide una cadena en un array de subcadenas utilizando el separador especificado.
*/
const texto10 = "Hola,Mundo";
console.log(texto10.split(",")); // Output: ["Hola", "Mundo"]