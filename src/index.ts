let mes: string = document.getElementById("mes");
let precio: string = document.getElementById("precio");
let cantidad: string = document.getElementById("cantidad");
let btn = document.getElementById("btn");

btn.addEventListener("click", () => {
  let prec: number = Number(precio.value);
  let cant: number = Number(cantidad.value);
  let precioFinal: number = prec * cant;
  let descuento: number = (precioFinal * 15) / 100;
  let precioDescuento: number = precioFinal - descuento;
  let mess: string = mes.value;
  if (mess === "octubre") {
    console.log("el precio por comprar en octubre es", precioDescuento);
  } else {
    console.log("el precio sin descuento es ", precioFinal);
  }
});
