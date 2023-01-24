const btnlimpiar = document.getElementById('btnlimpiar');
btnlimpiar.addEventListener('click', () => {
    document.getElementById('name').value = '';
    document.getElementById('rfc').value = '';
    document.getElementById('cp').value = '';
    document.getElementById('ciudad').value = '';
    document.getElementById('direccion').value = '';
    document.getElementById('direccion2').value = '';
    document.getElementById('telefono').value = '';
    document.getElementById('email').value = '';
    console.log('Limpiando campos');
});