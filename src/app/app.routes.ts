import { Routes } from '@angular/router';
import { SigninComponent } from './signin/signin.component';
import { ContactComponent } from './contact/contact.component';
import { ColddrinksComponent } from './colddrinks/colddrinks.component';

export const routes: Routes = [
  { path: 'signin', component: SigninComponent },
  { path: 'cont', component: ContactComponent },
  { path: 'cold', component: ColddrinksComponent }
];
