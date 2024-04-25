import { Component, Input } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser'; /* Código recomendado pelo GPT */ 

import { Cardvideos } from '../cardvideos';

@Component({
  selector: 'app-video',
  standalone: true,
  imports: [],
  templateUrl: './video.component.html',
  styleUrl: './video.component.css'
})
export class VideoComponent {
  @Input() dadosRecebidos!: Cardvideos;

  /* Código do GPT */
  videoURL!: SafeResourceUrl;

  constructor(private sanitizer: DomSanitizer) {}

  ngOnInit() {
    this.videoURL = this.sanitizer.bypassSecurityTrustResourceUrl(this.dadosRecebidos.url);
  }
}
