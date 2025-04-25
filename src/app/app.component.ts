import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';  
import { HeaderComponent } from './layout/header/header.component';  // Importa el Header
import { FooterComponent } from './layout/footer/footer.component';  // Importa el Footer

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,  // Configura las rutas en el componente
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './app.component.html',  // Referencia al archivo HTML
})
export class AppComponent {

}