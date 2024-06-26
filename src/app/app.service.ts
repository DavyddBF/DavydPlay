import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  api: string = 'http://localhost:3000/videos';

  async listaVideos(): Promise<any> {
    const apiGET: Response = (await fetch(this.api));
    return await apiGET.json();
  }

  async buscaVideos(termoBuscado: string): Promise<any> {
    const apiBusca = await fetch(`${this.api}?q=${termoBuscado}`);
    return await apiBusca.json();
  }

  async criaVideo(titulo: string, descricao: string, url: string, imagem: string): Promise<any> {
    const apiPOST: Response = await fetch(this.api, {
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

    return await apiPOST.json();
  }


}
