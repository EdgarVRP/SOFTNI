const btnBuscarPrestatario = document.getElementById("buscarPrestatario");
const btnValidarDatos = document.getElementById("btnvalidarDatos");
const btnScore = document.getElementById("btnScoreBuro");
const btnFinAnalisisNegado = document.getElementById("btnFinAnalisisNegado");
const btnFinAnalisisAceptado = document.getElementById(
  "btnFinAnalisisAceptado"
);
//Se importan los inputs del formulario
const inputName = document.getElementById("name");
const inputRFC = document.getElementById("rfc");
const inputCP = document.getElementById("cp");
const inputCiudad = document.getElementById("ciudad");
const inputDireccion = document.getElementById("direccion");
const inputDireccion2 = document.getElementById("direccion2");
const inputTelefono = document.getElementById("telefono");
const inputEmail = document.getElementById("email");
let prestatariolocal = {};

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
      prestatariolocal = {
        idPrestatario: data.prestatario[0].idPrestatario,
        prestatarioName: data.prestatario[0].prestatarioName,
        rfc: data.prestatario[0].rfc,
        codigoPostal: data.prestatario[0].codigoPostal,
        ciudad: data.prestatario[0].ciudad,
        direccion: data.prestatario[0].direccion,
        cruzamientos: data.prestatario[0].cruzamientos,
        telefono: data.prestatario[0].telefono,
        email: data.prestatario[0].email,
      };
      //console.log("Prestatario local")
      //console.log(prestatariolocal);
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
  const idPrestatario = document.getElementById("NumSolicitud").value;
  consultarPrestatario(idPrestatario);
});

btnValidarDatos.addEventListener("click", (e) => {
  e.preventDefault();
  const idPrestatario = document.getElementById("NumSolicitud").value;
  prestatario = {
    //convirtiendo de cadena a numero
    idPrestatario: parseInt(idPrestatario),
    //idPrestatario: idPrestatario,
    prestatarioName: inputName.value,
    rfc: inputRFC.value,
    codigoPostal: parseInt(inputCP.value),
    ciudad: inputCiudad.value,
    direccion: inputDireccion.value,
    cruzamientos: inputDireccion2.value,
    telefono: parseInt(inputTelefono.value),
    email: inputEmail.value,
  };
  //Actualizar si es el caso
  if (JSON.stringify(prestatariolocal) == JSON.stringify(prestatario)) {
    alert("No se realizaron cambios");
  } else {
    //console.log(prestatariolocal);
    //console.log(prestatario);
    fetch(URL_Backend_prestatario + `adminPrestatario/${idPrestatario}`, {
      method: "PUT",
      body: JSON.stringify(prestatario),
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
      .then((res) => {
        alert("Se actualizo el prestatario");
        //return res.json();
      })
      .then((data) => {
        //console.log(data);
        //alert(data.message);
        console.log("Se actualizo el prestatario");
        //window.location.href = './home';
      })
      .catch((err) => {
        console.log(err);
      });
  }
  //Deshabilitando inputs
  inputName.disabled = true;
  inputRFC.disabled = true;
  inputCP.disabled = true;
  inputCiudad.disabled = true;
  inputDireccion.disabled = true;
  inputDireccion2.disabled = true;
  inputTelefono.disabled = true;
  inputEmail.disabled = true;
  //Deshabilitando botones
  btnValidarDatos.disabled = true;
  btnBuscarPrestatario.disabled = true;
  //Habilitando
  btnScore.disabled = false;
});

btnScore.addEventListener("click", (e) => {
  e.preventDefault();
  //Simulando el score de 300 a 850 y el ingreso mensual de 10,000 a 100,000
  const score = Math.floor(Math.random() * (850 - 300)) + 300;
  const ingresoMensual = Math.floor(Math.random() * (100000 - 10000)) + 10000;
  document.getElementById("Score").value = score;
  document.getElementById("ingresoMensual").value = ingresoMensual;
  //Deshabilitando botones
  btnScore.disabled = true;
  //Habilitando
  btnFinAnalisisNegado.disabled = false;
  btnFinAnalisisAceptado.disabled = false;
});


//El crédito es negado
btnFinAnalisisNegado.addEventListener("click", (e) => {
    e.preventDefault();
    const idPrestatario = document.getElementById("NumSolicitud").value;
    const score = document.getElementById("Score").value;
    const ingresoMensual = document.getElementById("ingresoMensual").value;
    //Se hace peticion put para actualizar el estado del prestatario
    fetch(URL_Backend_prestatario + `adminPrestatario/${idPrestatario}`, {
        method: "PUT",
        body: JSON.stringify({
            idPrestatario: parseInt(idPrestatario),
            score: parseInt(score),
            ingresoMensual: parseInt(ingresoMensual),
            procesoAnalisis: true,
            creditoAceptado: false
        }),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        })
        .then((res) => {
            alert("Se denego el credito");
            //return res.json();
        })
        .then((data) => {
            //console.log(data);
            //alert(data.message);
            console.log("Se actualizo el prestatario");
            window.location.href = './Alta';
        })
        .catch((err) => {
            console.log(err);
        });
});

//El crédito es aceptado
btnFinAnalisisAceptado.addEventListener("click", (e) => {
    e.preventDefault();
    const idPrestatario = document.getElementById("NumSolicitud").value;
    const score = document.getElementById("Score").value;
    const ingresoMensual = document.getElementById("ingresoMensual").value;
    //Se hace peticion put para actualizar el estado del prestatario
    fetch(URL_Backend_prestatario + `adminPrestatario/${idPrestatario}`, {
        method: "PUT",
        body: JSON.stringify({
            idPrestatario: parseInt(idPrestatario),
            score: parseInt(score),
            ingresoMensual: parseInt(ingresoMensual),
            procesoAnalisis: true,
            creditoAceptado: true
        }),
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        })
        .then((res) => {
            alert("Se actualizo el prestatario");
            //return res.json();
        })
        .then((data) => {
            //console.log(data);
            //alert(data.message);
            console.log("Se actualizo el prestatario");
            window.location.href = './Alta';
        })
        .catch((err) => {
            console.log(err);
        });
});