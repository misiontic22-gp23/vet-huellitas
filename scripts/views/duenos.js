const DUENO = new Dueno();

document.addEventListener('DOMContentLoaded', event => {

    document.addEventListener('DOMContentLoaded', event => {
        DUENO.insert({
            nombre: event.target.nombre.value,
            cedula: event.target.cedula.value,
            telefono: event.target.telefono.value,
            usuario: event.target.usuario.value,
            password: event.target.password.value,
        }).then(dueno => {
            event.target.reset();
            loadCategoryTable();
            alert('Se ha creado satisfactoriamente el perfil');
    }).catch(()=> {
                alert('El perfil "'+dueno.nombre+'" fue creada');
        });
    },false);

},false);
