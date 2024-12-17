
const carrito = JSON.parse(localStorage.getItem("carrito")) ;

// Muestra los productos en el carrito

const mostrarCarrito = ()=> {
    const lista = document.getElementById("lista-carrito")
    lista.innerHTML = "";

    if(carrito.length===0){
        lista.innerHTML = '<p>Tu carrito está vacio</p>';
        actualizarResumen();
        return;
    }
    carrito.forEach((item,indice)=>{
      const producto = document.createElement("article")
      producto.classList.add("producto")
      producto.innerHTML=`
      <h2>${item.nombre}</h2>
      <p class="precio">$${item.precio}</p>
      <button onclick="eliminarDelCarrito(${indice})">Eliminar</button>`;
      lista.appendChild(producto)
    });
    actualizarResumen();
}
// Actualiza el resumen del carrito
const actualizarResumen = () => {
    const totalProductos = document.getElementById("total-productos");
    const importeTotal = document.getElementById("importe-total");

    const total = carrito.reduce((acc, item) => acc + item.precio, 0);
    totalProductos.textContent = carrito.length;
    importeTotal.textContent = total.toFixed(2);

    const botonCompra = document.querySelector("button[onclick='realizarCompra()']");
    const resumenCarrito = document.getElementById("resumen-carrito");
    resumenCarrito.appendChild(botonCompra);
};

//Elimina un producto del carrito
const eliminarDelCarrito=(indice)=>{
    carrito.splice(indice,1);
    localStorage.setItem("carrito",JSON.stringify(carrito))
    mostrarCarrito();
}

// Simule la compra

const realizarCompra =()=>{
    alert("compra realizada con exito")
    localStorage.removeItem("carrito")
    window.location.href="index.html"
}

// inicializar el carrito al carga la pagina
mostrarCarrito()
