let cantidadProductos: number = Number(
  prompt("Ingrese la cantidad de productos")
);

let cantidad: number[] = new Array(cantidadProductos);
let productos: string[] = new Array(cantidadProductos);
let precioUnitario: number[] = new Array(cantidadProductos);
let cantidadPorUnidad: number[] = new Array(cantidadProductos);

function compras(
  precios: number[],
  productos: string[],
  dimension: number[]
): any {
  let sumaTotal: number = 0;
  let texto: string = " ";
  let i: number;
  for (i = 0; i < cantidadProductos; i++) {
    productos[i] = String(prompt("ingrese el producto"));
    cantidadPorUnidad[i] = Number(prompt("Ingrese la cantidad del producto"));
    precioUnitario[i] = Number(prompt("Ingrese el precio del producto"));

    texto = `Compraste ${cantidadPorUnidad[i]} de ${productos[i]}`;

    console.log(texto);
    console.log("El precio del producto es: $" + precioUnitario[i]);

    precioUnitario[i] *= cantidadPorUnidad[i];
    sumaTotal += precioUnitario[i];

    console.log("El precio del producto total es: $" + precioUnitario[i]);
  }
  console.log("El precio total es: $" + sumaTotal);
  if (sumaTotal >= 1000 && sumaTotal < 2000) {
    console.log("Usted esta participando por un TV Led!");
  } else if (sumaTotal >= 2000 && sumaTotal < 3000) {
    console.log("Usted esta participando por una moto 0 KM!");
  } else if (sumaTotal >= 3000) {
    console.log("Usted esta participando por un auto 0 KM!");
  }
}

compras(precioUnitario, productos, cantidad);
