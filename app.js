// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []

function agregarAmigo() {

    // Obtener los elementos por su ID
    let inputNombre = document.getElementById("amigo");
    let nombre = inputNombre.value.trim();
    
    // Si el campo de texto está vacío, mostrar un mensaje de alert
    if (nombre === "") {
        alert("Por favor, inserte un nombre");
        return;
    }

    // Agregar el nombre a la lista de amigos
    amigos.push(nombre);
    // Limpiar el campo de texto
    inputNombre.value = "";
    // Actualizar la lista de amigos llamando a actualizarLista()
    actualizarLista();

}

function actualizarLista() {

    // Obtener elemento de la lista
    let lista = document.getElementById("listaAmigos");

    // Limpiar la lista
    lista.innerHTML = "";

    // Iterar en array amigos y agregar cada amigo como un <li> a la lista
    for (let amigo of amigos) {
        let li = document.createElement("li");
        li.appendChild(document.createTextNode(amigo));
        lista.appendChild(li);
    }
    
}

function sortearAmigo() {
    // Obtener lista de amigos
    if (amigos.length === 0) {
        alert("No hay nombres en la lista para sortear.");
        return;
    }

    // Generar indices aleatorios
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);
    // Obtener amigo seleccionado
    let amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el amigo seleccionado
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `El amigo sorteado es: ${amigoSorteado}`;
}