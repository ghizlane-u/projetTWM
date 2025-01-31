import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-colddrinks',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './colddrinks.component.html',
  styleUrls: ['./colddrinks.component.css']
})
export class ColddrinksComponent {
  stars = [1, 2, 3, 4, 5];
  products = [
    { name: 'Jus de fraise', price: 48, image: 'https://i.pinimg.com/736x/da/54/b6/da54b697ac3ea5e651b57a1dce9cdaf2.jpg', rating: 0 },
    { name: 'Jus de citron', price: 35, image: 'https://i.pinimg.com/736x/0c/c2/90/0cc290b8c36387c0b602d373e6f53cf9.jpg', rating: 0 },
    { name: 'Jus d orange', price: 35, image: 'https://i.pinimg.com/736x/80/60/e7/8060e7d97935a9142fd8461b36fe586e.jpg', rating: 0 },
    { name: 'Jus de pomme', price: 35, image: 'https://i.pinimg.com/474x/02/9d/d4/029dd4c838335415d9d77b53784e7032.jpg', rating: 0 },
    { name: 'Jus de mangue', price: 35, image: 'https://i.pinimg.com/474x/49/c5/96/49c5969e6055667f584ecc1a22803c83.jpg', rating: 0 },
    { name: 'Jus de raisin', price: 35, image: 'https://i.pinimg.com/474x/b9/50/09/b95009a9fbb0f72eff83def830f9e3c5.jpg', rating: 0 },
    { name: 'Jus de pastèque', price: 35, image: 'https://i.pinimg.com/736x/98/f5/db/98f5dbf3a275db39e6b7dcaf5e021cfb.jpg', rating: 0 },
    { name: 'Jus de carotte', price: 35, image: 'https://i.pinimg.com/474x/0f/20/88/0f20885e313e7cd9c1d4aff1adb96f82.jpg', rating: 0 },
    { name: 'Jus de grenade', price: 35, image: 'https://i.pinimg.com/474x/a4/30/8a/a4308ab90348b6f56ac00c96fc41d90e.jpg', rating: 0 },
    { name: 'Jus de concombre', price: 35, image: 'https://i.pinimg.com/474x/b3/51/7a/b3517ab8aba154fafb1fbb7c70fbf8df.jpg', rating: 0 },
    { name: 'Jus d ananas', price: 35, image: 'https://i.pinimg.com/474x/2d/9b/33/2d9b33b919c92306abe69ddf84a41ff4.jpg', rating: 0 },
    { name: 'Jus de pamplemousse', price: 40, image: 'https://i.pinimg.com/474x/33/62/d7/3362d76d0093245ee7707d1a96b37c4a.jpg', rating: 0 },
    { name: 'Jus de kiwi', price: 35, image: 'https://i.pinimg.com/736x/7c/75/01/7c750131cf5ee7dd143ce927f3294928.jpg', rating: 0 },
    { name: 'Jus de cerise', price: 35, image: 'https://i.pinimg.com/736x/6d/e3/0a/6de30a362ab24f4a36948d45e2220a72.jpg', rating: 0 }
  ];

  rateProduct(product: any, rating: number): void {
    product.rating = rating;
  }
}
