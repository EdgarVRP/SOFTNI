//Funcion para cargar todos los datos de los prestatarios

let prestatarios = {};
let proyectos = {};
let evaluaciones = {};

let indicadores = {};
//Se realiza fetch al json de indicadores ubicado en: test\indicadores.json
async function cargarIndicadores() {
  let ruta = "./public/test/indicadores.json";
  await fetch(ruta)
    .then((res) => res.json())
    .then((data) => {
      indicadores = data;
      console.log(indicadores);
    })
    .catch((err) => {
      console.log(err);
    });
}

async function cargarPrestatarios() {
  await fetch(URL_Backend_prestatario + `adminPrestatario`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      prestatarios = data;
      //console.log(prestatarios);
    })
    .catch((err) => {
      console.log(err);
    });
}

async function cargarEvaluaciones() {
  await fetch(URL_Backend_evaluacion + `Evaluaciones`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      evaluaciones = data;
      //console.log(evaluaciones);
    })
    .catch((err) => {
      console.log(err);
    });
}

async function cargarProyectos() {
  await fetch(URL_Backend_proyecto + `proyectos`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      proyectos = data;
      //console.log(proyectos);
    })
    .catch((err) => {
      console.log(err);
    });
}

//prestatarios.prestatarios[0]
//evaluaciones[0]
//proyectos[0]

/*
//GRAFICO 1
//Funcion para cargar todos los datos de los prestatarios
const data = {
  labels: ["Manzanas", "Peras", "Naranjas", "Plátanos", "Mangos"],
  datasets: [
    {
      label: "Cantidad",
      data: [20, 10, 15, 5, 12],
      backgroundColor: ["red", "green", "orange", "yellow", "purple"],
    },
  ],
};

// Crear gráfico de barras
const chart = new Chart(document.getElementById("chart"), {
  type: "bar",
  data: data,
  options: {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  },
});

*/

//Se crea grafico 0 a partir de la informacion en base de datos

async function cargarDatos() {
  await cargarPrestatarios();
  await cargarEvaluaciones();
  await cargarProyectos();
  await cargarIndicadores();
  grafica0();
  grafica1();
  grafica2();
  grafica3();
  grafica4();
  grafica5();
}

cargarDatos();

function grafica0() {
  let data0 = {
    labels: ["Evaluaciones", "Proyectos", "Prestatarios"],
    datasets: [
      {
        label: "Cantidad de registros",
        data: [
          prestatarios.prestatarios.length,
          proyectos.length,
          evaluaciones.length,
        ],
        backgroundColor: ["red", "green", "orange"],
      },
    ],
  };

  let chart0 = new Chart(document.getElementById("chart0"), {
    type: "bar",
    data: data0,
  });
}
//Se crea grafico 2 a partir de la informacion en indicadores
function grafica1() {
  let data1 = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        label: "Cantidad de créditos evaluados",
        data: [
          indicadores["2022-01"].P_seguimiento["I1"],
          indicadores["2022-02"].P_seguimiento["I1"],
          indicadores["2022-03"].P_seguimiento["I1"],
          indicadores["2022-04"].P_seguimiento["I1"],
          indicadores["2022-05"].P_seguimiento["I1"],
          indicadores["2022-06"].P_seguimiento["I1"],
        ],
        backgroundColor: ["red", "green", "orange", "yellow", "purple", "blue"],
      },
    ],
  };

  let chart = new Chart(document.getElementById("chart1"), {
    type: "bar",
    data: data1,
  });
}
function grafica2() {
  let data2 = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        label: "Cantidad de créditos con rezago en tiempo",
        data: [
          indicadores["2022-01"].P_seguimiento["I2"],
          indicadores["2022-02"].P_seguimiento["I2"],
          indicadores["2022-03"].P_seguimiento["I2"],
          indicadores["2022-04"].P_seguimiento["I2"],
          indicadores["2022-05"].P_seguimiento["I2"],
          indicadores["2022-06"].P_seguimiento["I2"],
        ]
      },
    ],
  };

  let chart = new Chart(document.getElementById("chart2"), {
    type: "bar",
    data: data2,
  });
}
function grafica3() {
  let data3 = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        label: "Cantidad créditos rechazados",
        data: [
          indicadores["2022-01"].P_seguimiento["I3"],
          indicadores["2022-02"].P_seguimiento["I3"],
          indicadores["2022-03"].P_seguimiento["I3"],
          indicadores["2022-04"].P_seguimiento["I3"],
          indicadores["2022-05"].P_seguimiento["I3"],
          indicadores["2022-06"].P_seguimiento["I3"],
        ],
        backgroundColor: ["red", "green", "orange", "yellow", "purple", "blue"]
      },
    ],
  };

  let chart = new Chart(document.getElementById("chart3"), {
    type: "bar",
    data: data3,
  });
}
function grafica4() {
  let data4 = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        label: "Cantidad de créditos en seguimiento",
        data: [
          indicadores["2022-01"].P_seguimiento["I4"],
          indicadores["2022-02"].P_seguimiento["I4"],
          indicadores["2022-03"].P_seguimiento["I4"],
          indicadores["2022-04"].P_seguimiento["I4"],
          indicadores["2022-05"].P_seguimiento["I4"],
          indicadores["2022-06"].P_seguimiento["I4"],
        ]
      },
    ],
  };

  let chart = new Chart(document.getElementById("chart4"), {
    type: "bar",
    data: data4,
  });
}
function grafica5() {
  let data5 = {
    labels: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio"],
    datasets: [
      {
        label: "Cantidad de problemas en créditos",
        data: [
          indicadores["2022-01"].P_seguimiento["I5"],
          indicadores["2022-02"].P_seguimiento["I5"],
          indicadores["2022-03"].P_seguimiento["I5"],
          indicadores["2022-04"].P_seguimiento["I5"],
          indicadores["2022-05"].P_seguimiento["I5"],
          indicadores["2022-06"].P_seguimiento["I5"],
        ],
        backgroundColor: ["red", "green", "orange", "yellow", "purple", "blue"]
      },
    ],
  };

  let chart = new Chart(document.getElementById("chart5"), {
    type: "bar",
    data: data5,
  });
}