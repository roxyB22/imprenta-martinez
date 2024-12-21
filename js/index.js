/*Cards dinamicas del json*/

const contenedorFila1 = document.querySelector(".fila-1");// acá quiero que estén las cards de la fila-1

fetch('./data/productos-fila1.json') //solicitud al archivo json para cargarlo
  .then(response => response.json()) // Convierte la respuesta en formato json
  .then(data => {
    renderizarProductosFila1(data); // renderizar: leer datos y convertirlos dinámicamente a HTML
  })

  function renderizarProductosFila1(productosFila1) {
    productosFila1.forEach((producto) => {
      const cardHTML = `
        <div class="card tarjeta" style="width: 18rem;">
          <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
          <div class="card-body tarjeta-cuerpo text-center">
            <h5 class="card-title">${producto.nombre}</h5>
            
            <p class="card-text">Papel fotógrafico premium, ultra blanco, 300gr.</p>
            <button type="button" class="btn tarjeta-boton" data-bs-toggle="modal" data-bs-target="#tarjetaModal${producto.id}">
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
      renderizarProductosFila2(data); // renderizar: leer datos y convertirlos dinámicamente a HTML
    })
  
    function renderizarProductosFila2(productosFila2Centro) {
      productosFila2Centro.forEach((producto) => {
        const cardHTML = `
          <div class="card tarjeta" style="width: 18rem;">
            <img src="${producto.imagen}" class="card-img-top" alt="${producto.nombre}">
            <div class="card-body tarjeta-cuerpo text-center">
              <h5 class="card-title">${producto.nombre}</h5>
              <p class="card-text">Papel fotógrafico premium, ultra blanco, 300gr.</p>
              <button type="button" class="btn tarjeta-boton" data-bs-toggle="modal" data-bs-target="#tarjetaModal${producto.id}">
                ¡La quiero!
              </button>
            </div>
          </div>
        `; //esta es la card de la fila2 dinámicamente generada
      
        contenedorFila2Centro.innerHTML += cardHTML; //acá inserto los datos en el html
      });
    }
  
  









/*Card 1*/
/*botones + y - y precio total*/

let botonAgregar = document.getElementById("boton-agregar");
let botonQuitar = document.getElementById("boton-quitar");
let cantidadDePacks = parseInt(document.getElementById("cantidad-packs").textContent); 
botonAgregar.addEventListener('click', function(){
    cantidadDePacks = cantidadDePacks + 1 //incrementa en 1 
    
    document.getElementById("cantidad-packs").textContent = cantidadDePacks //reemplazo el contenido de "cantidad-Packs" en el html por el número cantidadDePacks
    document.getElementById("precio-total").textContent = 800*cantidadDePacks //reemplazo el contenido de "precio-total1" en el html por el número 800*cantidadDePacks
});
botonQuitar.addEventListener('click', function(){
    cantidadDePacks = cantidadDePacks - 1 //resta 1
    if(cantidadDePacks>=0){ //es para evitar números negativos
        document.getElementById("cantidad-packs").textContent = cantidadDePacks //reemplazo el contenido de "cantidad-Packs" en el html por el número cantidadDePacks
        document.getElementById("precio-total").textContent = 800*cantidadDePacks //reemplazo el contenido de "precio-total1" en el html por el número 800*cantidadDePacks
    }
    document.getElementById("precio-total").textContent = 800 // es para evitar que quede en cero el precio inicial
});




/*boton contador de productos en el icono del carrito*/
const botonAgregarCarrito = document.getElementById("boton-agregar-carrito");
const contadorCarrito = document.getElementById("contador-carrito");
const toast = new bootstrap.Toast(document.getElementById("liveToast"));
botonAgregarCarrito.addEventListener('click', function(){
    let totalCarrito = parseInt(contadorCarrito.textContent); //lee el valor actual del contadorCarrito
    totalCarrito = cantidadDePacks  //suma todos los packs de todas las tarjetas elegidas.
    contadorCarrito.textContent = totalCarrito; // Actualiza el contador en el DOM 
    toast.show();// Mostrar el toast de Bootstrap
});





