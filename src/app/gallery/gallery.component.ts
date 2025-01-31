import { Component} from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css'],
  standalone: true ,
  imports: [CommonModule] 
})
export class GalleryComponent  {
  stars = [1, 2, 3, 4, 5]; // Définir les étoiles (1 à 5)
  products = [
    {
      name: 'Milk Chocolate Crispy Rice',
      price: '45 DH',
      image: '1.jpeg',
      description: 'Une coupe délicieuse avec une base de soft serve vanille, des céréales soufflées au chocolat, et un nappage de chocolat au lait fondu pour une combinaison divine et délicieuse',
      showDescription: false,
      rating: 0
    },
    {
      name: 'Triple Hot Chocolate',
      price: '38 DH',
      image: '2.jpeg',
      description: 'Une somptueuse alliance de chocolat noir, au lait et blanc, offrant une expérience veloutée et intensément riche. Sublimé par une touche de crème ou des guimauves fondantes, il incarne l’élégance du réconfort.',
      showDescription: false,
      rating: 0
    },
    
    {
      name: 'Pistachio Kunafette',
      price: '78 DH',
      image:'3.jpeg',
      description: 'Crêpe garnie de cream cheese à la pistache et kunafa croustillante, servie avec une sauce pistache, une poudre de pistache, et un extra de kunafa',
      showDescription: false,
      rating: 0
    },
    {
      name: 'Milk Chocolate Sticks  ',
      price: '55 DH',
      image: '4.jpeg',
      description: '2 batonnets de gaufres servis avec du chocolat au lait et des miettes de biscoff',
      showDescription: false,
      rating: 0
    },
    {
      name: 'Toffee Nut Latté',
      price: '46 DH',
      image: '5.jpeg',
      description: 'Délicieuse boisson à base de caramel, noisette, et une riche saveur d’espresso. Le tout couronné de crème chantilly et un saupoudrage de biscuit Lotus.',
      showDescription: false,
      rating: 0
    },
    {
      name: 'Spiced Chai Tea',
      price: '46 DH',
      image: '6.jpeg',
      description: 'Lait tout juste chauffé avec des épices délicieuses. Recouvert d’une mousse de lait pour une texture crémeuse et de la cannelle pour une saveur épicée et chaleureuse.',
      showDescription: false,
      rating: 0
    },
    {
      name: 'The Smokey Mayo Croiffle',
      price: '39 DH',
      image: '7.jpeg',
      description: 'Un croissant feuilleté et tartiné à la mayonnaise, généreusement farci aux œufs brouillés et à la dinde fumée, au fromage emmental, et à la roquette',
      showDescription: false,
      rating: 0
    },
    {
      name: 'The Caprese Sandwich',
      price: '45 DH',
      image: '8.jpeg',
      description: 'Baguette au pesto garnie de tranches de mozzarella, de rondelles de tomate, de la roquette, et une sauce beurre à l’ail',
      showDescription: false,
      rating: 0
    }
  ];
  leftImages: string[] = [
    'left1.jpeg',
    'left2.jpeg',
    'left3.jpeg',
    'left4.jpeg'
  ];
  rightImages: string[] = [
    'right1.jpeg',
    'right2.jpeg',
    'right3.jpeg',
    'right4.jpeg'
  ];

 

  rateProduct(product: any, rating: number): void {
    product.rating = rating;
  }


}

