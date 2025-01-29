
import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { ContactComponent } from './contact/contact.component';
import { ColddrinksComponent } from './colddrinks/colddrinks.component';
import { HomeComponent } from './home-page/home-page.component';
import { AboutComponent } from './about/about.component';



export const routes: Routes = [
 { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'cont', component: ContactComponent },
  { path: 'cold', component: ColddrinksComponent },
  { path: '**', redirectTo: '' }

]
