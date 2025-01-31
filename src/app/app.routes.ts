
import { Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { ColddrinksComponent } from './colddrinks/colddrinks.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AboutComponent } from './about/about.component';



export const routes: Routes = [
 { path: '', component: GalleryComponent },
  { path: 'about', component: AboutComponent },
  { path: 'cont', component: ContactComponent },
  { path: 'cold', component: ColddrinksComponent },
  { path: 'gal', component: GalleryComponent },
  { path: '**', redirectTo: '' }

]
