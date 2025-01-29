import { Component } from '@angular/core';
import { RouterLink, RouterOutlet,RouterModule } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ContactComponent } from './contact/contact.component';
import { ColddrinksComponent } from './colddrinks/colddrinks.component';

import { CommonModule } from '@angular/common'; // Importer CommonModule
import { HeaderComponent } from './header/header.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Marquez ce composant comme autonome
  imports: [RouterModule,RouterOutlet, RouterLink, HeaderComponent, GalleryComponent,  CommonModule,ContactComponent,ColddrinksComponent]
})
export class AppComponent {
  title = 'angular-app';
}
