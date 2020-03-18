class Billete {
    constructor(v, c){

        this.valor = v;
        this.cantidad = c;
    }
}

var caja = [];
caja.push(new Billete ( 50, 3));
caja.push(new Billete ( 20, 2));
caja.push(new Billete (10, 2));

var d = document.getElementById("numero"); 
var dinero = d.innerText;
var entregado = [];
var papeles ;


function entregarDinero(){

for (b of caja){


    if (dinero > 0){

var div = Math.floor(dinero / b.valor)
 
if (div > b.cantidad){
papeles = b.cantidad

 }  else {
     papeles = div; 
 }
entregado.push(new Billete (b.valor, papeles))
dinero = dinero - (papeles * b.valor)
    }
    
}
if (dinero > 0) {

    console.log("Lo siento, no tengo esa cantidad de dinero")
} else {
    console.log(entregado)
}


}


var boton = document.getElementById("extraer");

boton.addEventListener("click", dineroEntregado)

function dineroEntregado(){
    entregarDinero()
    console.log(dinero)

    for (var b of entregado){
 var l = document.createElement("LI");
 var t = document.createTextNode (` Billetes: ${b.valor} Cantidad: ${b.cantidad}` )
 l.appendChild(t);
 document.body.append(l);
    }

}