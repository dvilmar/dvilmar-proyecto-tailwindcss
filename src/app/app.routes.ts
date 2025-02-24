import { Routes } from '@angular/router';
import { LoginComponent } from './layout/login/login.component';
import { RegistroComponent } from './layout/registro/registro.component';
import { ProductosComponent } from './layout/productos/productos.component';
import { BuscadorComponent } from './layout/buscador/buscador.component';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'buscador', component: BuscadorComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: '**', redirectTo: '/login' },
];
