import { Component, OnInit } from '@angular/core';
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
  isDarkMode = false;

  ngOnInit() {
    this.isDarkMode = localStorage.getItem('dark-theme') === 'true';
    this.updateDarkClass();
  }

  toggleTheme() {
    this.isDarkMode = !this.isDarkMode;
    this.updateDarkClass();
    localStorage.setItem('dark-theme', this.isDarkMode.toString());
  }

  updateDarkClass() {
    if(this.isDarkMode){
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }
}
