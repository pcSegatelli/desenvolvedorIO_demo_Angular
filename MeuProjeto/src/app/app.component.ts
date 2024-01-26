import { Component } from '@angular/core';
import { environment } from '../environments/enviroment';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  constructor() {
    console.log(environment.production); // Logs false for development environment
  }
  title = 'MeuProjeto';
}
