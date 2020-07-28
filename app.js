const formulario = document.querySelector("#formulario");
const datos = document.querySelector("#datos");

eventListener();
function eventListener() {
  formulario.addEventListener("submit", function (e) {
    e.preventDefault();
    let nombre = document.querySelector("#nombre").value;
    fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}`)
      .then((response) => response.json())
      .then((data) => {
        datos.innerHTML = ``;
        for (let i = 0; i <= data.results.length; i++) {
          let div = document.createElement("div");
          div.innerHTML += `
            <div class="card mb-3" style="width: 100%;">
                <div class="row no-gutters">
                    <div class="col-md-3">
                    <img src="${data.results[i].image}" class="card-img">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h3 class="card-title">${i+1}:  ${data.results[i].name} - ${data.results[i].status}</h3>
                        <p><small class="text-muted">Origen: ${data.results[i].origin.name}</small></p>
                        <p><small class="text-muted">Genero: ${data.results[i].gender}</small></p>
                        <p><small class="text-muted">Especie: ${data.results[i].species}</small></p>
                    </div>
                    </div>
                </div>
            </div>`;
          datos.appendChild(div);
        }
      })
      .catch((err) => console.log(err));
  });
}
