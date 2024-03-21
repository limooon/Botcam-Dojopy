const buscador = document.querySelector('#search');
const container = document.querySelector('.containedor');
const buscadorMensaje = document.querySelector('header');
const saveCard = document.querySelector('#saveCard');
const cardForm = document.querySelector('#cardForm');
const modificar = document.querySelector('#modificar');
const arrayProductos = [];

buscador.addEventListener('input', FiltrarBusqueda);
saveCard.addEventListener('click', AgregarElemento);
modificar.addEventListener('click', ModificarElemento);

function FiltrarBusqueda() {
    const texto = buscador.value.toLowerCase();
    const tarjetas = document.querySelectorAll('.card-store');
    tarjetas.forEach(tarjeta => {
        const titulo = tarjeta.querySelector('h2').textContent.toLowerCase();
        if (titulo.includes(texto)) {
            tarjeta.style.display = 'block';
        } else {
            tarjeta.style.display = 'none';
        }
    });
}

function AgregarElemento(e) {
    e.preventDefault();
    leerDatos();
}

function leerDatos() {
    const productName = document.getElementById("productName").value.trim();
    const precio = document.getElementById("productPrice").value.trim();
    if (productName !== "" && precio !== "") {
        const existe = arrayProductos.some(producto => producto.productName === productName);
        if (!existe) {
            const info = {
                productImage: document.getElementById("productImage").value,
                productName: productName,
                precio: precio,
                id: Date.now()
            };
            arrayProductos.push(info);
            MostrarMensaje("Producto agregado correctamente");
            ProductosHTML();
            cardForm.reset(); // Restablecer los valores del formulario
        } else {
            MostrarMensaje("El producto ya existe");
        }
    } else {
        MostrarMensaje("Por favor, complete todos los campos del formulario");
    }
}

function MostrarMensaje(mensaje) {
    let error = document.createElement('p');
    error.textContent = mensaje;
    buscadorMensaje.appendChild(error);
    setTimeout(() => {
        error.remove(); // Eliminar mensaje después de unos segundos
    }, 3000);
}

function ProductosHTML() {
    container.innerHTML = ''; // Limpiar contenedor antes de volver a agregar las tarjetas
    arrayProductos.forEach(curso => {
        // Crear la tarjeta (div.card-store)
        const card = document.createElement('div');
        card.classList.add('card-store');
        card.dataset.id = curso.id;

        // Crear el contenedor de la imagen (div.img-content)
        const imgContent = document.createElement('div');
        imgContent.classList.add('img-content');

        // Crear la etiqueta de imagen (img)
        const img = document.createElement('img');
        img.setAttribute('src', curso.productImage);
        img.setAttribute('alt', 'producto');

        // Añadir la imagen al contenedor de la imagen
        imgContent.appendChild(img);

        // Crear el título de la información (h2)
        const infoTitle = document.createElement('h2');
        infoTitle.textContent = curso.productName;

        // Crear el precio de la información (h3)
        const infoPrice = document.createElement('h3');
        infoPrice.textContent = `precio $${curso.precio}`;

        // Crear el botón "Modificar" (button)
        const modifyButton = document.createElement('button');
        modifyButton.textContent = 'Modificar';
        modifyButton.classList.add('btn', 'btn-primary');
        modifyButton.setAttribute('type', 'button');
        modifyButton.setAttribute('data-bs-toggle', 'modal');
        modifyButton.setAttribute('data-bs-target', '#exampleModal2');
        modifyButton.addEventListener('click', () => fillModal(curso)); // Evento para llenar el modal con los datos de la tarjeta

        // Añadir todos los elementos creados a la tarjeta
        card.appendChild(imgContent);
        card.appendChild(infoTitle);
        card.appendChild(infoPrice);
        card.appendChild(modifyButton);

        // Añadir la tarjeta al contenedor
        container.appendChild(card);
    });
}


function ModificarElemento() {
    const productName = document.getElementById("productName").value.trim();
    const precio = document.getElementById("productPrice").value.trim();
    if (productName !== "" && precio !== "") {
        const indice = arrayProductos.findIndex(producto => producto.productName === productName);
        if (indice !== -1) {
            // Actualizar el producto existente con los nuevos valores
            arrayProductos[indice].productImage = document.getElementById("productImage").value;
            arrayProductos[indice].precio = precio;
            MostrarMensaje("Producto modificado correctamente");
            ProductosHTML();
            cardForm.reset(); // Restablecer los valores del formulario
        } else {
            MostrarMensaje("El producto no existe para ser modificado");
        }
    } else {
        MostrarMensaje("Por favor, complete todos los campos del formulario");
    }
}

function EliminarTarjeta(id) {
    const indice = arrayProductos.findIndex(producto => producto.id === id);
    if (indice !== -1) {
        arrayProductos.splice(indice, 1);
        MostrarMensaje('Producto eliminado correctamente');
        ProductosHTML(); // Volver a renderizar las tarjetas
    } else {
        alert('El objeto no existe en el sistema');
    }
}
