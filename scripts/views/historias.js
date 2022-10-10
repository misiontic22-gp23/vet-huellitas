const HISTORIA = new Historia();

document.addEventListener('DOMContentLoaded', event => {
  
    function loadCategoryTable(){
        const tbody =document.querySelector("tbody");
        tbody.innerHTML = "";
        HISTORIA.findAll().then(historias => {
            historias.forEach(historia => {
                const tr = document.createElement('tr');
                tr.innerHTML +=`
                    <tr>
                        <td>${historia.id}</td>
                        <td>${historia.fecha}</td>
                        <td>${historia.mascota}</td>
                        <td>${historia.veterinario}</td>
                        <td>${historia.descripcion}</td>
                        <td>${historia.consulta}</td>
                        <td>${historia.especialista}</td>
                        <td>${historia.frecuenciaRespiratoria}</td>
                        <td>${historia.frecuenciaCardiaca}</td>
                        <td>${historia.temperatura}</td>
                        <td>${historia.peso}</td>
                        <td>${historia.diagnostico}</td>
                        <td>${historia.tratamiento}</td>
                        <td>
                        <button type="button">Eliminar</button>
                        </td>
                    </tr>
                `;
            });
        });
    }

    loadCategoryTable();

    document.querySelector("#historia-insert").addEventListener("submit", event => {
        HISTORIA.insert({
            fecha: event.target.fecha.value,
            mascota: event.target.mascota.value,
            veterinario: event.target.veterinario.value,
            descripcion: event.target.descripcion.value,
            consulta: event.target.consulta.value,
            especialista: event.target.especialista.value,
            frecuenciaRespiratoria: event.target.frecuenciaRespiratoria.value,
            frecuenciaCardiaca: event.target.frecuenciaCardiaca.value,
            temperatura: event.target.temperatura.value,
            peso: event.target.peso.value,
            diagnostico: event.target.diagnostico.value,
            tratamiento: event.target.tratamiento.value,
        }).then( historia => {
            event.target.reset();
            loadCategoryTable();
            alert('El registro clínico fue creado exitosamente');
        }).catch(()=> {
            alert('El registro "'+Historia.fecha+'" fue creado');
        });
    }, false);
}, false);