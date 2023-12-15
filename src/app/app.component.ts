import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';

//Components
import { NewComponent } from './components/new-component/new-component.component';
import { TemplateBindingComponent } from './components/template/template-binding/template-binding.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, NewComponent, TemplateBindingComponent],
  template: `
  <!-- <router-outlet></router-outlet> -->
  <h1>Curso de Angular</h1>
  <app-template-binding />
  <!-- <app-new-component /> -->
  `,
})
export class AppComponent {
  title = 'meu-primeiro-projeto-latest';
}
