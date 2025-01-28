import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component';
import { ProductCardComponent } from './product-card/product-card.component'; 
import { CommonModule } from '@angular/common'; // Importer CommonModule
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { ContactComponent } from './contact/contact.component';
import { ColddrinksComponent } from './colddrinks/colddrinks.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Marquez ce composant comme autonome
  imports: [RouterOutlet, RouterLink, HeaderComponent, GalleryComponent, ProductCardComponent, CommonModule, SigninComponent,ContactComponent,ColddrinksComponent]
})
export class AppComponent {
  title = 'angular-app';
}
