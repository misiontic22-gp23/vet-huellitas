const MASCOTA = new Mascota();

document.addEventListener('DOMContentLoaded', event => {

    function loadCategoryTable() {
        MASCOTA.getEntities().then(mascotas => {
            const mascotasList = document.getElementById('mascotas-list');
            mascotas.forEach(mascota => {
                const li = document.createElement('li');
                li.innerHTML = mascota.nombre;
                mascotasList.appendChild(li);
            });
        });
    }

    loadCategoryTable();

    document.querySelector("#mascota-insert").addEventListener("submit", event => {
        event.preventDefault();
        const nombre = document.querySelector("#mascota-nombre").value;
        const edad = document.querySelector("#mascota-edad").value;
        const dueno = document.querySelector("#mascota-dueno").value;
        const categoria = document.querySelector("#mascota-categoria").value;
        const mascota = {
            nombre: nombre,
            edad: edad,
            dueno: dueno,
            categoria: categoria
        };
        MASCOTA.insertEntity(mascota).then(() => {
            loadCategoryTable();
        });
    });

});