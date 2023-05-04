const btnBuscarPrestatario = document.getElementById("buscarPrestatario");
const btnValidarDatos = document.getElementById("btnvalidarDatos");
const btnScore = document.getElementById("btnScoreBuro");
const btnFinAnalisisNegado = document.getElementById("btnFinAnalisisNegado");
const btnFinAnalisisAceptado = document.getElementById(
  "btnFinAnalisisAceptado"
);
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

//inputs carga documentos prestatario
const inputidentificacion = document.getElementById("identificacion");
const inputcontratoPrestatario = document.getElementById("contratoPrestatario");
const inputestadoFinanciero = document.getElementById("estadoFinanciero");
const inputcomprobanteDomicilio = document.getElementById(
  "comprobanteDomicilio"
);
const btnlimpiarDatos1 = document.getElementById("btnLimpiarForm1");
const btnCargarArchivos1 = document.getElementById("btnGuardarPrestatario");

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
const inputrutaContrato = document.getElementById("rutaContrato");
const btnGuardarProyecto = document.getElementById("btnGuardarProyecto");
const btnLimpiarForm2 = document.getElementById("btnLimpiarForm2");

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
          //Si el estado del analisis es aprobado se habilita lo siguiente
          if (data.aprobado == true) {
            inputidentificacion.disabled = false;
            inputcontratoPrestatario.disabled = false;
            inputestadoFinanciero.disabled = false;
            inputcomprobanteDomicilio.disabled = false;
            document.getElementById("NumSolicitud").disabled = true;
            btnBuscarPrestatario.disabled = true;
            btnlimpiarDatos1.disabled = false;
            btnCargarArchivos1.disabled = false;
          } else {
          }
        })
        .catch((err) => {
          alert("Aun no se ha realizado el analisis");
        });

      //console.log(data);
      //alert(data.message);
      //window.location.href = './home';
      //console.log(data.prestatario);
      //console.log(data.prestatario[0].prestatarioName);
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
}

btnBuscarPrestatario.addEventListener("click", (e) => {
  e.preventDefault();
  consultarPrestatario(idPrestatario.value);
});

btnCargarArchivos1.addEventListener("click", (e) => {
  e.preventDefault();
  cargarArchivo(
    inputidentificacion,
    idPrestatario.value + "-identificacion.pdf"
  );
  cargarArchivo(
    inputcontratoPrestatario,
    idPrestatario.value + "-contratoPrestatario.pdf"
  );
  cargarArchivo(
    inputestadoFinanciero,
    idPrestatario.value + "-estadoFinanciero.pdf"
  );
  cargarArchivo(
    inputcomprobanteDomicilio,
    idPrestatario.value + "-comprobanteDomicilio.pdf"
  );
  alert("Archivos cargados correctamente");
  //Se actualizan las rutas de los archivos en la base de datos
  fetch(URL_Backend_prestatario + `adminPrestatario/${idPrestatario.value}`, {
    method: "PUT",
    body: JSON.stringify({
      rutaIdentificacion: idPrestatario.value + "-identificacion.pdf",
      rutaContratoPrestatario: idPrestatario.value + "-contratoPrestatario.pdf",
      rutaEstadoFinanciero: idPrestatario.value + "-estadoFinanciero.pdf",
      rutaComprobanteDomicilio:
        idPrestatario.value + "-comprobanteDomicilio.pdf",
    }),
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
      //alert(data.message);
      //window.location.href = './home';
    })
    .catch((err) => {
      console.log(err);
      alert("No se pudo actualizar la informacion");
    });
  //Deshabilitar inputs
  inputidentificacion.disabled = true;
  inputcontratoPrestatario.disabled = true;
  inputestadoFinanciero.disabled = true;
  inputcomprobanteDomicilio.disabled = true;
  btnlimpiarDatos1.disabled = true;
  btnCargarArchivos1.disabled = true;
  //Habilitar inputs proyecto
  inputprojectName.disabled = false;
  inputnumContratoPrestatario.disabled = false;
  inputtotalCredito.disabled = false;
  inputtasaInteres.disabled = false;
  inputplazoCredito.disabled = false;
  inputnumProveedores.disabled = false;
  inputdiaPago.disabled = false;
  inputrutaContrato.disabled = false;
  btnGuardarProyecto.disabled = false;
  btnLimpiarForm2.disabled = false;
});

function cargarArchivo(inputFile, nombre) {
  const formData = new FormData();
  //formData.append("file", file.files[0]);
  formData.append("file", inputFile.files[0], nombre);
  //formData.append("nombreArchivo", "mi_nombre_de_archivo");
  formData;
  fetch(URL_Backend_files + "upload", {
    method: "POST",
    body: formData,
  })
    .then((res) => res.text())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));
}

//Se carga la informacion del proyecto
btnGuardarProyecto.addEventListener("click", (e) => {
  e.preventDefault();
  //Se carga el archivo del contrato del proyecto
  cargarArchivo(inputrutaContrato, idPrestatario.value + "-contrato.pdf");
  //
  //Se construye objeto proyecto
  const proyecto = {idProyecto: idPrestatario.value,
    projectName: inputprojectName.value,
    numContrato: inputnumContratoPrestatario.value,
    //Se agrega la fecha del contrato del proyecto de a cuerdo a la fecha del registro
    fechaContratoProyecto: new Date().toISOString().slice(0, 10),
    totalCredito: inputtotalCredito.value,
    tasaInteres: inputtasaInteres.value,
    plazoCredito: inputplazoCredito.value,
    numProveedores: inputnumProveedores.value,
    diaPago: inputdiaPago.value,
    rutaContrato: idPrestatario.value + "-contrato.pdf"
  };

  console.log(proyecto);

  //Se hace fetch de los datos del proyecto
  fetch(URL_Backend_proyecto + `proyectos`, {
    method: "POST",
    body: JSON.stringify(proyecto),
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  })
    .then((res) => {
      console.log(res);
      return res.json();
    })
    .then((data) => {
      console.log(data);
      alert("Proyecto guardado correctamente");
      //window.location.href = './home';
    })
    .catch((err) => {
      console.log(err);
      alert("No se pudo guardar la informacion del proyecto");
    });
});



////Habilitar inputs proyecto para pruebas
// inputprojectName.disabled = false;
// inputnumContratoPrestatario.disabled = false;
// inputtotalCredito.disabled = false;
// inputtasaInteres.disabled = false;
// inputplazoCredito.disabled = false;
// inputnumProveedores.disabled = false;
// inputdiaPago.disabled = false;
// inputrutaContrato.disabled = false;
// btnGuardarProyecto.disabled = false;
// btnLimpiarForm2.disabled = false;