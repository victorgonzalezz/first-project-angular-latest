import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  template: `
  <!-- <router-outlet></router-outlet> -->
  <h1>Curso de Angular</h1>
  <h2>Compontens</h2>

  {{ title }}
  `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}
