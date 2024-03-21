const meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio'];

const carrito = [
    { nombre: 'Monitor 20 Pulgadas', precio: 600},
    { nombre: 'Televisión 50 Pulgadas', precio: 700},
    { nombre: 'Tablet', precio: 300},
    { nombre: 'Audifonos', precio: 200},
    { nombre: 'Teclado', precio: 50},
    { nombre: 'Celular', precio: 500},
    { nombre: 'Bocinas', precio: 300},
    { nombre: 'Laptop', precio: 800},
];

//saver el indice de un elemento

meses.forEach( (mes ,i) => {
    if(mes === 'Febrero'){
        console.log(`encontyrado el indice ${i}`)
    }
})

let dato = meses.findIndex( mes => mes === 'Abril' );
console.log(dato);

let dato3 = meses.findIndex( mes => mes === 'Abril' );

if( dato3 !== -1){
    meses.splice( dato3,1)
}
console.log(meses);
console.log(dato3);

let dato2 = carrito.findIndex( producto => producto.nombre === 'Laptop' );
console.log(dato2);

if( dato2 !== -1){
    carrito.splice(dato2,1);
}