

const productos = [
    {
        id:1,
        nombre: "casco",
        precio: 30000,
        cantidad: 0
    },
    {
        id:2,
        nombre: "campera",
        precio: 25000,
        cantidad:0
    },
    {
        id:3,
        nombre: "guantes",
        precio: 8000,
        cantidad:0
    },
]
let total = 0
let productsContainer = document.getElementById("products-container")

function renderProductos(productos){
    productos.forEach(producto => {
        const card =document.createElement("div")
        card.innerHTML =`<h3>${producto.nombre}</h3>
                        <p>${producto.precio}
                        <button id="plus-${producto.nombre}">+</button>
                        <span id="counter-${producto.nombre}">0</span>
                        <button id="minus-${producto.nombre}">-</button>
                        <p id="subtotal-${producto.nombre}"> 0
                        `
        productsContainer.appendChild(card)
        });
}
renderProductos(productos)
let sumarCampera = document.getElementById("plus-campera")
let restarCampera= document.getElementById("minus-campera")
let counterCampera = document.getElementById("counter-campera")
let subtotalCampera = document.getElementById("subtotal-campera")
let contadorCampera = 0


sumarCampera.onclick = () =>{
    contadorCampera++
    counterCampera.innerHTML = contadorCampera
    restarCampera.disabled = false
    subtotalCampera.innerHTML = contadorCampera * productos[1].precio
    productos[1].cantidad = contadorCampera
    total =  productos[0].cantidad * productos[0].precio + productos[1].cantidad * productos[1].precio + productos[2].cantidad * productos[2].precio
    totalEle.innerHTML =`<h2>"Total ${total}"</h3>`
 }
 restarCampera.onclick = () =>{
    if(contadorCampera === 0) {
        restarCampera.disabled = true
    }else{
        contadorCampera--
        counterCampera.innerHTML = contadorCampera
        subtotalCampera.innerHTML = contadorCampera * productos[1].precio
        productos[1].cantidad = contadorCampera
        total =  productos[0].cantidad * productos[0].precio + productos[1].cantidad * productos[1].precio + productos[2].cantidad * productos[2].precio
        totalEle.innerHTML =`<h2>"Total ${total}"</h3>`
    }
 }

let sumarCasco = document.getElementById("plus-casco")
let restarCasco = document.getElementById("minus-casco")
let counterCasco = document.getElementById("counter-casco")
let contadorCasco = 0
let subtotalCasco = document.getElementById("subtotal-casco")

 sumarCasco.onclick = () =>{
    contadorCasco++
    counterCasco.innerHTML = contadorCasco
    restarCasco.disabled = false
    subtotalCasco.innerHTML = contadorCasco * productos[0].precio
    productos[0].cantidad = contadorCasco
    total =  productos[0].cantidad * productos[0].precio + productos[1].cantidad * productos[1].precio + productos[2].cantidad * productos[2].precio
    totalEle.innerHTML =`<h2>"Total ${total}"</h3>`
 }
 restarCasco.onclick = () =>{
    if(contadorCasco === 0) {
        restarCasco.disabled = true
    }else{
        contadorCasco--
        counterCasco.innerHTML = contadorCasco
        subtotalCasco.innerHTML = contadorCasco * productos[0].precio
        productos[0].cantidad = contadorCasco
        total =  productos[0].cantidad * productos[0].precio + productos[1].cantidad * productos[1].precio + productos[2].cantidad * productos[2].precio
        totalEle.innerHTML =`<h2>"Total ${total}"</h3>`
    }
 }

let sumarGuantes = document.getElementById("plus-guantes")
let restarGuantes = document.getElementById("minus-guantes")
let counterGuantes = document.getElementById("counter-guantes")
let contadorGuantes = 0
let subtotalGuantes = document.getElementById("subtotal-guantes")

 sumarGuantes.onclick = () =>{
    contadorGuantes++
    counterGuantes.innerHTML = contadorGuantes
    restarGuantes.disabled = false
    subtotalGuantes.innerHTML = contadorGuantes * productos[2].precio
    productos[2].cantidad = contadorGuantes
    total =  productos[0].cantidad * productos[0].precio + productos[1].cantidad * productos[1].precio + productos[2].cantidad * productos[2].precio
    totalEle.innerHTML =`<h2>"Total ${total}"</h3>`
 }
 restarGuantes.onclick = () =>{
    if(contadorGuantes === 0) {
        restarGuantes.disabled = true
    }else{
        contadorGuantes--
        counterGuantes.innerHTML = contadorGuantes
        subtotalGuantes.innerHTML = contadorGuantes * productos[2].precio
        productos[2].cantidad = contadorGuantes
        total =  productos[0].cantidad * productos[0].precio + productos[1].cantidad * productos[1].precio + productos[2].cantidad * productos[2].precio
        totalEle.innerHTML =`<h2>"Total ${total}"</h3>`
    }
    
 }

 total =  productos[0].cantidad * productos[0].precio + productos[1].cantidad * productos[1].precio + productos[2].cantidad * productos[2].precio
 let totalEle =document.createElement("div")
 totalEle.innerHTML =`<h2>"Total ${total}"</h3>
                 `
 productsContainer.appendChild(totalEle)

 let confirmar =document.createElement("div")
 confirmar.innerHTML = `<button id="confirmarBoton" >confirmar pedido</button>`
 productsContainer.appendChild(confirmar) 
 let confirmarPedido = document.getElementById("confirmarBoton")
 confirmarPedido.onclick = () =>{
    localStorage.setItem('productos', JSON.stringify(productos));
 }
