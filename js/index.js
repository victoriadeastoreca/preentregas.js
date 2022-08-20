
//CARRITO
/* let carrito = []

const clickButton = document.querySelectorAll(".btnAgregar");
console.log(clickButton)

clickButton.forEach(btn =>{
    btn.addEventListener("click",addItem);
})


function addItem(event){
    const button = event.target 
    console.log(button)
    const objetoElegido = products.find((product) => product.id == button.id);
    carrito.push(objetoElegido);
    let total = carrito.reduce((acumulador, itemActual) => acumulador += itemActual.price, 0);
    console.log(carrito)
    console.log(total)
    const mostrar = document.getElementById('result')

    mostrar.innerHTML = `<h3>El precio total es: ${total} </h3>`
} */


























































// IDEA: preguntarle al usuario los productos que le gustaría ver (collar, aros, body chain, carteras). Decirle si están disponibles. 

/* const nombre = prompt("Ingrese su nombre, por favor");
console.log(nombre)

const productoElegido = prompt(`¡Hola ${nombre}! Bienvenido a la tienda online de Lulu´s. ¿Qué producto le gustaría ver? Tenemos desde collares y aros, hasta carteras`)
console.log(productoElegido)

let collares = [ 
    {nombre: "Choker basic white", disponibilidad: "disponible"},
    {nombre: "Choker AIRE", disponibilidad: "disponible"},
    {nombre: "Choker DAISY", disponibilidad: "disponible"},
    {nombre: "Choker DUALITY", disponibilidad: "disponible"},
    {nombre: "Choker JUPITER", disponibilidad: "no disponible"},
    {nombre: "Choker MAUI", disponibilidad: "disponible"},
    {nombre: "Collar BUTTERFLY", disponibilidad: "no disponible"},
    {nombre: "Collar BUBBLE", disponibilidad: "disponible"},
    {nombre: "Collar DAISY pastel", disponibilidad: "no disponible"}
]
let aros = [ 
    {nombre: "Aros iris", disponibilidad: "disponible"},
    {nombre: "Aros MOON", disponibilidad: "disponible"},
    {nombre: "Aros DAISY", disponibilidad: "no disponible"}
]

function catalogo (){
    if (productoElegido == "collar"){
        const productosDisponibles = collares.filter((elemento) => {
            return elemento.disponibilidad === "disponible"
        })
        console.log(productosDisponibles)
    } else if (productoElegido == "aros"){
        const productosDisponibles = aros.filter((elemento) => {
            return elemento.disponibilidad === "disponible"
        })
        console.log(productosDisponibles)
    } else if (productoElegido == "cartera"){
        alert ("El producto ingresado solo se trabaja por encargo. Si está interesado en pedir uno, por favor contáctese a través de nuestro instagram: @lulusba")
    } else {
        alert ("Lo sentimos, pero el producto ingresado no está disponible o no es válido. Por favor, intente de nuevo.")
    }
}
catalogo (productoElegido) */