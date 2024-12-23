/*Cards dinamicas del json*/
const contenedorFila1 = document.querySelector(".fila-1");// acá quiero que estén las cards de la fila-1
let productosFila1 = [] //acá se van a guardar los datos de productos-fila1.json
let productosFila2Centro = [] //acá se van a guardar los datos de productos-fila2.json

fetch('./data/productos-fila1.json') //solicitud al archivo json para cargarlo
  .then(response => response.json()) // Convierte la respuesta en formato json
  .then(data => {
    
    productosFila1 = data
    renderizarProductosFila1(data); // renderizar: leer datos y convertirlos dinámicamente a HTML
    renderizarBotonesModal(data); // renderiza los datos del modal dinámico único
  })

  function renderizarProductosFila1(productosFila1) {
    productosFila1.forEach((producto) => {
      const cardHTML = `
        <div class="card tarjeta" style="width: 18rem;">
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
          <div class="card-body tarjeta-cuerpo text-center">
            <h5 class="card-title">${producto.nombre}</h5> 
            <p class="card-text">Papel fotógrafico premium, ultra blanco, 300gr.</p>
            <button type="button" class="btn tarjeta-boton" data-bs-toggle="modal" data-bs-target="#tarjetaModal" data-id="${producto.id}">
              ¡La quiero!
            </button>
          </div>
        </div>
      `; //esta es la card de la fila1 dinámicamente generada
    
      contenedorFila1.innerHTML += cardHTML; //acá inserto los datos en el html
    });
  }

 
  const contenedorFila2Centro = document.querySelector(".fila2-centro");// acá quiero que estén las cards de la fila-2

  fetch('./data/productos-fila2.json') //solicitud al archivo json para cargarlo
    .then(response => response.json()) // Convierte la respuesta en formato json
    .then(data => {
      productosFila2 = data;
      renderizarProductosFila2(data); // renderizar: leer datos y convertirlos dinámicamente a HTML
      renderizarBotonesModal(data); // renderiza los datos del modal dinámico único
    })
  
    function renderizarProductosFila2(productosFila2Centro) {
      productosFila2Centro.forEach((producto) => {
        const cardHTML = `
        <div class="card tarjeta" style="width: 18rem;">
        <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
        <div class="card-body tarjeta-cuerpo text-center">
          <h5 class="card-title">${producto.nombre}</h5>
          <p class="card-text">Papel fotógrafico premium, ultra blanco, 300gr.</p>
          <button type="button" class="btn tarjeta-boton" data-bs-toggle="modal" data-bs-target="#tarjetaModal" data-id="${producto.id}">
            ¡La quiero!
          </button>
        </div>
      </div>
    `; //esta es la card de la fila2 dinámicamente generada
      
        contenedorFila2Centro.innerHTML += cardHTML; //acá inserto los datos en el html

      });
    }


let productoSeleccionado = null; 

// botones del modal
function renderizarBotonesModal(productosFila1) {
  const botones = document.querySelectorAll('.tarjeta-boton'); // Esto selecciona todos los botones 
  botones.forEach(boton => {
    boton.addEventListener('click', (event) => {
      const idProducto = event.target.getAttribute('data-id'); // Esto captura el id del producto en cuestión
      productoSeleccionado = productosFila1.find(producto => producto.id === parseInt(idProducto)); // Asigna el producto seleccionado a la variable global
      if (productoSeleccionado) {
        actualizarModal(productoSeleccionado); // Esto actualiza el modal con los datos del producto seleccionado
      }
    });
  });
}

const modalTitle = document.querySelector('#exampleModalLabel');
const precioUnitario = document.querySelector('#precioUnitario');
const unidadesPack = document.querySelector('#unidadesPack');
const precioTotal = document.querySelector('#precio-total');  
const cantidadPacks = document.querySelector("#cantidad-packs");
const botonAgregar = document.querySelector("#boton-agregar");
const botonQuitar = document.querySelector("#boton-quitar");

let cantidadDePacks = 1; // Inicializa la cantidad de packs

// botón agregar packs
botonAgregar.addEventListener("click", () => {
  cantidadDePacks++;
  cantidadPacks.textContent = cantidadDePacks; // Actualiza el texto en el botón
  actualizarPrecioTotal(); // Actualiza el precio total
});

// botón quitar packs
botonQuitar.addEventListener("click", () => {
  if (cantidadDePacks > 0) {
    cantidadDePacks--;
    cantidadPacks.textContent = cantidadDePacks; // Actualiza el texto en el botón
    actualizarPrecioTotal(); // Actualiza el precio total
  }
});

// Actualiza el precio total
function actualizarPrecioTotal() {
    const total = productoSeleccionado.precio * cantidadDePacks;
    precioTotal.textContent = `$${total}`;
  }

// Actualiza el modal
function actualizarModal(producto) {
  modalTitle.textContent = producto.nombre;
  precioUnitario.textContent = `$${producto.precio}`;
  unidadesPack.textContent = producto.unidadesPack;
  
  // Actualiza el precio total según la cantidad de packs seleccionados
  actualizarPrecioTotal();
}

































/*
    function renderizarBotonesModal(productosFila1) {
      const botones = document.querySelectorAll('.tarjeta-boton'); // Esto selecciona todos los botones 
      botones.forEach(boton => {
        boton.addEventListener('click', (event) => {
          const idProducto = event.target.getAttribute('data-id'); // Esto captura el ID del producto en cuestion
          const productoSeleccionado = productosFila1.find(producto => producto.id === parseInt(idProducto)); // Esto selecciona el producto requerido en el JSON
          if (productoSeleccionado) {
            actualizarModal(productoSeleccionado); // Esto actualiza el modal con los datos del producto seleccionado
          }
        });
      });
    }
    
    const modalTitle = document.querySelector('#exampleModalLabel');
    const precioUnitario = document.querySelector('#precioUnitario');
    const unidadesPack = document.querySelector('#unidadesPack');
    const precioTotal = document.querySelector('#precio-total');  
    const cantidadPacks = document.querySelector("#cantidad-packs");


function actualizarModal (producto) {
  modalTitle.textContent = producto.nombre; // Actualiza el título del modal
  precioUnitario.textContent = `$${producto.precio}`; // Actualiza el precio unitario
  unidadesPack.textContent = producto.unidadesPack; // Actualiza las unidades por pack
  precioTotal.textContent = `$${producto.precio * producto.cantidadPacks}`; // Calcula y actualiza el precio total
}
 
// Obtén los elementos relevantes
const botonAgregar = document.querySelector("#boton-agregar");
const botonQuitar = document.querySelector("#boton-quitar");

let cantidadDePacks = 0; // Inicializa la cantidad de packs

// Agregar evento al botón de agregar
botonAgregar.addEventListener("click", () => {
  cantidadDePacks++;
  cantidadPacks.textContent = cantidadDePacks; // Actualiza el texto en el botón
  actualizarPrecioTotal(); // Actualiza el precio total
});

// Agregar evento al botón de quitar
botonQuitar.addEventListener("click", () => {
  if (cantidadDePacks > 0) {
    cantidadDePacks--;
    cantidadPacks.textContent = cantidadDePacks; // Actualiza el texto en el botón
    actualizarPrecioTotal(); // Actualiza el precio total
  }
});+
// Función para actualizar el precio total
function actualizarPrecioTotal(producto) {
  // Multiplica el precio unitario por la cantidad de packs seleccionados
  const total = producto.precio * cantidadDePacks;
  precioTotal.textContent = `$${total}`;
}
// Función para actualizar el precio total en el modal
function actualizarModal(producto) {
  modalTitle.textContent = producto.nombre;
  precioUnitario.textContent = `$${producto.precio}`;
  unidadesPack.textContent = producto.unidadesPack;

  // Actualiza el precio total según la cantidad de packs seleccionados
  actualizarPrecioTotal(producto);
}*/