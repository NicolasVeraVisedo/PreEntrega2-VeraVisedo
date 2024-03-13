//Declaración de Clases Constructoras

class Servicio {
  constructor(nombre, descripcion, precio) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.precio = precio;
  }
}

//Declaración de variables
let serviciosArray = [];
let costoInternacion = 0;
let costoCuidado = 0;
let costoTransporte = 0;
let noches = 0;
let diasCuidado = 0;
let tipoTransporte = "No seleccionado";
let nombrePaciente;
let msj;
let descuentoAplicado = false; // Bandera para indicar si el descuento de la Ambulancia ya se aplicó

// Creación de los objetos Servicio y almacenamiento en el array servicios
serviciosArray.push(
  new Servicio("Internacion", "4 noches de internacion", 350)
);
serviciosArray.push(
  new Servicio("Internacion", "5 noches de internacion", 450)
);
serviciosArray.push(
  new Servicio("Internacion", "6 noches de internacion", 550)
);
serviciosArray.push(
  new Servicio("Internacion", "7 noches de internacion", 650)
);
serviciosArray.push(
  new Servicio("Internacion", "8 noches de internacion", 750)
);
serviciosArray.push(
  new Servicio("Cuidados medicos", "5 dias de cuidados medicos", 400)
);
serviciosArray.push(
  new Servicio("Cuidados medicos", "6 dias de cuidados medicos", 450)
);
serviciosArray.push(
  new Servicio("Cuidados medicos", "7 dias de cuidados medicos", 500)
);
serviciosArray.push(
  new Servicio("Cuidados medicos", "8 dias de cuidados medicos", 550)
);
serviciosArray.push(
  new Servicio(
    "Transporte",
    "Transporte Coche Exclusivo para traslado al hospital",
    80
  )
);
serviciosArray.push(
  new Servicio(
    "Transporte",
    "Transporte Ambulancia para traslado al hospital",
    60
  )
);
serviciosArray.push(
  new Servicio("Transporte", "Transporte Publico para traslado al hospital", 20)
);

console.log(serviciosArray);

//Funcion para mostrar un mensaje al paciente del servicio seleccionado con su descripcion y precio
function mensajes(el) {
  return `Seleccionaste:

  Servicio: ${el.nombre}
  Descripción: ${el.descripcion}
  Precio: $${el.precio}`;
}

// Función para buscar un servicio por su descripcion (usado para el caso de los servicios de transporte)
function buscarServicio(parametro) {
  return serviciosArray.filter((el) => el.descripcion.includes(parametro));
}

//Descuento del 10% por elegir Ambulancia
function aplicarDescuento(arr) {
  return arr.map((transporteDescuento) => {
    if (transporteDescuento.descripcion.includes("Ambulancia")) {
      transporteDescuento.precio *= 0.9; // Aplica un descuento del 10%
    }
    return transporteDescuento;
  });
}

//Bienvenida e ingreso de nombre del paciente
function saludar() {
  let nombreValido = false;
  alert("¡Bienvenido/a al servicio de Internación del Hospital M. Quiroga!");
  while (!nombreValido) {
    nombrePaciente = prompt("Por favor, ingrese su nombre y apellido:");
    if (nombrePaciente && nombrePaciente.trim()) {
      console.log("Nombre del Paciente: " + nombrePaciente);
      nombreValido = true;
    } else {
      alert("Por favor, ingrese su nombre y apellido correctamente.");
    }
  }
  return nombrePaciente;
}

//Eleccion de cantidad de noches para el servicio internacion
function internacionHospitalaria() {
  let valido = false;
  while (!valido) {
    noches = prompt(
      "Ingrese el número de noches de internación en el hospital, siendo 4 el mínimo y 8 el máximo:"
    );

    console.log("Noches elegidas por el paciente antes del switch: " + noches);

    switch (noches) {
      case "4":
        valido = true;
        break;
      case "5":
        valido = true;
        break;
      case "6":
        valido = true;
        break;
      case "7":
        valido = true;
        break;
      case "8":
        valido = true;
        break;
      default:
        alert(
          "El número de noches ingresado no es válido.\n\nPor favor, vuelva a ingresar una cantidad de noches correcta."
        );
        break;
    }

    if (valido) {
      //Filtra en el array de servicios, lo que desea el paciente
      const buscar = serviciosArray.filter(
        (elemento) =>
          elemento.nombre.includes("Internacion") &&
          elemento.descripcion.includes(noches)
      );
      console.log(buscar);
      costoInternacion = buscar[0].precio;
      console.log(costoInternacion);
      msj = buscar.map(mensajes);
      //console.log(msj);
      alert(msj);
    }
  }
  alert(
    "Si desea seleccionar otra cantidad de noches, vuelva a ingresar a ésta sección desde el menú"
  );

  return { noches, costoInternacion };
}

//Eleccion de cantidad de dias para el servicio de cuidados medicos
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
        valido = true;
        break;
      case "6":
        valido = true;
        break;
      case "7":
        valido = true;
        break;
      case "8":
        valido = true;
        break;
      default:
        alert(
          "La cantidad de días ingresada para cuidados médicos no es válida.\n\nPor favor, vuelva a ingresar una cantidad de días correcta."
        );
        break;
    }

    if (valido) {
      //Filtra en el array de servicios, lo que desea el paciente
      const buscar2 = serviciosArray.filter(
        (elemento) =>
          elemento.nombre.includes("Cuidados medicos") &&
          elemento.descripcion.includes(diasCuidado)
      );
      console.log(buscar2);
      costoCuidado = buscar2[0].precio;
      msj = buscar2.map(mensajes);
      //console.log(msj);
      alert(msj);
    }
  }
  alert(
    "Si desea seleccionar otra cantidad de días de cuidados médicos, vuelva a ingresar a ésta sección desde el menú"
  );

  return { diasCuidado, costoCuidado };
}

//Eleccion de tipo de transporte para el servicio transporte
function transporteHospital() {
  let tipoPropio;
  let valido = false;
  let verftipoPropio = false;
  while (!valido) {
    tipoTransporte = prompt(
      "Ingrese el tipo de transporte para llegar al hospital : \n\n 1-Coche Exclusivo \n\n 2-Ambulancia \n\n 3-Transporte público \n\n 4-Ingresar su propio transporte"
    );
    console.log("tipo transporte antes del switch: " + tipoTransporte);
    switch (tipoTransporte) {
      case "1":
        tipoTransporte = "Coche Exclusivo";
        valido = true;
        break;
      case "2":
        if (!descuentoAplicado) {
          alert(
            "Ha recibido un descuento del 10% sobre el costo de $60 del mismo, por haber elegido el transporte Ambulancia"
          );
          alert(
            "El descuento permanecerá aplicado incluso si vuelve a elegir ésta opción"
          );
          aplicarDescuento(serviciosArray);
          descuentoAplicado = true; // Marcar que el descuento ya se aplicó
        }
        tipoTransporte = "Ambulancia";
        valido = true;
        break;
      case "3":
        tipoTransporte = "Transporte Publico";
        valido = true;
        break;
      case "4":
        while (!verftipoPropio) {
          tipoPropio = prompt("Ingrese su tipo de transporte:");
          if (tipoPropio && tipoPropio.trim() && isNaN(tipoPropio)) {
            tipoTransporte = tipoPropio;
            valido = true;
            verftipoPropio = true;
            serviciosArray.push(
              new Servicio(
                "Transporte",
                "Transporte " + tipoPropio + " para traslado al hospital",
                0
              )
            ); // Agregar el transporte propio al array de servicios
            alert(
              `Se ha agregado su propio transporte (${tipoPropio}) al registro.`
            );
          } else {
            alert(
              "Por favor, ingrese su tipo de transporte propio correctamente."
            );
          }
        }

        break;
      default:
        alert(
          "El tipo de transporte ingresado no es válido.\n\nPor favor, vuelva a ingresar un tipo de transporte correcto."
        );
        break;
    }

    if (valido) {
      //Filtra en el array de servicios, lo que desea el paciente
      const buscar3 = buscarServicio(tipoTransporte);
      console.log(buscar3);

      costoTransporte = buscar3[0].precio;
      msj = buscar3.map(mensajes);
      //console.log(msj);
      alert(msj);
    }
  }

  alert(
    "Si desea seleccionar otro transporte para llegar al hospital, vuelva a ingresar a ésta sección desde el menú"
  );

  return { tipoTransporte, costoTransporte };
}

//Presupuesto total de los servicios seleccionados
function calcularPresupuesto() {
  let sumaTotal = costoInternacion + costoCuidado + costoTransporte;
  console.log("Costo total estimado para la internación: $" + sumaTotal);
  alert(
    `Sr/a ${nombrePaciente}, su costo total estimado para la internación es:

  - Internación en el hospital: ${noches} noches - $${costoInternacion}
  - Cuidados médicos: ${diasCuidado} días - $${costoCuidado}
  - Transporte: ${tipoTransporte} - $${costoTransporte}

  Presupuesto final: $${sumaTotal}`
  );
}

// Ejecución principal del simulador
function ejecutarSimulador() {
  saludar();
  let opcion;
  while (opcion !== "5") {
    opcion = prompt(
      `Sr/a ${nombrePaciente}, bienvenido/a al menú del Hospital Privado M. Quiroga.\nPor favor, seleccione una opción:\n\n1. Internación Hospitalaria\n2. Cuidados Médicos\n3. Transporte al Hospital\n4. Calcular Presupuesto de Internación\n5. Salir`
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

/*
// Función para buscar y filtrar servicios por precio hasta un maximo deseado
function filtrarServiciosPorPrecio(arr, maxPrecio) {
  return arr.filter((el) => el.precio <= maxPrecio);
}

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
console.log(transporteConDescuento); */
/* 
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
 */
