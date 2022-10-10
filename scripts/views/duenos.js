const DUENO = new Dueno();

document.addEventListener('DOMContentLoaded', event => {
  DUENO.getEntities().then(duenos => {
    const duenosList = document.getElementById('duenos-list');
    duenos.forEach(dueno => {
      const li = document.createElement('li');
      li.innerHTML = dueno.nombre;
      duenosList.appendChild(li);
    });
  });
});