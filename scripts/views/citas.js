const CITA = new Cita();

document.addEventListener('DOMContentLoaded', event => {

    function loadCategoryTable() {
        const tbody = document.querySelector("tbody");
        tbody.innerHTML = "";
        CITA.findAll().then(citas => {
            citas.forEach(cita => {
                const tr = document.createElement('tr');
                tr.innerHTML += `
                    <tr>
                        <td>${cita.id}</td>
                        <td>${cita.fecha}</td>
                        <td>${cita.hora}</td>
                        <td>${cita.mascota}</td>
                        <td>${cita.veterinario}</td>
                        <td>${cita.descripcion}</td>
                        <td>${cita.consulta}</td>
                        <td>${cita.especialista}</td>
                        <td>
                        <button type="button">Eliminar</button>
                        </td>
                    </tr>
                `;
            });
        });
    }

    loadCategoryTable();

    document.querySelector("#cita-insert").addEventListener("submit", event => {
        CITA.insert({
            fecha: event.target.fecha.value,
            hora: event.target.hora.value,
            mascota: event.target.mascota.value,
            veterinario: event.target.veterinario.value,
            descripcion: event.target.descripcion.value,
            consulta: event.target.consulta.value,
            especialista: event.target.especialista.value,
        }).then(cita => {
            event.target.reset();
            loadCategoryTable();
            alert('La cita fue creada exitosamente');
        }).catch(() => {
            alert('La cita "' + Cita.fecha + '" fue creada');
        });
    }, false);
}, false);