import { Component } from '@angular/core';
@Component({
  selector: 'app-collections01',
  templateUrl: './collections01.component.html',
  styleUrls: ['./collections01.component.css']
})
export class Collections01Component {
  products = [
    { image: 'assets/img/c01.webp', name: 'Product 1', price: '$100' },
    { image: 'assets/img/c02.webp', name: 'Product 2', price: '$150' },
    { image: 'assets/img/c03.webp', name: 'Product 3', price: '$200' },
    { image: 'assets/img/c04.webp', name: 'Product 4', price: '$250' },
    { image: 'assets/img/c05.webp', name: 'Product 5', price: '$300' },
    { image: 'assets/img/c06.webp', name: 'Product 5', price: '$300' },
    { image: 'assets/img/c07.webp', name: 'Product 5', price: '$300' },
    { image: 'assets/img/c08.webp', name: 'Product 5', price: '$300' }
  ];
  categories = [
    {
      title: "Best of Electronics",
      products: [
      { image: 'assets/img/c01.webp', name: 'Product 1', price: '$100' },
    { image: 'assets/img/c02.webp', name: 'Product 2', price: '$150' },
    { image: 'assets/img/c03.webp', name: 'Product 3', price: '$200' },
    { image: 'assets/img/c04.webp', name: 'Product 4', price: '$250' },
    { image: 'assets/img/c05.webp', name: 'Product 5', price: '$300' },
    { image: 'assets/img/c06.webp', name: 'Product 5', price: '$300' },
    { image: 'assets/img/c07.webp', name: 'Product 5', price: '$300' },
    { image: 'assets/img/c08.webp', name: 'Product 5', price: '$300' }
      ]
    },
    {
      title: "Top Fashion Deals",
      products: [
        { image: 'assets/img/c01.webp', name: 'Product 1', price: '$100' },
    { image: 'assets/img/c02.webp', name: 'Product 2', price: '$150' },
    { image: 'assets/img/c03.webp', name: 'Product 3', price: '$200' },
    { image: 'assets/img/c04.webp', name: 'Product 4', price: '$250' },
    { image: 'assets/img/c05.webp', name: 'Product 5', price: '$300' },
    { image: 'assets/img/c06.webp', name: 'Product 5', price: '$300' },
    { image: 'assets/img/c07.webp', name: 'Product 5', price: '$300' },
    { image: 'assets/img/c08.webp', name: 'Product 5', price: '$300' }
      ]
    },
    {
      title: "Home Essentials",
      products: [
        { image: 'assets/img/c01.webp', name: 'Product 1', price: '$100' },
        { image: 'assets/img/c02.webp', name: 'Product 2', price: '$150' },
        { image: 'assets/img/c03.webp', name: 'Product 3', price: '$200' },
        { image: 'assets/img/c04.webp', name: 'Product 4', price: '$250' },
        { image: 'assets/img/c05.webp', name: 'Product 5', price: '$300' },
        { image: 'assets/img/c06.webp', name: 'Product 5', price: '$300' },
        { image: 'assets/img/c07.webp', name: 'Product 5', price: '$300' },
        { image: 'assets/img/c08.webp', name: 'Product 5', price: '$300' }
      ]
    }
  ];
}
