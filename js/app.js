const productos = [
  {id:1,nombre:"Figura Naruto Modo Sabio",precio:350,img:"https://picsum.photos/300?1",descripcion:"Figura de colección",categoria:"figuras"},
  {id:2,nombre:"Figura Goku Ultra Instinto",precio:420,img:"https://picsum.photos/300?2",descripcion:"Figura de colección",categoria:"figuras"},
  {id:3,nombre:"Figura Luffy Gear 5",precio:390,img:"https://picsum.photos/300?3",descripcion:"Figura de colección",categoria:"figuras"},
  {id:12,nombre:"Figura Itachi Uchiha",precio:360,img:"https://picsum.photos/300?12",descripcion:"Figura anime",categoria:"figuras"},
  {id:13,nombre:"Figura Levi Ackerman",precio:380,img:"https://picsum.photos/300?13",descripcion:"Figura anime",categoria:"figuras"},
  {id:14,nombre:"Figura Tanjiro Kamado",precio:340,img:"https://picsum.photos/300?14",descripcion:"Figura anime",categoria:"figuras"},
  {id:15,nombre:"Figura Gojo Satoru",precio:410,img:"https://picsum.photos/300?15",descripcion:"Figura anime",categoria:"figuras"},
  {id:16,nombre:"Figura Zoro Enma",precio:395,img:"https://picsum.photos/300?16",descripcion:"Figura anime",categoria:"figuras"},
  {id:17,nombre:"Figura Mikasa Ackerman",precio:355,img:"https://picsum.photos/300?17",descripcion:"Figura anime",categoria:"figuras"},
  {id:18,nombre:"Figura Vegeta Blue",precio:405,img:"https://picsum.photos/300?18",descripcion:"Figura anime",categoria:"figuras"},
  {id:19,nombre:"Figura Kakashi Hatake",precio:365,img:"https://picsum.photos/300?19",descripcion:"Figura anime",categoria:"figuras"},
  {id:20,nombre:"Figura Saitama",precio:330,img:"https://picsum.photos/300?20",descripcion:"Figura anime",categoria:"figuras"},

  {id:21,nombre:"Soporte magnético auto",precio:45,img:"https://picsum.photos/300?21",descripcion:"Accesorio celular",categoria:"gadgets"},
  {id:22,nombre:"Cargador rápido 30W",precio:60,img:"https://picsum.photos/300?22",descripcion:"Carga rápida",categoria:"gadgets"},
  {id:23,nombre:"Cable USB-C reforzado",precio:25,img:"https://picsum.photos/300?23",descripcion:"Alta resistencia",categoria:"gadgets"},
  {id:24,nombre:"Power Bank 20000mAh",precio:120,img:"https://picsum.photos/300?24",descripcion:"Batería portátil",categoria:"gadgets"},
  {id:25,nombre:"Soporte celular escritorio",precio:35,img:"https://picsum.photos/300?25",descripcion:"Soporte ajustable",categoria:"gadgets"},
  {id:26,nombre:"Adaptador USB múltiple",precio:40,img:"https://picsum.photos/300?26",descripcion:"Puertos extra",categoria:"gadgets"},
  {id:27,nombre:"Cargador inalámbrico",precio:95,img:"https://picsum.photos/300?27",descripcion:"Carga sin cables",categoria:"gadgets"},
  {id:28,nombre:"Cable Lightning reforzado",precio:30,img:"https://picsum.photos/300?28",descripcion:"Alta resistencia",categoria:"gadgets"},
  {id:29,nombre:"Trípode flexible celular",precio:55,img:"https://picsum.photos/300?29",descripcion:"Grabación estable",categoria:"gadgets"},
  {id:30,nombre:"Mini aro de luz LED",precio:65,img:"https://picsum.photos/300?30",descripcion:"Iluminación selfie",categoria:"gadgets"},

  {id:31,nombre:"Teclado mecánico RGB",precio:180,img:"https://picsum.photos/300?31",descripcion:"Teclado gamer",categoria:"perifericos"},
  {id:32,nombre:"Mouse gamer 7200dpi",precio:95,img:"https://picsum.photos/300?32",descripcion:"Precisión gamer",categoria:"perifericos"},
  {id:33,nombre:"Audífonos gamer",precio:150,img:"https://picsum.photos/300?33",descripcion:"Sonido envolvente",categoria:"perifericos"},
  {id:34,nombre:"Mousepad RGB",precio:85,img:"https://picsum.photos/300?34",descripcion:"Iluminación gamer",categoria:"perifericos"},
  {id:35,nombre:"Parlantes USB",precio:70,img:"https://picsum.photos/300?35",descripcion:"Sonido claro",categoria:"perifericos"},
  {id:36,nombre:"Webcam HD",precio:140,img:"https://picsum.photos/300?36",descripcion:"Videollamadas nítidas",categoria:"perifericos"},
  {id:37,nombre:"Micrófono USB",precio:160,img:"https://picsum.photos/300?37",descripcion:"Streaming pro",categoria:"perifericos"},
  {id:38,nombre:"Hub USB",precio:50,img:"https://picsum.photos/300?38",descripcion:"Expansión USB",categoria:"perifericos"},
  {id:39,nombre:"Base refrigerante",precio:90,img:"https://picsum.photos/300?39",descripcion:"Enfriamiento eficiente",categoria:"perifericos"},
  {id:40,nombre:"Control gamer",precio:110,img:"https://picsum.photos/300?40",descripcion:"Compatible PC",categoria:"perifericos"},

  {id:41,nombre:"Luz LED escritorio",precio:70,img:"https://picsum.photos/300?41",descripcion:"Iluminación pro",categoria:"extras"},
  {id:42,nombre:"Alfombrilla XL",precio:55,img:"https://picsum.photos/300?42",descripcion:"Superficie amplia",categoria:"extras"},
  {id:43,nombre:"Taza gamer",precio:35,img:"https://picsum.photos/300?43",descripcion:"Mantiene calor",categoria:"extras"},
  {id:44,nombre:"Soporte audífonos",precio:80,img:"https://picsum.photos/300?44",descripcion:"Organización gamer",categoria:"extras"},
  {id:45,nombre:"Reloj digital",precio:60,img:"https://picsum.photos/300?45",descripcion:"Diseño moderno",categoria:"extras"},
  {id:46,nombre:"Lámpara luna",precio:75,img:"https://picsum.photos/300?46",descripcion:"Decoración LED",categoria:"extras"},
  {id:47,nombre:"Organizador cables",precio:30,img:"https://picsum.photos/300?47",descripcion:"Orden total",categoria:"extras"},
  {id:48,nombre:"Ventilador USB",precio:28,img:"https://picsum.photos/300?48",descripcion:"Fresco",categoria:"extras"},
  {id:49,nombre:"Protector teclado",precio:22,img:"https://picsum.photos/300?49",descripcion:"Protección polvo",categoria:"extras"},
  {id:50,nombre:"Kit limpieza",precio:26,img:"https://picsum.photos/300?50",descripcion:"Limpieza segura",categoria:"extras"}
];

// ===== ELEMENTOS =====
const cont = document.getElementById("productos");
const modal = document.getElementById("modal");
const modalImg = document.getElementById("modalImg");
const modalNombre = document.getElementById("modalNombre");
const modalPrecio = document.getElementById("modalPrecio");
const modalDesc = document.getElementById("modalDesc");
const contador = document.getElementById("contador");
const panelCarrito = document.getElementById("panelCarrito");
const listaCarrito = document.getElementById("listaCarrito");

let carrito = {};
let facturaNum = 1;

// ===== RENDER =====
function render(lista = productos){
  cont.innerHTML = "";
  lista.forEach(p => {
    cont.innerHTML += `
      <div class="card">
        <img src="${p.img}" onclick="mostrarInfo(${p.id})">
        <h3>${p.nombre}</h3>
        <p>S/${p.precio}</p>
        <button class="btn cart" onclick="agregarCarrito(${p.id})">Agregar</button>
        <button class="btn buy" onclick="buy('${p.nombre}')">Comprar</button>
        <button class="btn whatsapp" onclick="whatsapp('${p.nombre}')">WhatsApp</button>
      </div>
    `;
  });
}

// ===== CARRITO =====
function agregarCarrito(id){
  const p = productos.find(x => x.id === id);
  if(!p) return;

  carrito[id] ? carrito[id].cantidad++ : carrito[id] = {...p, cantidad:1};
  actualizarCarrito();
}

function actualizarCarrito(){
  listaCarrito.innerHTML = "";

  let total = 0;
  let cantidad = 0;

  Object.values(carrito).forEach(p => {
    let subtotal = p.precio * p.cantidad;

    total += subtotal;
    cantidad += p.cantidad;

    listaCarrito.innerHTML += `
      <div>
        <b>${p.nombre}</b><br>
        <button onclick="cambiarCantidad(${p.id},'restar')">➖</button>
        ${p.cantidad}
        <button onclick="cambiarCantidad(${p.id},'sumar')">➕</button>
        <button onclick="eliminarProducto(${p.id})">❌</button>
        <br>S/${subtotal}
      </div>
      <hr>
    `;
  });

  contador.innerText = cantidad;
  document.getElementById("total").innerText = "Total: S/" + total;
}

// ===== FACTURA =====
function generarFactura(){
  const now = new Date();
  let texto = `🧾 FACTURA N° ${facturaNum}\n📅 ${now.toLocaleDateString()} ${now.toLocaleTimeString()}\n\n`;
  let total = 0;

  Object.values(carrito).forEach((p,i) => {
    let sub = p.precio * p.cantidad;
    total += sub;
    texto += `${i+1}. ${p.nombre} x${p.cantidad} = S/${sub}\n`;
  });

  texto += `\n💰 TOTAL: S/${total}`;
  facturaNum++;
  return texto;
}

// ===== COMPRAR =====
function comprarCarrito(){
  if(Object.keys(carrito).length === 0){
    alert("Carrito vacío");
    return;
  }

  const factura = generarFactura();

  window.open(
    "https://wa.me/51944870752?text=" + encodeURIComponent(factura),
    "_blank"
  );

  carrito = {};
  actualizarCarrito();
}

// ===== OTROS =====
function cambiarCantidad(id, op){
  carrito[id].cantidad += op === "sumar" ? 1 : -1;
  if(carrito[id].cantidad <= 0) delete carrito[id];
  actualizarCarrito();
}

function eliminarProducto(id){
  delete carrito[id];
  actualizarCarrito();
}

function toggleCarrito(){
  panelCarrito.classList.toggle("show");
}

function mostrarInfo(id){
  const p = productos.find(x => x.id === id);
  modal.style.display = "flex";
  modalImg.src = p.img;
  modalNombre.innerText = p.nombre;
  modalPrecio.innerText = "S/" + p.precio;
  modalDesc.innerText = p.descripcion;
}

function cerrarModal(){
  modal.style.display = "none";
}

window.onload = () => render();
window.onclick = e => { if(e.target === modal) cerrarModal(); };
window.comprarCarrito = comprarCarrito;
window.agregarCarrito = agregarCarrito;
window.cambiarCantidad = cambiarCantidad;
window.eliminarProducto = eliminarProducto;
window.toggleCarrito = toggleCarrito;
window.mostrarInfo = mostrarInfo;
window.cerrarModal = cerrarModal;