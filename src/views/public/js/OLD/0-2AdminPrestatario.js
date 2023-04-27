const modalPrestatario = new bootstrap.Modal(
    document.getElementById("modalPrestatario")
  );
  const tabla= document.getElementById("tablaPrestatario.table.mt-4")
  
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
    idPrestatario_editar.value = fila.children[2].innerHTML;
    prestatarioName_editar.value = fila.children[3].innerHTML;
    rfc_editar.value = fila.children[4].innerHTML;
    codigoPostal_editar.value = fila.children[5].innerHTML;
    ciudad_editar.value = fila.children[6].innerHTML;
    direccion_editar.value = fila.children[7].innerHTML;
    cruzamientos_editar.value = fila.children[8].innerHTML;
    telefono_editar.value = fila.children[9].innerHTML;
    email_editar.value = fila.children[10].innerHTML;
    numContrato_editar.value = fila.children[11].innerHTML;
    fechaContratoPrestatario_editar.value = fila.children[12].innerHTML;
    rutaContratoPrestatario_editar.value = fila.children[13].innerHTML;
    rutaIdentificacion_editar.value = fila.children[14].innerHTML;
    rutaComprobanteDomicilio_editar.value = fila.children[15].innerHTML;
    lineaCredito_editar.value = fila.children[16].innerHTML;
    calificacionCredito_editar.value = fila.children[17].innerHTML;
    modalPrestatario.show();
  });