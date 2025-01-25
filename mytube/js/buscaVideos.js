import { conectaAPI } from "./conectaAPI.js";
import { criaCard } from "./mostraVideos.js";

const buscarVideos = async (eventoClick) => {
    eventoClick.preventDefault();

    const campoPesquisa = document.querySelector("[data-pesquisa]").value;
    const buscaDados = await conectaAPI.buscaVideos(campoPesquisa);
    const listaUL = document.querySelector("[data-lista]");

    while(listaUL.firstChild) {
        listaUL.removeChild(listaUL.firstChild);
    }

    buscaDados.forEach(objetoVideo => listaUL.appendChild(
        criaCard(objetoVideo.titulo, objetoVideo.descricao, objetoVideo.url, objetoVideo.imagem)
    ));

    if(buscaDados.length == 0) {
        listaUL.innerHTML = `<h2 class="mensagem__titulo">Não foi possivel encontrar o vídeo procurado!</h2>`
    }
}

const btnBuscar = document.querySelector("[data-btn-buscar]");
btnBuscar.addEventListener("click", (eventoClick) => buscarVideos(eventoClick));