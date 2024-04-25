import { Component } from '@angular/core';

import { VideoComponent } from '../video/video.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    VideoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
