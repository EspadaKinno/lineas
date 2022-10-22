let texto = document.getElementById("text_value");
let boton = document.getElementById("botoncito");
boton.addEventListener("click", conjunto);

let d = document.getElementById("dibujito");
let lienzo = d.getContext("2d");
let ancho = d.width;
let refresh = document.getElementById('refresh'); refresh.addEventListener('click', _ => { location.reload(); })


function conjunto() {
    let lineas = parseInt(texto.value);   
    let espacio = ancho / lineas; 
    let l = 0;
    let yi, xf;
    let textoTrans = texto.value;

   while(l < lineas){
    yi = espacio * l;
    xf = espacio * (l + 1);
    dibujar("red", 0, yi, xf, 300);
    l = l + 1;
 }
 
 if (textoTrans == lineas) {
 }else{
   alert("Escribe un número")
 }
}
function dibujar(color, xinicial, yinicial, xfinal, yfinal) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xinicial, yinicial);
    lienzo.lineTo(xfinal, yfinal);
    lienzo.stroke();
    lienzo.closePath()
}

