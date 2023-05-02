const modalUsuario = new bootstrap.Modal(
  document.getElementById("modalUsuario")
);
document.getElementById("dateTimeLogin").value = new Date().toLocaleString();
document.getElementById("fechaCreacion").value = new Date().toLocaleString();
const tabla = document.getElementById("tablaUsuarios.table.mt-4");

const on = (element, event, selector, handler) => {
  element.addEventListener(event, (e) => {
    if (e.target.closest(selector)) {
      handler(e);
    }
  });
};

on(document, "click", ".btnEditar", (e) => {
  const fila = e.target.parentNode.parentNode;
  id_editar.value = fila.children[0].innerHTML;
  idUsuario_editar.value = fila.children[1].innerHTML;
  userName_editar.value = fila.children[2].innerHTML;
  password_editar.value = fila.children[3].innerHTML;
  dateTimeLogin_editar.value = fila.children[4].innerHTML;
  rolUser_editar.value = fila.children[5].innerHTML;
  fechaCreacion_editar.value = fila.children[6].innerHTML;
  email_editar.value = fila.children[7].innerHTML;
  Telefono_editar.value = fila.children[8].innerHTML;
  modalUsuario.show();
});

//fetch para editar usuario
const formEditar = document.getElementById("formEditar");
formEditar.addEventListener("submit", (e) => {
  e.preventDefault();


/*const id = req.body.id_editar
    const idUsuario = req.body.idUsuario_editar
    const userName = req.body.userName_editar
    const password = usuario.encryptPassword(req.body.password_editar)
    const dateTimeLogin = req.body.dateTimeLogin_editar
    const rolUser = req.body.rolUser_editar
    const fechaCreacion = req.body.fechaCreacion_editar
    const email = req.body.email_editar
    const telefono = req.body.Telefono_editar
*/


  let usuario = {
    id_editar: id_editar.value,
    idUsuario_editar: idUsuario_editar.value,
    userName_editar: userName_editar.value,
    password_editar: password_editar.value,
    dateTimeLogin_editar: dateTimeLogin_editar.value,
    rolUser_editar: rolUser_editar.value,
    fechaCreacion_editar: fechaCreacion_editar.value,
    email_editar: email_editar.value,
    Telefono_editar: Telefono_editar.value
  };
  console.log(usuario);
  fetch("/adminUsuarios/editar", {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(usuario),
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch((err) => console.log(err));
  modalUsuario.hide();
  formEditar.reset();
});
