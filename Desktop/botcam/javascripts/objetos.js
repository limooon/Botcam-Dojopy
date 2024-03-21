//objeto literal
const persona = {
    nombre: 'Juan',
    edad: 30,
    ciudad: 'Madrid',
    saludar: function() {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
};
  
console.log(persona.nombre); // Acceder a una propiedad
persona.saludar(); // Invocar un método


console.log(persona.edad); // Acceder a una propiedad
persona.edad = 35; // Modificar una propiedad

persona.saludar = function() {
    console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
};


function Persona(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    };
}
  
  const persona1 = new Persona('María', 25);
  const persona2 = new Persona('Carlos', 40);
  persona1.saludar();
  persona2.saludar();


  Persona.prototype.despedirse = function() {
    console.log(`Adiós, me llamo ${this.nombre}.`);
  };
  persona1.despedirse();


  class Persona {
    constructor(nombre, edad) {
      this.nombre = nombre;
      this.edad = edad;
    }
    saludar() {
      console.log(`Hola, soy ${this.nombre} y tengo ${this.edad} años.`);
    }
  }
  const persona3 = new Persona('María', 25);
  persona3.saludar();


//desectructuracion
const { nombre, edad } = persona1;
console.log(nombre, edad); // Salida: María 25

//Spread Operator (Operador de Propagación):
const personaNueva = { ...persona1, ciudad: 'Barcelona' };
console.log(personaNueva); // Salida: { nombre: 'María', edad: 25, ciudad: 'Barcelona' }

//Método Object.keys():
const keys = Object.keys(persona1);
console.log(keys); // Salida: ['nombre', 'edad']

//Método Object.values():
const values = Object.values(persona1);
console.log(values); // Salida: ['María', 25]