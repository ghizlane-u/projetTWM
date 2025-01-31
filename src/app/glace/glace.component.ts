import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-glace',
  imports: [CommonModule],
  templateUrl: './glace.component.html',
  styleUrls: ['./glace.component.css'],
  standalone: true ,
})

export class GlaceComponent {
  categories = [
   { title: 'Cone-Tastic',
      products: [
        { name: 'knafeh Pistachio Cone-Tastic', image: 'g1.jpg', price: 45, rating: 0,description:'Un cornet unique avec une garniture spéciale de pistache et kunafa, servi avec une glace à la vanille, une sauce à la pistache, et de la pistache en poudre'},
        { name: 'Crispy Oreo Cone-Tastic', image: 'g2.jpg', price: 43, rating: 0,description:'Un délicieux cornet avec une garniture de chocolat et de riz soufflé, servi avec une glace à la vanille, du chocolat au lait, et des Oreo en poudre'},
        { name: 'Lotus Cone-Tastic', image: 'g3.jpg', price: 43, rating: 0,description:'Un cornet spécial avec une délicieuse garniture de sauce Lotus, servi avec de la glace à la vanille, de la sauce Lotus, et du Biscoff en poudre' },
        { name: 'Snickers Cone-Tastic', image: 'g4.jpg', price: 43, rating: 0 ,description:'Un cornet unique avec une garniture de beurre de cacahuète croustillant, servi avec de la glace à la vanille, de la sauce caramel et des cacahuètes'},
        { name: 'Lemon Cone-Tastic ', image: 'g5.jpg', price: 38, rating: 0,description:'Un cornet fruité avec une garniture de chocolat blanc, servi avec de la glace à la vanille, de la sauce au citron et des vermicelles' },
        { name: 'Bubblegum Cone-Tastic', image: 'g6.jpg', price: 38, rating: 0 ,description:'Un cornet festif avec une garniture de chocolat blanc, servi avec de la glace à la vanille, de la sauce chewing-gum et des vermicelles'},
      ]
    },
    { title: 'Soft Serve',
      products: [
    { name: 'Viral Snickers', image: 'g7.jpg', price: 43, rating: 0,description:'Un délicieux soft serve avec des crackers salés et une base croquante au beurre de cacahuète, garni de biscuits salés et d’une sauce cacahuète'},
    { name: 'Viral Toffee Nut', image: 'g8.jpg', price: 43, rating: 0 ,description:'Un soft serve irrésistible avec une base de céréales dorées au miel et chocolat au lait, garni d’une sauce caramelly et d’un supplément de délicieuses céréales croquantes'},
    { name: 'Viral Cookie Biscoff', image: 'g9.jpg', price: 43, rating: 0,description:'Un soft serve savoureux avec une base au Biscoff et chocolat au lait, garni de biscuits belges Spéculoos et de sauce Lotus'},
    { name: 'Viral Baklava', image: 'g10.jpg', price: 46, rating: 0,description:'Un soft serve spécial du Moyen-Orient avec une base de pâte filo de Baklava et de crème à la pistache, garni d’une sauce croquante aux pistaches et d’un supplément de Baklava' },
    { name: 'Peanut Butter Brownie', image: 'g11.jpg', price: 37, rating: 0 ,description:'Un délicieux soft serve avec une base de brownie, un nappage au beurre de cacahuète et chocolat au lait, et des éclats de cacahuètes'},
    { name: 'Snickers Cripser', image: 'g12.jpg', price: 37, rating: 0,description:'Un savoureux soft serve avec une base de sauce caramel, un nappage Caramelly, et des éclats de cacahuètes'},
    { name: 'Crunchy Chocolate Tiramisu', image: 'g13.jpg', price: 37, rating: 0 ,description:'Un soft serve indulgent avec une base de cake au chocolat, un shot ‘espresso pour une saveur audacieuse, et un nappage au Ferrero Rocher'},
    { name: 'Crunchy Chocolate Rocher', image: 'g14.jpg', price: 37, rating: 0,description:'Un délicieux soft serve avec une base croustillante et un nappage au Ferrero Rocher et Kunafa'},
    { name: 'Crunchy Biscoff', image: 'g15.jpg', price: 37, rating: 0,description:'Un soft serve savoureux avec une base de Biscoff, un nappage au Lotus, et des miettes du biscuit belge' },
    { name: 'Crunchy Raffaello', image: 'g16.jpg', price: 37, rating: 0 ,description:'Un soft serve avec une délicieuse base croustillante, un nappage au Raffaello et de la feuilletine pour un extra de croustillance'},
    { name: 'Wafer Bueno', image: 'g17.jpg', price: 37, rating: 0 ,description:'Un délicat soft serve avec une base de cake au chocolat, un délicieux nappage au Kinder Bueno et des gaufrettes croustillantes'},
    { name: 'Baklava Pistachio', image: 'g18.jpg', price: 40, rating: 0,description:'Un soft serve unique avec une base de kunafa beurrée et croustillante, un nappage à la pistache, recouvert de kunafa pour un extra de croustillance' },
    { name: 'Rainbow Birthday Cake', image: 'g19.jpg', price: 37, rating: 0 ,description:'Un soft serve festif avec une base de cake à la vanille, un nappage au Bubble Gum, recouvert d’un assortiment coloré de vermicelles'},
    { name: 'Strawberry Cheesecake', image: 'g20.jpg', price: 37, rating: 0 ,description:'Un soft serve avec une base de biscuit belge et un nappage à la fraise, servi avec des miettes de Biscoff'},
    { name: 'Blueberry Cheesecake', image: 'g21.jpg', price: 37, rating: 0 ,description:'Un soft serve rafraîchissant, avec une base de purée fruitée, un nappage aux myrtilles, servi avec des miettes de Biscoff'},
    { name: 'Berry Bubble Tea', image: 'g22.jpg', price: 37, rating: 0,description:'Un soft serve rafraîchissant, ave une base de purée fruitée, un nappage aux myrtilles et des perles de Bubble Tea' },
    { name: 'Affogato', image: 'g23.jpg', price: 37, rating: 0 ,description:'Un soft serve décadent à la vanille, servi avec un shot d’espresso corsé'},]
      },
  
  ];

  stars: number[] = [1, 2, 3, 4, 5]; // Représente les 5 étoiles

  // Fonction pour gérer le changement de note d'un produit
  rateProduct(product: any, rating: number): void {
    product.rating = rating; // Met à jour la note du produit
  }

}
