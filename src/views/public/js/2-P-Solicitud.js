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
//btn registrarse
const btnregistrar = document.getElementById('btnregistrar');

function guardarDatos() {
    let prestatarioName = document.getElementById('name').value;
    let rfc = document.getElementById('rfc').value;
    let codigoPostal= document.getElementById('cp').value;
    let ciudad = document.getElementById('ciudad').value;
    let direccion = document.getElementById('direccion').value;
    let cruzamientos = document.getElementById('direccion2').value;
    let telefono = document.getElementById('telefono').value;
    let email = document.getElementById('email').value;
    let data = {
        prestatarioName,
        rfc,
        codigoPostal,
        ciudad,
        direccion,
        cruzamientos,
        telefono,
        email
    };
    console.log(data);
    fetch(URL_Backend_prestatario + `adminPrestatario/crear`, {
        method: 'POST',
        body: JSON.stringify(data),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then((res) => {
        return res.json();
    }).then((data) => {
        console.log(data);
        alert(data.message);
        //window.location.href = './home';
    }).catch((err) => {
        console.log(err);
    });
}
//validacion regex email
function validarEmail(valor) {
    if (/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(valor)){
        return true;
    } else {
        return false;
    }
}
btnregistrar.addEventListener('click', (e) => {
    e.preventDefault();
    if(document.getElementById('name').value == '' || document.getElementById('rfc').value == '' || document.getElementById('cp').value == '' || document.getElementById('ciudad').value == '' || document.getElementById('direccion').value == '' || document.getElementById('direccion2').value == '' || document.getElementById('telefono').value == '' || validarEmail(document.getElementById('email').value)==false){
        alert('Favor de llenar todos los campos');
    }else{
    guardarDatos();
    //redirigir a home
    // setTimeout(function(){
    // window.location.href = './home';
    // }, 15000);
    }
});
