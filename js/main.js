// Pre-entrega 1 :

let costoInternacion = 0;
let costoCuidado = 0;
let costoTransporte = 0;
let noches = 0;
let diasCuidado = 0;
let tipoTransporte = "No seleccionado";
let nombrePaciente;

function saludar() {
  let nombreValido = false;
  alert("¡Bienvenido/a al servicio de Internación del Hospital M. Quiroga!");
  while (!nombreValido) {
    nombrePaciente = prompt("Por favor, ingrese su nombre y apellido:");
    if (nombrePaciente !== "" && nombrePaciente !== null) {
      console.log("Nombre del Paciente: " + nombrePaciente);
      nombreValido = true;
    } else {
      alert("Por favor, ingrese su nombre y apellido correctamente.");
    }
  }
  return nombrePaciente;
}

//console.log("Nombre del Paciente fuera de la funcion: " + nombrePaciente);

function internacionHospitalaria() {
  let valido = false;
  while (!valido) {
    noches = prompt(
      "Ingrese el número de noches de internación en el hospital, siendo 4 el mínimo y 8 el máximo:"
    );

    console.log("Noches elegidas por el paciente antes del switch: " + noches);

    switch (noches) {
      case "4":
        costoInternacion = 350;
        valido = true;
        console.log("costo internacion 4 en el switch: $" + costoInternacion);
        break;
      case "5":
        costoInternacion = 450;
        valido = true;
        console.log("costo internacion 5 en el switch: $" + costoInternacion);
        break;
      case "6":
        costoInternacion = 550;
        valido = true;
        console.log("costo internacion 6 en el switch: $" + costoInternacion);
        break;
      case "7":
        costoInternacion = 650;
        valido = true;
        console.log("costo internacion 7 en el switch: $" + costoInternacion);
        break;
      case "8":
        costoInternacion = 750;
        valido = true;
        console.log("costo internacion 8 en el switch: $" + costoInternacion);
        break;
      default:
        alert(
          "El número de noches ingresado no es válido.\n\nPor favor, vuelva a ingresar una cantidad de noches correcta."
        );
        break;
    }

    if (valido && costoInternacion > 0) {
      alert(
        "Seleccionaste " +
          noches +
          " noches de internación en el hospital, el precio es de: $" +
          costoInternacion
      );
    } else {
      noches = 0;
      costoInternacion = 0;
    }
  }
  alert(
    "Si desea seleccionar otra cantidad de noches, vuelva a ingresar a ésta sección desde el menú"
  );

  return { noches, costoInternacion };
}

//console.log("Noches fuera de la funcion: " + noches);
//console.log("costo internacion fuera de la funcion: " + costoInternacion);

function cuidadosMedicos() {
  let valido = false;
  while (!valido) {
    diasCuidado = prompt(
      "Ingrese la cantidad de días de cuidados médicos requeridos (de 5 a 8 días):"
    );
    console.log(
      "Dias elegidos por el paciente antes del switch: " + diasCuidado
    );
    switch (diasCuidado) {
      case "5":
        costoCuidado = 400;
        valido = true;
        console.log("costo cuidado 5 en el switch: $" + costoCuidado);
        break;
      case "6":
        costoCuidado = 450;
        valido = true;
        console.log("costo cuidado 6 en el switch: $" + costoCuidado);
        break;
      case "7":
        costoCuidado = 500;
        valido = true;
        console.log("costo cuidado 7 en el switch: $" + costoCuidado);
        break;
      case "8":
        costoCuidado = 550;
        valido = true;
        console.log("costo cuidado 8 en el switch: $" + costoCuidado);
        break;
      default:
        alert(
          "La cantidad de días ingresada para cuidados médicos no es válida.\n\nPor favor, vuelva a ingresar una cantidad de días correcta."
        );
        break;
    }

    if (valido && costoCuidado > 0) {
      alert(
        "Seleccionaste " +
          diasCuidado +
          " dias de cuidados medicos, el precio es de: $" +
          costoCuidado
      );
    }
  }
  alert(
    "Si desea seleccionar otra cantidad de días de cuidados médicos, vuelva a ingresar a ésta sección desde el menú"
  );

  return { diasCuidado, costoCuidado };
}

//console.log("Dias cuidado fuera de la funcion: " + diasCuidado);
//console.log("costo cuidado fuera de la funcion: " + costoCuidado);

function transporteHospital() {
  let valido = false;
  while (!valido) {
    tipoTransporte = prompt(
      "Ingrese el tipo de transporte para llegar al hospital : \n\n 1-Coche Exclusivo \n\n 2-Ambulancia \n\n 3-Transporte público"
    );
    console.log("tipo transporte antes del switch: " + tipoTransporte);
    switch (tipoTransporte) {
      case "1":
        costoTransporte = 80;
        tipoTransporte = "Coche Exclusivo";
        valido = true;
        console.log("transporte coche en el switch: $" + costoTransporte);
        break;
      case "2":
        costoTransporte = 60;
        tipoTransporte = "Ambulancia";
        valido = true;
        console.log("transporte ambulancia en el switch: $" + costoTransporte);
        break;
      case "3":
        costoTransporte = 20;
        tipoTransporte = "Transporte Publico";
        valido = true;
        console.log("transporte publico en el switch: $" + costoTransporte);
        break;
      default:
        alert(
          "El tipo de transporte ingresado no es válido.\n\nPor favor, vuelva a ingresar un tipo de transporte correcto."
        );
        break;
    }

    if (valido && costoTransporte > 0) {
      alert(
        "Seleccionaste " +
          tipoTransporte +
          " de transporte para llegar al hospital, el precio es de: $" +
          costoTransporte
      );
    }
  }

  alert(
    "Si desea seleccionar otro transporte para llegar al hospital, vuelva a ingresar a ésta sección desde el menú"
  );

  return { tipoTransporte, costoTransporte };
}

//console.log("Tipo transporte fuera de la funcion: " + tipoTransporte);
//console.log("costo transporte fuera de la funcion: " + costoTransporte);

function calcularPresupuesto() {
  let sumaTotal = costoInternacion + costoCuidado + costoTransporte;
  console.log("Costo total estimado para la internación: $" + sumaTotal);
  alert(
    "Sr/a " +
      nombrePaciente +
      ", su costo total estimado para la internación es: \n\n- Estadía en el hospital: " +
      noches +
      " noches - $" +
      costoInternacion +
      "\n\n- Cuidados médicos: " +
      diasCuidado +
      " días - $" +
      costoCuidado +
      "\n\n- Transporte: " +
      tipoTransporte +
      " - $" +
      costoTransporte +
      "\n\nPresupuesto final: $" +
      sumaTotal
  );
}

function ejecutarSimulador() {
  saludar();
  let opcion;
  while (opcion !== "5") {
    opcion = prompt(
      "Sr/a " +
        nombrePaciente +
        ", bienvenido/a al menú del Hospital Privado M. Quiroga.\nPor favor, seleccione una opción:\n\n1. Internación Hospitalaria\n2. Cuidados Médicos\n3. Transporte al Hospital\n4. Calcular Presupuesto de Internación\n5. Salir"
    );
    switch (opcion) {
      case "1":
        internacionHospitalaria();
        break;
      case "2":
        cuidadosMedicos();
        break;
      case "3":
        transporteHospital();
        break;
      case "4":
        calcularPresupuesto();
        break;
      case "5":
        alert(
          "¡Gracias por utilizar el servicio de Internación del Hospital M. Quiroga!"
        );
        break;
      default:
        alert("Opción inválida. Por favor, seleccione nuevamente.");
        break;
    }
  }
}

ejecutarSimulador();

// Pre-entrega 2 :

// Array de productos y servicios
const serviciosArray = [
  {
    nombre: "Internacion",
    descripcion: "Estadia en el hospital por 4 noches",
    precio: 350,
  },
  {
    nombre: "Internacion",
    descripcion: "Estadia en el hospital por 5 noches",
    precio: 450,
  },
  {
    nombre: "Internacion",
    descripcion: "Estadia en el hospital por 6 noches",
    precio: 550,
  },
  {
    nombre: "Internacion",
    descripcion: "Estadia en el hospital por 7 noches",
    precio: 650,
  },
  {
    nombre: "Internacion",
    descripcion: "Estadia en el hospital por 8 noches",
    precio: 750,
  },
  {
    nombre: "Cuidados Médicos",
    descripcion: "Costo por 5 dias de cuidados medicos",
    precio: 400,
  },
  {
    nombre: "Cuidados Médicos",
    descripcion: "Costo por 6 dias de cuidados medicos",
    precio: 450,
  },
  {
    nombre: "Cuidados Médicos",
    descripcion: "Costo por 7 dias de cuidados medicos",
    precio: 500,
  },
  {
    nombre: "Cuidados Médicos",
    descripcion: "Costo por 8 dias de cuidados medicos",
    precio: 550,
  },
  {
    nombre: "Transporte",
    descripcion: "Costo del transporte Coche Exclusivo al hospital",
    precio: 80,
  },
  {
    nombre: "Transporte",
    descripcion: "Costo del transporte Ambulancia al hospital",
    precio: 60,
  },
  {
    nombre: "Transporte",
    descripcion: "Costo del transporte Transporte Publico al hospital",
    precio: 20,
  },
];
console.log(serviciosArray);

// Función para buscar un servicio por nombre, solamente mostrará el primer servicio que coincida
function buscarServicioPorNombre(arr, servicio) {
  return arr.find((el) => el.nombre.includes(servicio));
}

// Función para buscar y filtrar un servicio por nombre, mostrará todos los servicios que coincidan
function buscarServicioPorNombre2(arr, servicio) {
  return arr.filter((el) => el.nombre.includes(servicio));
}

// Función para buscar y filtrar servicios por precio hasta un maximo deseado
function filtrarServiciosPorPrecio(arr, maxPrecio) {
  return arr.filter((el) => el.precio <= maxPrecio);
}

let buscar = buscarServicioPorNombre(serviciosArray, "Internacion");
console.log(buscar);
let buscar2 = buscarServicioPorNombre2(serviciosArray, "Int");
console.log(buscar2);

let filtrar1 = filtrarServiciosPorPrecio(serviciosArray, 400);
let filtrar2 = filtrarServiciosPorPrecio(serviciosArray, 20);
console.log(filtrar1);
console.log(filtrar2);

// Función para aumentar el costo del transporte de tipo coche exclusivo
function aplicarAumento(arr) {
  return arr.map((transporteAumentado) => {
    if (transporteAumentado.descripcion.includes("Coche Exclusivo")) {
      transporteAumentado.precio *= 2;
    }
    return transporteAumentado;
  });
}

const transporteConAumento = aplicarAumento(serviciosArray);
console.log(transporteConAumento);

//Descuento del 10% en Ambulancia
function aplicarDescuento(arr) {
  return arr.map((transporteDescuento) => {
    if (transporteDescuento.descripcion.includes("Ambulancia")) {
      transporteDescuento.precio *= 0.9; // Aplica un descuento del 10%
    }
    return transporteDescuento;
  });
}

const transporteConDescuento = aplicarDescuento(serviciosArray);
console.log(transporteConDescuento);

// Clase Servicio para agregar nuevos servicios al array original
class Servicio {
  constructor(nombre, descripcion, precio) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
  }
}

Servicio.agregarServicio = function (nombre, descripcion, precio) {
  serviciosArray.push(new Servicio(nombre, descripcion, precio));
};

// Ejemplo de uso de la clase Servicio para agregar un nuevo servicio
Servicio.agregarServicio("Terapia Física", "Una sesión de terapia física", 120);
Servicio.agregarServicio(
  "Terapia Física",
  "Dos sesiones de terapia física",
  200
);
console.log(serviciosArray);

// Método Math para calcular el precio total de los servicios incluyendo los servicios agregados, descuentos y aumentos
const precioTotal = Math.round(
  serviciosArray.reduce((total, servicio) => total + servicio.precio, 0)
);
console.log(
  `El precio total de los servicios (incluyendo nuevos servicios, aumento al Coche exclusivo y descuento a la Ambulancia) es: $${precioTotal}`
);
