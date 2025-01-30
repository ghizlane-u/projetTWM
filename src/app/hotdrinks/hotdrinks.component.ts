import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hotdrinks',
  templateUrl: './hotdrinks.component.html',
  styleUrls: ['./hotdrinks.component.css'],
  standalone: true ,
  imports: [CommonModule]
})
export class HotdrinksComponent {
  // Liste des produits avec une note par défaut
  products = [
    { name: 'Triple Hot Chocolate', image: 'h1.jpeg', price: 38, rating: 0 },
    { name: 'Triple Chocolate Latte/Cappuccino', image: 'h2.jpeg', price: 48, rating: 0 },
    { name: 'Latté', image: 'h3.jpeg', price: 32, rating: 0 },
    { name: 'Cappuccino', image: 'h4.jpeg', price: 32, rating: 0 },
    { name: 'Americano', image: 'h5.jpeg', price: 28, rating: 0 },
    { name: 'Espresso', image: 'h6.jpeg', price: 20, rating: 0 },
    { name: 'Cortado', image: 'h7.jpeg', price: 26, rating: 0},
    { name: 'Flat White', image: 'h8.jpeg', price: 30, rating: 0 },
    { name: 'Mocha', image: 'h9.jpeg', price: 38, rating: 0},
    { name: 'Mocha Blanc', image: 'h10.jpeg', price: 38, rating: 0 },
    { name: 'Spanish Latté', image: 'h11.jpeg', price: 38, rating: 0 },
    { name: 'Chocolat Chaud', image: 'h12.jpeg', price: 40, rating: 0},
    { name: 'Honey Pumpkin Spice', image: 'h13.jpeg', price: 40, rating: 0 },
    { name: 'Latté Pistache', image: 'h14.jpeg', price: 42, rating: 0},
    { name: 'Caramel Salé', image: 'h15.jpeg', price: 38, rating: 0 },
    { name: 'Mocha Caramel', image: 'h16.jpeg', price: 40, rating: 0 },
    { name: 'Gold Cappuccino', image: 'h17.jpeg', price: 42, rating: 0 }
  ];

  stars: number[] = [1, 2, 3, 4, 5]; // Représente les 5 étoiles

  // Fonction pour gérer le changement de note d'un produit
  rateProduct(product: any, rating: number): void {
    product.rating = rating; // Met à jour la note du produit
  }
}

