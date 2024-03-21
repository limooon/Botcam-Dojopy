const carrito = document.querySelector("#carrito");
const listaCursos = document.querySelector("#lista-cursos");
const contenedorCarrito = document.querySelector("#lista-carrito tbody");
const vaciarCarritoBtn = document.querySelector("#vaciar-carrito");
let articulosCarrito = [];

//eventos
eventos();
function eventos() {
  listaCursos.addEventListener("click", agregarCurso);
  carrito.addEventListener("click",eliminarCurso);
  vaciarCarritoBtn.addEventListener("click", ()=>{
    articulosCarrito=[];
    limpiarHtml();//elimina todod el html
  }); 
}

//funciones
function agregarCurso(e) {
  e.preventDefault();
  //console.log(e.target.classList)
  //console.log(e.target.parentElement.parentElement) traversing en la card
  const objeto = e.target.parentElement.parentElement;//card
  //usuario preciona en agregar carrito
  if (e.target.classList.contains("agregar-carrito")) {
    console.log("agregando...");
    //pasas un objeto con los datos del curso desde la referencia del dom de la card
    leerDatos(objeto);
  }
}
// Elimina el curso del carrito en el DOM
function eliminarCurso(e) {
    e.preventDefault();
    if(e.target.classList.contains('borrar-curso') ) {
         // e.target.parentElement.parentElement.remove();
         const cursoId = e.target.getAttribute('data-id')
         
         // Eliminar del arreglo del carrito se trae todos eccepto el encontrado
         articulosCarrito = articulosCarrito.filter(curso => curso.id !== cursoId);

         CargarHtml();
    }
}

function leerDatos(curso) {
  //console.log(curso) obtienes el contenido de la card en un objeto
  const datos = {
    imagen: curso.querySelector("img").src,
    titulo: curso.querySelector("h4").textContent,
    precio: curso.querySelector(".precio span").textContent,
    id: curso.querySelector("a").getAttribute("data-id"),
    cantidad: 1,
  };

  //verificamos si existe el articulo en el carrito
  let existe = articulosCarrito.some( curso => curso.id === datos.id);
  if (existe){
      //actualizamos la cantidad si existe y retorna el curso
      let cursos = articulosCarrito.map(curso => {
         if (curso.id === datos.id){
             curso.cantidad++;
             return curso;// retirna el objeto actualizado
         }else{
            return curso;//retorna objetos que no son duplicados
         }
      })
      articulosCarrito = [...cursos];
  }else{
      //agregamos el curso al carrito
      //console.log(datos)
      //guardas una copia del arreglo mas los datos del objeto agregadao al array
      articulosCarrito = [...articulosCarrito, datos];
  }
 
  console.log(articulosCarrito);
  //CARGAS EL CONTENIDO DEL HTML
  CargarHtml();
}
//recorres el array y muestras los elementos del array denrto del contenedor
function CargarHtml() {
  //limpias el html previo
  limpiarHtml();
    articulosCarrito.forEach(curso => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>  
                <img src="${curso.imagen}" width=100>
            </td>
            <td>${curso.titulo}</td>
            <td>${curso.precio}</td>
            <td>${curso.cantidad} </td>
            <td>
                <a href="#" class="borrar-curso" data-id="${curso.id}">X</a>
            </td>
        `;
        contenedorCarrito.appendChild(row);
    });
}
//limpia sobre cada hijo
function limpiarHtml() {
  //contenedorCarrito.innerHTML = ''
  while (contenedorCarrito.firstChild) {
    contenedorCarrito.removeChild(contenedorCarrito.firstChild);
  }
}
