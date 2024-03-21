const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 500},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

meses.forEach((mes) => {

    if(mes === 'Enero'){
        console.log('si existe')
    }
     console.log(mes) 
    
});


const array = [1, 2, 3, 4, 5];
const array2 = [1, 2, 3, 4, 5];
function arraySuma(array){
    array.forEach( (suma,index) =>{
        console.log(suma += suma)
      
    })
}
arraySuma(array2)
// Checks whether an element is even
const even = (element) => element % 2 === 0;

console.log(array.some(even));


[12, 5, 8, 1, 4].some((elem) => elem > 10); // true

//retona un boleano si existe en arreglos lineales
const datos = meses.includes('Enero');
console.log(datos);

const datos3 = meses.some(mes => mes ==='Enero');
console.log(datos3);

//retona un boleano si existe en arreglos de objetos
const datos2 = carrito.some(producto =>{
    return producto.nombre == 'Celular';
});
console.log(datos2);

const datos4 = carrito.some(producto =>{
    return producto.precio <= 200;
});
console.log(datos4);