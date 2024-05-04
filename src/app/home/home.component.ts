import { Component, inject } from '@angular/core';

import { VideoComponent } from '../video/video.component';
import { AppService } from '../app.service';
import { Cardvideos } from '../cardvideos';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    VideoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  videosService: AppService = inject(AppService);
  videosLista: Cardvideos[] = [];
  videosListaFiltrados: Cardvideos[] = [];

  constructor() {
    this.videosService.listaVideos().then((lista: Cardvideos[]) => {
      this.videosLista = lista;
      this.videosListaFiltrados = lista;
      this.limpaTerminal(15); // Parâmetro é os segundos em que será executado esse comando
    });
  }

  async buscarVideos(eventoClick: Event) {
    eventoClick.preventDefault();

    const inputPesquisa: string = (<HTMLInputElement> document.querySelector('[data-pesquisa]')).value;
    const dados: Cardvideos[] = await this.videosService.buscaVideos(inputPesquisa);
    console.log(dados);
    this.videosListaFiltrados = dados;
  }

  limpaTerminal(tempo: number):void {
    setInterval((): void => {
      console.clear();
      console.log('Terminal limpo :)');
    }, 1000 * tempo); 
  }

  
}
