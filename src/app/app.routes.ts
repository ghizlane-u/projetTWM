
import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ColddrinksComponent } from './colddrinks/colddrinks.component';
import { GalleryComponent } from './gallery/gallery.component';


export const routes: Routes = [
  { path: 'cont', component: ContactComponent },
  { path: 'cold', component: ColddrinksComponent },
  { path: 'home', component: GalleryComponent},
  // { path: '**', redirectTo: '' }



]
