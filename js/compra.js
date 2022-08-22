let carrito2 = JSON.parse(localStorage.getItem("carrito")) || []
const compraFinal = document.querySelector("#carritoCompras")

function productosCarrito() {
    carrito2.map(producto => {
        compraFinal.innerHTML += `
        <div class="card mb-3" style="max-width: 540px;">
                <div class="row g-0">
                    <div class="col-md-4">
                        <img class="tamaño__imagenes img-fluid rounded-start" src=${producto.img} alt=${producto.name}>
                    </div>
                    <div class="col-md-8">
                        <div class="card-body">
                            <p class="card-title">${producto.name}</p>
                            <p class="card-text">Precio $${producto.price}</p>
                            
                        </div>
                    </div>
                </div>
            </div>
        `
    })
}


carrito2.length ? productosCarrito() : (compraFinal.innerHTML=`<p>Ningún producto ha sido agregado al carrito.</p>`)

