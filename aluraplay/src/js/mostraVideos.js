import { conectaAPI } from "./conectaAPI.js";

const listaUL = document.querySelector("[data-lista]");

export const criaCard = (titulo, descricao, url, imagem) => {
    const video = document.createElement("li");
    video.className = "videos__item";
    video.innerHTML = `
        <iframe width="100%" height="72%" src="${url}"
        title="${titulo}" frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${imagem}">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
        </div>
    `

    return video;
}

const listaVideos = async () => {
    try {
        const listaAPI = await conectaAPI.listaVideos();
        listaAPI.forEach((objetoVideo) => listaUL.appendChild(criaCard(objetoVideo.titulo, objetoVideo.descricao, objetoVideo.url, objetoVideo.imagem)));
    } catch {
        listaUL.innerHTML = `<h2 class="mensagem__titulo">A página desejada não foi encontrada!</h2>`
    }
}

listaVideos();