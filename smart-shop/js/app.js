const productos=[];

for(let i=1;i<=30;i++){

productos.push({

id:i,
nombre:"Producto "+i,
precio:100+i*10,
img:`https://picsum.photos/300/300?${i}`,
descripcion:"Edición especial Dragon Store"

});

}

const cont=document.getElementById("productos");

let carrito=[];

function render(lista=productos){

cont.innerHTML="";

lista.forEach(p=>{

cont.innerHTML+=`

<div class="card">

<img src="${p.img}"
onclick="mostrarInfo(${p.id})">

<h3>${p.nombre}</h3>

<p>S/${p.precio}</p>

<button
class="btn cart"
onclick="agregarCarrito(${p.id})">

Agregar

</button>

<button
class="btn buy"
onclick="buy('${p.nombre}',${p.precio})">

Comprar

</button>

<button
class="btn whatsapp"
onclick="whatsapp('${p.nombre}',${p.precio})">

WhatsApp

</button>

</div>

`;

});

}

function buscarProductos(){

let texto=
document
.getElementById("buscar")
.value
.toLowerCase();

let filtrados=
productos.filter(p=>

p.nombre
.toLowerCase()
.includes(texto)

);

render(filtrados);

}

function mostrarInfo(id){

let p=
productos.find(x=>x.id===id);

modal.style.display="flex";

modalImg.src=p.img;

modalNombre.innerText=
p.nombre;

modalPrecio.innerText=
"Precio: S/"+p.precio;

modalDesc.innerText=
p.descripcion;

}

function cerrarModal(){

modal.style.display="none";

}

function agregarCarrito(id){

let p=
productos.find(x=>x.id===id);

carrito.push(p);

contador.innerText=
carrito.length;

actualizarCarrito();

}

function actualizarCarrito(){

listaCarrito.innerHTML="";

let suma=0;

carrito.forEach(p=>{

suma += p.precio;

listaCarrito.innerHTML +=

`<p>${p.nombre} - S/${p.precio}</p>`;

});

document
.getElementById("total")
.innerText=

"Total: S/"+suma;

}

function toggleCarrito(){

panelCarrito.style.display=

panelCarrito.style.display==="block"

? "none"

: "block";

}

function whatsapp(nombre){

window.open(

`https://wa.me/51944870752?text=Hola quiero comprar ${nombre}`

);

}

function buy(nombre){

window.open(

`https://wa.me/51944870752?text=Compra directa ${nombre}`

);

}

/* BOTÓN COMPRAR SELECCIONADOS */

function comprarCarrito(){

if(carrito.length===0){

alert(
"Tu carrito está vacío"
);

return;

}

let mensaje=

"🛒 Nuevo pedido DRAGON'S STORE\n\n";

let total=0;

carrito.forEach(

(p,index)=>{

mensaje +=

(index+1)+
". "+p.nombre+"\n";

mensaje +=

"Precio: S/"+
p.precio+"\n\n";

total +=
p.precio;

}

);

mensaje +=

"💰 Total: S/"+
total;

let texto=

encodeURIComponent(
mensaje
);

window.open(

"https://wa.me/51944870752?text="+texto,

"_blank"

);

}

particlesJS(

"particles-js",

{

particles:{

number:{
value:60
},

color:{
value:"#3b82f6"
},

shape:{
type:"circle"
},

size:{
value:3
},

move:{

enable:true,

speed:2

}

}

}

);

render();