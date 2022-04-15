const mangas = [
    {
        nombre: "Jujutsu Kaisen",
        cantidad: 6,
        precio: 3750
    },
    {
        nombre: "Made in Abyss",
        cantidad: 10,
        precio: 1000
    },
    {
        nombre: "Blue Lock",
        cantidad: 4,
        precio: 2400
    },
    {
        nombre: "Fire Force",
        cantidad: 2,
        precio: 1250
    }

]

const impuestos = [
    {
        nombre: "IVA", 
        monto: 0.21
    }
]

const descuentos = [
    {
        nombre: "Descuento efectivo 10%", 
        monto: 0.1
    },
    {
        nombre: "Cupon Descuento 20%", 
        monto: 0.2
    }
]

const calcularTotalDescuentos = precioTotal => {
    totalDescuentos = 0;
    for (let i = 0; i <= descuentos.length-1; i++) {
        totalDescuentos += precioTotal * descuentos[i].monto;
        precioTotal -= totalDescuentos; 
    }
    return totalDescuentos;
    
}

const calcularTotalImpuestos = precioTotal => {
    totalImpuestos = 0;
    for (let i = 0; i <= impuestos.length-1; i++) {
        totalImpuestos += precioTotal * impuestos[i].monto;
    }
    return totalImpuestos;
}

function calculaPrecioFinal() {

    precioTotal = 0;

    console.log("--------------------------------------");
    console.log("Mangas");
    console.log("--------------------------------------");
    console.table(mangas);

    console.log("--------------------------------------");
    console.log("Descuentos");
    console.log("--------------------------------------");
    console.table(descuentos);

    console.log("--------------------------------------");
    console.log("Impuestos");
    console.log("--------------------------------------");
    console.table(impuestos);

    for (let i = 0; i <= mangas.length-1; i++) {
        precioTotal += mangas[i].precio * mangas[i].cantidad;
    }

    if(precioTotal != 0){
        precioTotal -= calcularTotalDescuentos(precioTotal);
        precioTotal += calcularTotalImpuestos(precioTotal);
    }

    console.log("--------------------------------------");
    console.log("Precio total: " + precioTotal);
    console.log("--------------------------------------");

    
}