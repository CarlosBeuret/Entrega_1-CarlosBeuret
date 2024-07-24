let casco = 0;
let guantes = 0;
let camperas = 0;
let eleccion = "";
let confirmacion = true;
let nombre = prompt("Bienvenido! Ingresa tu nombre por favor.");
let correo = prompt("Ingresa tu correo electrónico"); 
const precio_casco = 100;
const precio_campera = 50;
const precio_guantes = 20;

function calcular_precio(casco,guantes,camperas){
    let compra_productos = [];
    compra_productos[0] = Number(casco)* precio_casco;
    compra_productos[1] = Number(guantes) * precio_guantes;
    compra_productos[2] = Number(camperas)* precio_campera;
    return compra_productos;
}

while(confirmacion === true){
    eleccion = prompt(nombre + " si deseas comprar un casco presiona 1, si deseas comprar guantes presiona 2 y deseas comprar una campera presiona 3.");
    console.log(eleccion);
    switch(eleccion){
        case("1"):  
            casco =  prompt("¿cuantos cascos deseas comprar?");
            break;
        case("2"):
            guantes = prompt("¿cuantos guantes deseas comprar?");
            break;
        case("3"):
            camperas = prompt("¿cuantos camperas deseas comprar?");
            break;
        default:
            alert("No ingresaste un valor valido.");
            break;
    }
    let compra_productos = calcular_precio(casco,guantes,camperas);
    let valor_total = compra_productos[0]+compra_productos[1]+compra_productos[2];
    confirmacion = confirm("Usted desea comprar " + casco +" cascos, " + guantes +" guantes y " + camperas +" camperas. El valor total de tu compra es $" + valor_total + " ¿Desea agregar algo mas al carrito?");
}
alert("Muchas gracias por su compra. Enviamos el detalle del pedido a " + correo);
