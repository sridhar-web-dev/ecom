import { Component } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categoryItems = [
    { image: 'assets/img/kilos.webp', title: 'Kilos' },
    { image: 'assets/img/mobiles.webp', title: 'Mobiles' },
    { image: 'assets/img/fashion.webp', title: 'Fashion' },
    { image: 'assets/img/electronics.webp', title: 'Electronics' },
    { image: 'assets/img/homes & Furnitures.webp', title: 'Home & Furniture' },
    { image: 'assets/img/Appliances.webp', title: 'Appliances' },
    { image: 'assets/img/Flights-booking.webp', title: 'Flight Bookings' },
    { image: 'assets/img/Beauty-Toys.webp', title: 'Beauty, Toys & More' },
    { image: 'assets/img/Two-Wheelers.webp', title: 'Two Wheelers' }
  ];
}
