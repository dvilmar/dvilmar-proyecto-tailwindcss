import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './app.routes';  // Importamos las rutas desde app.routes.ts

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule  // Usamos appRoutes para configurar las rutas
  ],
  templateUrl: './app.component.html',  // Referencia al archivo HTML
})
export class AppComponent {

  toggleTheme(): void {
    document.documentElement.classList.toggle('dark');
  }
}
