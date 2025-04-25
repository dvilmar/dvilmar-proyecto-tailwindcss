import { Component, OnInit  } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [ RouterLink ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {

  ngOnInit(): void {
    if (localStorage.getItem('dark-theme') === 'true') {
      document.documentElement.classList.add('dark');
    }
  }

  toggleTheme(): void {
    const isDarkMode = document.documentElement.classList.toggle('dark');
    
    localStorage.setItem('dark-theme', isDarkMode.toString());
  }
}
