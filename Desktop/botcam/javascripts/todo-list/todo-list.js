
const contenedor = document.querySelector(".container");
const tarea = document.querySelector("#entrada");
const texto = document.querySelector("#texto");
const items = document.querySelector(".items");

const listado=[];

const Agregar = () => {

    // Verificar si el campo de entrada no está vacío
    if (tarea.value.trim() !== '') {
        // Ocultar el texto que indica que la lista está vacía
        texto.style.display = 'none';

        // Agregar la tarea al arreglo listado
        listado.push(tarea.value);
        console.log(listado);

        // Limpiar el campo de entrada
        tarea.value = '';

        // Limpiar el contenido previo de items
        items.innerHTML = '';

        // Iterar sobre el arreglo listado y crear elementos li para cada tarea
        listado.forEach((item) => {
            let dato = document.createElement('li');
            dato.classList.add("item", "alert", "alert-success");

            // Crear el botón de eliminar
            let btnEliminar = document.createElement('button');
            btnEliminar.textContent = "X";
            btnEliminar.classList.add("btn", "btn-danger", "btn-sm", "eliminar"); // Agregar clase "eliminar"

            // Manejar evento de clic en el botón para eliminar el elemento li
            btnEliminar.addEventListener("click", (e) => {

                const item = e.target.parentElement;
                const textoTarea = item.textContent.trim();
            
                // Buscar el texto de la tarea insensible a mayúsculas y minúsculas en el array
                const index = listado.findIndex(tarea => tarea.trim().toLowerCase() === textoTarea.toLowerCase());
            
                listado.splice(index, 1); 
                items.removeChild(item); // Eliminar el elemento li del DOM
            });

            // Agregar texto de la tarea al elemento li
            dato.textContent = item;

            // Agregar el botón de eliminar al elemento li
            dato.appendChild(btnEliminar);

            // Agregar el elemento li a la lista de items
            items.appendChild(dato);
        });
    } else {
        // Mostrar el texto que indica que la lista está vacía
        texto.style.display = 'block';
    }
};




