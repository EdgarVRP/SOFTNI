//Funcion para cargar todos los datos de los prestatarios

let prestatarios={};
let proyectos={};
let evaluaciones={};
function cargarPrestatarios() {
    fetch(URL_Backend_prestatario+`adminPrestatario`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        return res.json();
    })
    .then((data) => {
        prestatarios=data;
        console.log(prestatarios);
    }
    )
    .catch(err => {
        console.log(err);
    }
    )
}

function cargarEvaluaciones() {
    fetch(URL_Backend_evaluacion+`Evaluaciones`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        return res.json();
    })
    .then((data) => {
        evaluaciones=data;
        console.log(evaluaciones);
    }
    )
    .catch(err => {
        console.log(err);
    }
    )
}

function cargarProyectos() {
    fetch(URL_Backend_proyecto+`proyectos`,{
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    })
    .then(res => {
        return res.json();
    })
    .then((data) => {
        proyectos=data;
        console.log(proyectos);
    }
    )
    .catch(err => {
        console.log(err);
    }
    )
}

cargarPrestatarios();
cargarEvaluaciones();
cargarProyectos();

//prestatarios.prestatarios[0]
//evaluaciones[0]
//proyectos[0]