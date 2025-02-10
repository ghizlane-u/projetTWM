import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-cake',
  imports: [CommonModule],
  templateUrl: './cake.component.html',
  styleUrl: './cake.component.css'
})




export class CakeComponent {
  stars = [1, 2, 3, 4, 5];
  products = [
    {
      name: 'Coffee Hazelnut Tart',
      price: 60,
      image: 'https://i.pinimg.com/736x/d2/70/ad/d270ad14839f1e0e328dbee18958c3e6.jpg',
      description: 'Une tarte gourmande alliant le café intense et les noisettes croquantes, sur une pâte sablée légère  ',
      rating: 4
    },
    {
      name: 'Easy No-Bake Lotus Biscoff Cheesecake',
      price: 45,
      image: 'https://i.pinimg.com/736x/fe/5c/e1/fe5ce1ee281049c06a7ed30aae9e8a8f.jpg',
      description: 'Ce cheesecake onctueux associe une crème légère à une base croquante de biscuits Lotus Biscoff.',
      rating: 5
    },
    {
      name: 'Peanut Butter Cup Cheesecake',
      price: 65,
      image: 'https://i.pinimg.com/736x/ee/3c/81/ee3c81e6f75b41e16bfcd4243af89245.jpg',
      description: 'Cheesecake crémeux au beurre de cacahuète, un délice pour les amateurs de peanut butter !',
      rating: 3
    },
    {
      name: 'Dubai Chocolate Pistachio Cake',
      price: 55,
      image: 'https://i.pinimg.com/736x/77/e0/68/77e068d6b517496d273776352e58d96c.jpg',
      description: 'Un délicieux gâteau à base de chocolat, parfait pour satisfaire vos envies sucrées !',
      rating: 4
    },
    {
      name: 'Caramel Cheesecake Ice Cream',
      price: 25,
      image: 'https://i.pinimg.com/736x/cf/62/56/cf62564b7be8ac969508f13aca4d67c0.jpg',
      description: 'Crème glacée au cheesecake et caramel, un dessert rafraîchissant et gourmand.',
      rating: 5
    },
    {
      name: 'Cupcake with Caramel',
      price: 50,
      image: 'https://i.pinimg.com/736x/2d/a9/19/2da9190b5b48716f5d47895670e3a49e.jpg',
      description: 'Cupcake moelleux avec un cœur de caramel fondant, un vrai délice !',
      rating: 4
    },
    {
      name: 'Croissants au chocolat et aux petits fruits',
      price: 35,
      image: 'https://i.pinimg.com/736x/cb/bf/5b/cbbf5b482e2183e10f3b7dd9428a3866.jpg',
      description: 'Jus naturel de pastèque, léger et sucré, idéal pour l\'été.',
      rating: 3
    },
    {
      name: 'Pecan Rum Cake',
      price: 35,
      image: 'https://i.pinimg.com/736x/95/8b/71/958b718b0787bc7c706310605112555b.jpg',
      description: 'Gâteau aux noix de pécan et au rhum, un goût authentique et raffiné.',
      rating: 5
    },
    {
      name: 'Nutella Crepes',
      price: 30,
      image: 'https://i.pinimg.com/736x/69/f6/6a/69f66a1db143f87267a7298b477f0081.jpg',
      description: 'De délicieuses crêpes garnies de Nutella fondant, un véritable régal pour les amateurs de chocolat !',
      rating: 4
    },
    {
      name: 'Buckwheat Crepes with Dulce de Leche',
      price: 35,
      image: 'https://i.pinimg.com/736x/48/e0/f7/48e0f74ab8df1d1039e4603549d1a047.jpg',
      description: 'Des crêpes légères et moelleuses, garnies de dulce de leche crémeux pour un dessert sucré et savoureux.',
      rating: 3
    },
    {
      name: 'Oreo crepe',
      price: 55,
      image: 'https://i.pinimg.com/736x/c8/74/a1/c874a19bcfb9224ef3ca7cbf806b6905.jpg',
      description: 'Des crêpes légères et moelleuses, garnies de morceaux d\'Oreo croquants et d\'une touche de chocolat.',
      rating: 5
    },
    {
      name: 'The Smokey Mayo Croiffle',
      price: 55,
      image: 'Smokry.jpg',
      description: 'Un croissant feuilleté et tartiné à la mayonnaise, généreusement farci aux œufs brouillés et à la dinde fumée.',
      rating: 4
    },
    {
      name: 'Le New-York roll croissant',
      price: 40,
      image: 'https://i.pinimg.com/736x/27/32/32/27323275399327faf5e312e771327178.jpg',
      description: 'Des crêpes légères et moelleuses, garnies de morceaux d\'Oreo croquants et d\'une touche de chocolat.',
      rating: 4
    },
    {
      name: 'Pistachio Kunafette',
      price: 35,
      image: '3.jpeg',
      description: 'Crêpe garnie de cream cheese à la pistache et kunafa croustillante, servie avec une sauce pistache.',
      rating: 3
    },
    {
      name: 'Milk Chocolate Sticks',
      price: 55,
      image: 'milcake.jpg',
      description: '2 bâtonnets de gaufres servis avec du chocolat au lait et des miettes.',
      rating: 4
    }
  ];
  ngOnInit() {
    // Réinitialiser la notation des produits lors du chargement
    this.resetRatings();
  }

  // Réinitialiser les évaluations de tous les produits à 0
  resetRatings() {
    this.products.forEach(product => {
      product.rating = 0;
    });
  }

  // Fonction pour mettre à jour la notation d'un produit
  rateProduct(product: any, rating: number): void {
    product.rating = rating;
  }
}

