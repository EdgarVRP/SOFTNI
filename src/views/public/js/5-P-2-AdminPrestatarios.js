//prestatarios-container es el div en el HTML donde se crean las tarjetas de los productos
const container = document.getElementById("prestatarios-container");

/*Los atributos de un prestatario son:
_id
idPrestatario: {type: Number, default: 1},
    prestatarioName : {type: String, required: true},
    rfc : {type: String, required: true},
    codigoPostal : {type: Number, required: true},
    ciudad : {type: String, required: true},
    direccion : {type: String, required: true},
    cruzamientos : {type: String, required: true},
    telefono : {type: Number, required: true},
    email : {type: String, required: true},
    numContrato: {type: Number},
    fechaContratoPrestatario: {type: String},
    rutaContratoPrestatario: {type: String},
    rutaIdentificacion: {type: String},
    rutaEstadoFinanciero: {type: String},
    rutaComprobanteDomicilio: {type: String},
    lineaCredito: {type: Number},
    calificacionCredito: {type: String},
    procesoAnalisis: {type: Boolean, default: false},
    procesoAlta: {type: Boolean, default: false},    
    creditoAceptado: {type: Boolean, default: false},
    score : {type: Number, default: 0},
    ingresoMensual : {type: Number, default: 0}
*/

let prestatario = {};
function consultarPrestatarios() {
  fetch(URL_Backend_prestatario + `adminPrestatario/`, {
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
      prestatario = data;
      //console.log(prestatario);
      mostrarprestatarios(prestatario.prestatarios);
    })
    .catch((err) => {
      console.log(err);
      alert("Error de conexión");
    });
}

consultarPrestatarios();
function mostrarprestatarios(prestatarios) {
  console.log(prestatarios);
  prestatarios.forEach((prestatario) => {
    console.log(prestatario);
    const prestatarioCard = document.createElement("div");
    prestatarioCard.classList.add("prestatario-card");
    prestatarioCard.classList.add("col-sm-12");
    prestatarioCard.classList.add("col-md-3");
    prestatarioCard.classList.add("col-xl-3");
    prestatarioCard.classList.add("text-center");
    
    prestatarioCard.innerHTML = `
        <div class="prestatario-card-header">
            <div class="prestatario-card-header-title">
                <h3>Nombre: ${prestatario.prestatarioName}</h3>
            </div>
            <div class="prestatario-card-header-estado">
                <h3>${prestatario.calificacionCredito}</h3>
            </div>
        </div>
        <div class="prestatario-card-body">
            <div class="prestatario-card-body-info">
                <div class="prestatario-card-body-info-item">
                    <h4>Contrato</h4>
                    <p>${prestatario.numContrato}</p>
                </div>
                <div class="prestatario-card-body-info-item">
                    <h4>Score</h4>
                    <p>${prestatario.score}</p>
                </div>
                <div class="prestatario-card-body-info-item">
                    <h4>Ingreso Mensual</h4>
                    <p>$${prestatario.ingresoMensual}</p>
                </div>
            </div>
            <div class="prestatario-card-body-info">
                <div class="prestatario-card-body-info-item">
                    <h4>RFC</h4>
                    <p>${prestatario.rfc}</p>
                </div>
                <div class="prestatario-card-body-info-item">
                    <h4>Código Postal</h4>
                    <p>${prestatario.codigoPostal}</p>
                </div>
                <div class="prestatario-card-body-info-item">
                    <h4>Ciudad</h4>
                    <p>${prestatario.ciudad}</p>
                </div>
            </div>
            <div class="prestatario-card-body-info">
                <div class="prestatario-card-body-info-item">
                    <h4>Dirección</h4>
                    <p>${prestatario.direccion}</p>
                </div>
                <div class="prestatario-card-body-info-item">
                    <h4>Cruzamientos</h4>
                    <p>${prestatario.cruzamientos}</p>
                </div>
                <div class="prestatario-card-body-info-item">
                    <h4>Teléfono</h4>
                    <p>${prestatario.telefono}</p>
                </div>
            </div>
            <div class="prestatario-card-body-info">
                <div class="prestatario-card-body-info-item">
                    <h4>Email</h4>
                    <p>${prestatario.email}</p>
                </div>
                <div class="prestatario-card-body-info-item">
                    <h4>Linea de Crédito</h4>
                    <p>$${prestatario.lineaCredito}</p>
                </div>
                <div class="prestatario-card-body-info-item">
                    <h4>Fecha de Contrato</h4>
                    <p>${prestatario.fechaContratoPrestatario}</p>
                </div>
            </div>
        </div>
        <div class="prestatario-card-footer">
            <div class="prestatario-card-footer-item">
                <button class="btn btn-primary" onclick="EditarPrestatario('${prestatario._id}')">Editar</button>
            </div>
            <div class="prestatario-card-footer-item">
                <button class="btn btn-primary" onclick="eliminarPrestatario('${prestatario._id}')">eliminar</button>
            </div>
        </div>
        `;
    container.appendChild(prestatarioCard);
  });
}
