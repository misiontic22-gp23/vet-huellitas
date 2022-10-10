const MASCOTA = new Mascota();

document.addEventListener('DOMContentLoaded', event => {

    function loadCategoryTable() {
        const tbody = document.querySelector("tbody");
        tbody.innerHTML = "";
        MASCOTA.findAll().then(mascotas => {
            mascotas.forEach(mascota => {
                const tr = document.createElement('tr');
                tr.innerHTML += `
                    <tr>
                        <td>${mascota.id}</td>
                        <td>${mascota.nombre}</td>
                        <td>${mascota.especie}</td>
                        <td>${mascota.raza}</td>
                        <td>${mascota.sexo}</td>
                        <td>${mascota.foto}</td>
                        <td>
                        <button type="button">Eliminar</button>
                        </td>
                    </tr>
                `;
            });
        });
    }

    loadCategoryTable();

    document.querySelector("#mascota-insert").addEventListener("submit", event => {
        MASCOTA.insert({
            nombre: event.target.nombre.value,
            especie: event.target.especie.value,
            raza: event.target.raza.value,
            sexo: event.target.sexo.value,
            foto: event.target.foto.value,
        }).then(mascota => {
            event.target.reset();
            loadCategoryTable();
            alert('La mascota fue creada exitosamente');
        }).catch(() => {
            alert('La mascota "' + Mascota.nombre + '" fue creada');
        });
    }, false);

},false);