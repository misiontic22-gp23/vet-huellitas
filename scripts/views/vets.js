const VETS = new Vet();

document.addEventListener('DOMContentLoaded', event =>{

    document.querySelector("#vet-insert").addEventListener("submit", event => {
        VETS.insert({
            nombre: event.target.nombre.value,
            cedula: event.target.cedula.value,
            matricula: event.target.matricula.value,
            telefono: event.target.telefono.value,
            usuario: event.target.usuario.value,
            password: event.target.password.value,
        }).then(() => {
            loadCategoryTable();
            alert('Se ha creado satisfactoriamente el perfil');
        }).catch(()=> {
                alert('El perfil "'+Vet.name+'" fue creada');
            });
        }, false);

}, false); 