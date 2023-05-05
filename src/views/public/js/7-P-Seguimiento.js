const btnBuscarPrestatario = document.getElementById("buscarPrestatario");

const idPrestatario = document.getElementById("NumSolicitud");
//Se importan los inputs del formulario
const inputName = document.getElementById("name");
const inputRFC = document.getElementById("rfc");
const inputCP = document.getElementById("cp");
const inputCiudad = document.getElementById("ciudad");
const inputDireccion = document.getElementById("direccion");
const inputDireccion2 = document.getElementById("direccion2");
const inputTelefono = document.getElementById("telefono");
const inputEmail = document.getElementById("email");
const inputAnalisis = document.getElementById("analisis");
const inputScore = document.getElementById("score");
const inputingresoMensual = document.getElementById("ingresoMensual");

//Inputs sobre el proyecto
const inputprojectName = document.getElementById("projectName");
const inputnumContratoPrestatario = document.getElementById(
  "numContratoPrestatario"
);
const inputtotalCredito = document.getElementById("totalCredito");
const inputtasaInteres = document.getElementById("tasaInteres");
const inputplazoCredito = document.getElementById("plazoCredito");
const inputnumProveedores = document.getElementById("numProveedores");
const inputdiaPago = document.getElementById("diaPago");

//Divs de los documentos pdf
const identificacion = document.getElementById("identificacion");
const contratoPrestatario = document.getElementById("contratoPrestatario");
const estadoFinanciero = document.getElementById("estadoFinanciero");
const comprobanteDomicilio = document.getElementById("comprobanteDomicilio");

const contratoProyecto = document.getElementById("contratoProyecto");
let ProyectoLocal={};

function consultarPrestatario(idPrestatario) {
  fetch(
    URL_Backend_prestatario + `adminPrestatario/idPrestatario/${idPrestatario}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      //console.log(URL_Backend_evaluacion + `Evaluaciones/${idPrestatario}`);
      //Se hace fetch de los datos del analisis
      fetch(URL_Backend_evaluacion + `Evaluaciones/${idPrestatario}`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          //console.log(data);
          inputAnalisis.value = data.aprobado;
          inputScore.value = data.puntuacion_credito;
          inputingresoMensual.value = data.ingreso_mensual;
        })
        .catch((err) => {
          alert("Presatario no encontrado");
        });
      inputName.value = data.prestatario[0].prestatarioName;
      inputRFC.value = data.prestatario[0].rfc;
      inputCP.value = data.prestatario[0].codigoPostal;
      inputCiudad.value = data.prestatario[0].ciudad;
      inputDireccion.value = data.prestatario[0].direccion;
      inputDireccion2.value = data.prestatario[0].cruzamientos;
      inputTelefono.value = data.prestatario[0].telefono;
      inputEmail.value = data.prestatario[0].email;
    })
    .catch((err) => {
      console.log(err);
      inputName.value = "";
      inputRFC.value = "";
      inputCP.value = "";
      inputCiudad.value = "";
      inputDireccion.value = "";
      inputDireccion2.value = "";
      inputTelefono.value = "";
      inputEmail.value = "";
      alert("No se encontro el prestatario");
    });
    //Se realiza fetch para traer los datos del proyecto
    //console.log(URL_Backend_proyecto + `proyectos/${idPrestatario}`);
    fetch(URL_Backend_proyecto + `proyectos/${idPrestatario}`, {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
    })
        .then((res) => {
            return res.json();
        })
        .then((data) => {
            //console.log(data);
            ProyectoLocal=data[0];
            console.log(ProyectoLocal);
            inputprojectName.value = ProyectoLocal.projectName;
            inputnumContratoPrestatario.value = ProyectoLocal.numContrato;
            inputtotalCredito.value = ProyectoLocal.totalCredito;
            inputtasaInteres.value = ProyectoLocal.tasaInteres;
            inputplazoCredito.value = ProyectoLocal.plazoCredito;
            inputnumProveedores.value = ProyectoLocal.numProveedores;
            inputdiaPago.value = ProyectoLocal.diaPago;
        })
        .catch((err) => {
            console.log(err);
            alert("Proyecto no encontrado");
        });


}

btnBuscarPrestatario.addEventListener("click", (e) => {
  e.preventDefault();
  consultarPrestatario(idPrestatario.value);
});

function leerPDF(endpoint, nombre, contenedor) {
  let url = endpoint + nombre;
  // Opciones completas de PDFObject
  var options = {
    height: "500px",
    pdfOpenParams: {
      view: "FitV",
      pagemode: "thumbs",
      search: "lorem ipsum",
    },
  };
  PDFObject.embed(url, contenedor, options);
}

document.getElementById("btnidentificacion").addEventListener("click", () => {
    leerPDF(URL_Backend_files + "uploads/", idPrestatario.value+"-identificacion.pdf", identificacion);
});

document.getElementById("btncontratoPrestatario").addEventListener("click", () => {
    leerPDF(URL_Backend_files + "uploads/", idPrestatario.value+"-contratoPrestatario.pdf", contratoPrestatario);
});

document.getElementById("btnestadoFinanciero").addEventListener("click", () => {
    leerPDF(URL_Backend_files + "uploads/", idPrestatario.value+"-estadoFinanciero.pdf", estadoFinanciero);
});

document.getElementById("btncomprobanteDomicilio").addEventListener("click", () => {
    leerPDF(URL_Backend_files + "uploads/", idPrestatario.value+"-comprobanteDomicilio.pdf", comprobanteDomicilio);
});

document.getElementById("btncontratoProyecto").addEventListener("click", () => {
    leerPDF(URL_Backend_files + "uploads/", idPrestatario.value+"-contrato.pdf", contratoProyecto);
});

/*
// Ruta al archivo PDF
var url = "http://localhost:3002/uploads/Contrato1.pdf";

// Opciones completas de PDFObject
var options = {
  height: "500px",
  pdfOpenParams: {
    view: "FitV",
    pagemode: "thumbs",
    search: "lorem ipsum",
  },
};

// Carga el PDF en el contenedor
PDFObject.embed(url, "#pdf-container", options);

*/