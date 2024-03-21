//programar una validacion del metodo de pago

const moneda = ["peso mexicano", "dolares", "pesos argentino"];
var banco = ['bbva','banrejio','paypal','banamex'];
let clientes={
    nombre:'edgar',
    edad:30,
    pais:'mexico',
    mostrarInformacion:function(){
        return this.nombre + ":" +this.edad + ":" +this.pais;
    }

};
const {nombre,edad,pais}=clientes;



if(pais =="mexico"){
    return moneda["peso mexicano"];
}else if(pais !="mexico"){
  let opciones = moneda.filter(()=>{
    moneda.forEach((x)=>{
       x++;
    })
    banco.forEach((x)=>{
        x++;
     })
  })
  return console.log(opciones);
}







