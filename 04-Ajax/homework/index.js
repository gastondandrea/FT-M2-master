const URL = "http://localhost:5000";

const listaAmigos = document.querySelector('#lista');

const getArrayAmigos = (arrayAmigo)=>{    
    arrayAmigo.forEach(amigo => {
    const li = document.createElement("li");
    li.innerHTML = amigo.name;
    listaAmigos.appendChild(li);
    });
}

const getLista = () => {
                              
    return $.ajax({
        url: `${URL}/amigos`,
        type: "GET",
        success: getArrayAmigos,
    })
}

const btnListaAmigos = document.querySelector('#boton'); //Botón -> Ver Amigos
btnListaAmigos.addEventListener("click", getLista)       //Click al Botón -> Ver Amigos


const getObjetoAmigo = function(objAmigo){
    console.log(objAmigo);
}


const getAmigo = () =>{
    const idAmigo = document.querySelector('#input');
    return $.ajax({
        url: `${URL}/amigos/${idAmigo.value}`,
        type: "GET",
        success: getObjetoAmigo,
    })
}

const btnBusacarAmigo = document.querySelector('#search'); //Botón -> Buscar Amigo
btnBusacarAmigo.addEventListener("click", getAmigo)       //Click al Botón -> Buscar Amigo



const deleteObjetoAmigo = function(objAmigo){
    console.log(objAmigo);
}


const deleteAmigo = () =>{
    const idAmigo = document.querySelector('#inputDelete');
    return $.ajax({
        url: `${URL}/amigos/${idAmigo.value}`,
        type: "DELETE",
        success: deleteObjetoAmigo,
    })
}

const btnEliminarAmigo = document.querySelector('#delete'); //Botón -> Borrar Amigo
btnEliminarAmigo.addEventListener("click", deleteAmigo)       //Click al Botón -> Borrar Amigo