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
        }).then( historia => {
            event.target.reset();
            loadCategoryTable();
            alert('El registro clínico fue creado exitosamente');
        }).catch(()=> {
            alert('El registro "'+Historia.fecha+'" fue creado');
        });
    }, false);
}, false);