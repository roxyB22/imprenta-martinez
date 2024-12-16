/*Array de objetos(productos)*/
const productos = [
    { 
        id: 1,
        nombre: "nacimiento",
        precio: 800,
        unidadesPack: 15,   
    },
    {
        id: 2,
        nombre: "casamiento",
        precio: 1000,
        unidadesPack: 20,   
    },
    {
        id: 3,
        nombre: "cumpleaño",
        precio: 800,
        unidadesPack: 10,   
    },
    {
        id: 4,
        nombre: "quince",
        precio: 1000,
        unidadesPack: 20,   
    },
    {
        id: 5,
        nombre: "infantil",
        precio: 700,
        unidadesPack: 10,   
    },
]

const boton = document.getElementById("boton1");
const contadorCarrito = document.getElementById("contador-carrito");
const toast = new bootstrap.Toast(document.getElementById("liveToast"));
boton.addEventListener('click', function(){
    let contador = parseInt(contadorCarrito.textContent); //lee el valor actual del contadorCarrito
    contador += 1; // incrementa el valor en +1 cada vez que clickea el botón "agregar"
    contadorCarrito.textContent = contador; // Actualiza el contador en el DOM 
    toast.show();// Mostrar el toast de Bootstrap
});



let botonAgregar = document.getElementById("boton-agregar");
let botonQuitar = document.getElementById("boton-quitar");
let cantidadDePacks = parseInt(document.getElementById("cantidad-packs").textContent); 

botonAgregar.addEventListener('click', function(){
    cantidadDePacks = cantidadDePacks + 1 //incrementa en 1 
    document.getElementById("cantidad-packs").textContent = cantidadDePacks //reemplazo el contenido de "cantidad-Packs" en el html por el número cantidadDePacks
    document.getElementById("precio-total1").textContent = 800*cantidadDePacks //reemplazo el contenido de "precio-total1" en el html por el número 800*cantidadDePacks

});
botonQuitar.addEventListener('click', function(){
    cantidadDePacks = cantidadDePacks - 1 //resta 1
    if(cantidadDePacks>=0){ //es para evitar números negativos
        document.getElementById("cantidad-packs").textContent = cantidadDePacks //reemplazo el contenido de "cantidad-Packs" en el html por el número cantidadDePacks
        document.getElementById("precio-total1").textContent = 800*cantidadDePacks //reemplazo el contenido de "precio-total1" en el html por el número 800*cantidadDePacks
    }
    document.getElementById("precio-total1").textContent = 800 // es para evitar que quede en cero el precio inicial
});

