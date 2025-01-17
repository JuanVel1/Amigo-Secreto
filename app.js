var amigos = [];

function listarAmigos() {
    if (amigos.length > 0) {
        let input = document.getElementById("listaAmigos");
        input.innerHTML = `
    <div id="friend-list"><h3 class="section-title"> Tu lista de Amigos es: </h3></div>
    <br>
    `;
        amigos.forEach(amigo => {
            document.getElementById("friend-list").innerHTML += `<li> - ${amigo}</li><br>`;
        });
    }
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let input = document.getElementById("listaAmigos");
        input.innerHTML = `
    <div id="friend-list"><h3 class="section-title"> Tu amigo secreto es: </h3></div>
    <br>
    <div>${amigos[Math.floor(Math.random() * amigos.length)]}</div>`;
    }
    else {
        alert("No tienes amigos para sortear :(");
    }
}

function agregarAmigo() {
    let valor = document.getElementById('amigo').value;
    if (valor == '') {
        alert('Debes ingresar un nombre válido');
        return;
    }
    else {
        let existe = amigos.find(amigo => amigo === valor);
        if (existe) {
            alert('Este amigo ya fue ingresado');
            return;
        }
        amigos.push(document.getElementById('amigo').value);
        alert('Amigo agregado');
        listarAmigos();
    }
}