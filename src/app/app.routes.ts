
import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { ContactComponent } from './contact/contact.component';
import { ColddrinksComponent } from './colddrinks/colddrinks.component';
import { HomeComponent } from './home-page/home-page.component';


export const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'cont', component: ContactComponent },
  { path: 'cold', component: ColddrinksComponent },
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }



]
