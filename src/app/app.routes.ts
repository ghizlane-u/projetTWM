
import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ColddrinksComponent } from './colddrinks/colddrinks.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' }, // Redirige vers 'home' au chargement
  { path: 'home', component: GalleryComponent }, // Supposons que GalleryComponent est la page d'accueil
  { path: 'about', component: AboutComponent },
  { path: 'cont', component: ContactComponent },
  { path: 'cold', component: ColddrinksComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' } // Redirige les routes inconnues
];