import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importer CommonModule pour accéder à NgFor


@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  standalone: true ,
  imports: [CommonModule] 
})
export class GalleryComponent {
  galleryItems = [
    {
      image: 'https://images.unsplash.com/photo-1627751476653-e954179b174a',
      title: 'This is Amazing for people to visit.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis.'
    },
    {
      image: 'https://images.unsplash.com/photo-1572431447238-425af66a273b',
      title: 'This is Amazing for people to visit.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis.'
    },
    {
      image: 'https://images.unsplash.com/photo-1540202404-1b927e27fa8b',
      title: 'This is Amazing for people to visit.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis.'
    },
    {
      image: 'https://images.unsplash.com/photo-1506790409786-287062b21cfe',
      title: 'This is Amazing for people to visit.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis.'
    },
    {
      image: 'https://images.unsplash.com/photo-1505881502353-a1986add3762',
      title: 'This is Amazing for people to visit.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis.'
    },
    {
      image: 'https://images.unsplash.com/photo-1544473244-f6895e69ad8b',
      title: 'This is Amazing for people to visit.',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium quis.'
    }
  ];
}
