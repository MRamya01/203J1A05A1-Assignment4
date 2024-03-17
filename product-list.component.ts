import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrl: './product-list.component.css'
})
export class ProductListComponent {
  products = [
    { name: 'BINGO', price: 20, description: 'Chilly Sprinkled' },
    { name: 'LAYS', price: 50, description: 'Indian Magic Masala' },
    { name: 'kURKURE', price: 30, description: 'Masala Munch' }
  ];
}


