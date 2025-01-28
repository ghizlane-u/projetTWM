import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './home-page/home-page.component';

export const routes: Routes = [
  
  { path: '', component: HomeComponent },
  { path: '**', redirectTo: '' }
];
