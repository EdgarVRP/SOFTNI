const modalUsuario = new bootstrap.Modal(
    document.getElementById("modalUsuario")
  );
  document.getElementById("dateTimeLogin").value = new Date().toLocaleString();
  document.getElementById("fechaCreacion").value = new Date().toLocaleString();
  const tabla= document.getElementById("tablaUsuarios.table.mt-4")
  
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
  