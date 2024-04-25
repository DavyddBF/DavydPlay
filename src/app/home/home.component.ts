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
      console.log(this.videosListaFiltrados)
    });
  }
}
