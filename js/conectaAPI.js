const listaVideos = async () => {
    const apiGET = (await fetch("http://localhost:3000/videos"));
    const apiGETConvertida = await apiGET.json();

    return apiGETConvertida;
}

const buscaVideos = async (termoBuscado) => {
    const apiBusca = await fetch(`http://localhost:3000/videos?q=${termoBuscado}`);
    const apiBuscaConvertida = await apiBusca.json();

    return apiBuscaConvertida;
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
        }),
    });
    
    if(!conectaAPI.ok) {
        throw new Error("Não foi possível enviar o vídeo!");
    }

    const apiPOSTConvertida = await apiPOST.json();
    return apiPOSTConvertida;
}

export const conectaAPI = { listaVideos, criaVideo, buscaVideos }