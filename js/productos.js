let productosDiv = document.getElementById("productos")
let carrito = JSON.parse(localStorage.getItem("carrito")) || []

// para mostrar los productos
function mostrarProductos(array) { 
    array.forEach(producto => {
        productosDiv.innerHTML += `
        <div class="card productos__card">
            <img class="tamaño__imagenes" src=${producto.img} alt="Imágen ${producto.name}" />
            <div class="card-body ">
                <p class="card-title">${producto.name}</p>
                <p class="card-text">Precio $${producto.price}</p>
                <button class="btn btn-primary boton agregar" id="${producto.id}">Agregar al carrito</button>
            </div>

        </div>`
    });
}

mostrarProductos(productosLista)

//para filtrar los productos

function filtrar(event) {
    let btn = event.target
    console.log(btn)
    let categoria = btn.innerText
    console.log(categoria)
    let productosFiltrados = productosLista.filter(producto => producto.category === categoria)
    console.log(productosFiltrados)
    productosDiv.innerHTML = ""
    mostrarProductos(productosFiltrados)
}


let btnFiltro = document.getElementsByClassName("filtrar")
console.log(btnFiltro)
for (btn of btnFiltro) {
    btn.addEventListener("click", filtrar)
}

// botón "ver todo"
const mostrarTodo = document.querySelector(".todo")
mostrarTodo.addEventListener("click", () => {
    productosDiv.innerHTML = ""
    mostrarProductos(productosLista)
})

//AGREGAR AL CARRITO 
let botonAgregar = document.getElementsByClassName("agregar")
const divCarrito = document.querySelector("#carrito")
const carritoSection = document.querySelector("#carritoSection")
const vaciar = document.getElementById("vaciar")

function agregarAlCarrito(e) {
    divCarrito.innerHTML = ""
    const boton = e.target;
    const idBoton = boton.getAttribute("id");
    // console.log(idBoton)
    let productoSeleccionado = productosLista.find(producto => producto.id === parseInt(idBoton))
    carrito.push(productoSeleccionado)
    console.log(carrito)

    //storage
    localStorage.setItem("carrito", JSON.stringify(carrito));

    /* alert("Agregaste " + productoSeleccionado.name + " al carrito") */

    mostrarCarrito()
}

for (boton of botonAgregar) {
    boton.addEventListener("click", agregarAlCarrito)
}

//MOSTRAR CARRITO
function mostrarCarrito() {
    divCarrito.innerHTML = "";
    carrito.forEach(producto => {
        divCarrito.innerHTML += `
            <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img class="tamaño__imagenes img-fluid rounded-start" src=${producto.img} alt=${producto.name}>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <p class="card-title">${producto.name}</p>
                            <p class="card-text">Precio $${producto.price}</p>
                            <button class="boton botonBorrar" id="${producto.id}">  X</button>
                        </div>
                    </div>
                </div>
            </div>
        `
    })
    let total = carrito.reduce((acc, curr) => acc + curr.price, 0)
    let totalCompra = document.createElement("h2")
    totalCompra.setAttribute("class", "total")
    totalCompra.innerText = ("Total: " + total)
    divCarrito.append(totalCompra)

    let botonBorrar = document.getElementsByClassName("botonBorrar")
    // console.log(botonBorrar)

    for (botonX of botonBorrar) {
        botonX.addEventListener("click", eliminarProducto)
    }
}
    mostrarCarrito()

    //vaciar carrito
    vaciar.addEventListener("click", () => {
        carrito = []
        localStorage.clear()
        divCarrito.innerHTML = ""
    })

    const terminarCompra = document.getElementById("finalizar")
    terminarCompra.addEventListener("click", ()=>{
        window.location.href="carrito.html"
    })

    /* let terminarCompra = document.createElement("button")
    terminarCompra.setAttribute("class", "terminarCompra")
    terminarCompra.innerHTML=("Finalizar compra")
    divCarrito.append(terminarCompra)

    terminarCompra.addEventListener("click", ()=>{
        window.location.href="carrito.html"
    }) */


carrito.length && mostrarCarrito()


//ELIMINAR PRODUCTO
function eliminarProducto(e) {
    divCarrito.innerHTML = ""
    const botonX = e.target;
    const idBotonX = botonX.getAttribute("id");
    let indexProducto = carrito.findIndex(producto => producto.id === parseInt(idBotonX))
    carrito.splice(indexProducto, 1)
    localStorage.removeItem("carrito")
    localStorage.setItem("carrito", JSON.stringify(carrito))
    mostrarCarrito(carrito)
}