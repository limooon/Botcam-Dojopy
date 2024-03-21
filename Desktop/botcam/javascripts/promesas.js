console.log('hola');

let objeto=[
    
     {
        nombre: 'Ejercicios',
        edad:28,
     },
     {
        nombre: 'Ejercicios',
        edad:28,
     },
     {
        nombre: 'Ejercicios',
        edad:28,
     }


];


function data(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve(objeto);
        },3000);
    });
}
function compra(){
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{
            resolve({
                id:123,
                precio:200,
                cliente:objeto[0],
            });
        },3000);
    });
}
data().then(item => console.log(item)).then(compra => console.log(compra));