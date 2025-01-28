import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { GalleryComponent } from './gallery/gallery.component'; 
import { CommonModule } from '@angular/common'; // Importer CommonModule
import { HeaderComponent } from './header/header.component';
import { SigninComponent } from './signin/signin.component';
import { HomeComponent} from './home-page/home-page.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Marquez ce composant comme autonome
  imports: [RouterOutlet, RouterLink, HeaderComponent, GalleryComponent, CommonModule, SigninComponent,HomeComponent]
})
export class AppComponent {
  title = 'angular-app';
}
