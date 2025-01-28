import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Nécessaire pour *ngFor et *ngIf


@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css'], // ou .scss si nécessaire
  imports: [CommonModule],
})
export class ProductCardComponent {
  products = [
    {
      id: 1,
      title: 'Awesome Fantastic Super Uber Makeup Stuff',
      author: 'EgoistDeveloper',
      category: 'e-commerce',
      price: 23,
      downloads: '34k Downloads',
      rating: 5,
      reviews: 45,
      image: 'https://i.pinimg.com/474x/2c/0d/e5/2c0de5ab3446c2fcfdf1e8ec7231ee14.jpg',
    },
    // // Ajoutez plus de produits ici si nécessaire
    // {
    //   id: 2,
    //   title: 'Another Product Title',
    //   author: 'AnotherDeveloper',
    //   category: 'fashion',
    //   price: 45,
    //   downloads: '12k Downloads',
    //   rating: 4,
    //   reviews: 30,
    //   image: 'https://images.unsplash.com/photo-1609944963113-77093eaba5cc?auto=format&fit=crop&w=1170&q=80',
    // },
  ];
}
