const VETS = new Vet();

document.addEventListener('DOMContentLoaded', event =>{

    document.querySelector("#category-insert").addEventListener("submit", event => {
        VETS.insert({
            name: event.target.name.value,
            description: event.target.description.value,
        }).then(() => {
            loadCategoryTable();
            alert('Se ha creado satisfactoriamente el perfil');
        }).catch(()=> {
                alert('El perfil "'+Vet.name+'" fue creada');
            });
        }, false);

}, false); 