/*
    Código completo, porém com modificações em nomes de variáveis e funções.
    Motivos: Fiz como forma de treino e revisão de algumas partes, então, para aprender,
    decidi fazer com essas mudanças.
*/

// CONEXÕES DA API

const videos = async () => {
    const apiGET = await fetch("http://localhost:3000/videos");
    const apiGETConvertida = await apiGET.json();

    return apiGETConvertida;
}

const criaVideo = async (titulo, descricao, url, imagem) => {
    const apiPOST = await fetch("http://localhost:3000/videos", {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            descricao: `${descricao} mil visualizações`,
            url: url,
            imagem: imagem
        })
    });
    
    const apiPOSTConvertida = await apiPOST.json();
    return apiPOSTConvertida;
}

const buscaVideos = async (dados) => {
    const apiBusca = await fetch(`http://localhost:3000/videos?q=${dados}`);
    const apiBuscaConvertida = await apiBusca.json();

    return apiBuscaConvertida;
}

const conectaAPI = { videos, criaVideo, buscaVideos };

// EXIBIÇÃO NA TELA

const listaUL = document.querySelector("[data-lista]");

const criaCard = (titulo, descricao, url, imagem) => {
    const cardVideo = document.createElement("li");

    cardVideo.className = "videos__item";
    cardVideo.innerHTML = `
        <iframe width="100%" height="72%" src="${url}" title="${titulo}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        <div class="descricao-video">
            <img src="${imagem}">
            <h3>${titulo}</h3>
            <p>${descricao}</p>
        </div>
    `

    return cardVideo;
}

const mostraVideo = async () => {
    const funcVideo = await conectaAPI.videos();
    funcVideo.forEach((objetoVideo) =>
        listaUL.appendChild(criaCard(objetoVideo.titulo,  objetoVideo.descricao, objetoVideo.url, objetoVideo.imagem))
    );
}

mostraVideo();

// ENVIA VÍDEO PARA PARA ADICIONAR À PÁGINA PRINCIPAL

const enviaVideo = async (eventoClick) => {
    eventoClick.preventDefault();

    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const imagem = document.querySelector("[data-imagem]").value;
    const descricao = Math.floor(Math.random() * 10).toString();

    await conectaAPI.criaVideo(titulo, descricao, url, imagem);

    window.location.href = "../pages/envio-concluido.html";
}

const formulario = document.querySelector("[data-formulario]");
formulario.addEventListener("submit", (eventoClick) => enviaVideo(eventoClick));

// CAMPO DE BUSCA

const buscarVideos = async (eventoClick) => {
    eventoClick.preventDefault();

    const inputPesquisa = document.querySelector("[data-pesquisa]").value;
    const dados = await conectaAPI.buscaVideos(inputPesquisa);

    dados.forEach((objetoVideo) => 
        listaUL.appendChild(criaCard(objetoVideo.titulo,  objetoVideo.descricao, objetoVideo.url, objetoVideo.imagem))
    );
}

const btnBuscar = document.querySelector("[data-btn-buscar]");
btnBuscar.addEventListener("click", (eventoClick) => buscarVideos(eventoClick))