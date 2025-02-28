import { Component } from '@angular/core';

@Component({
  selector: 'app-collections02',
  templateUrl: './collections02.component.html',
  styleUrls: ['./collections02.component.css']
})
export class Collections02Component {
  categoryGroups = [
    {
      title: "Best Deals on Mobiles",
      categories: [
        { image: "assets/img/c01.webp", name: "Smartphones", offer: "Up to 50% Off" },
        { image: "assets/img/c02.webp", name: "Tablets", offer: "Flat 30% Off" },
        { image: "assets/img/c03.webp", name: "Clothing", offer: "Buy 1 Get 1 Free" },
        { image: "assets/img/c04.webp", name: "Shoes", offer: "Flat 40% Off" }
      ]
    },
    {
      title: "Trending Fashion",
      categories: [
        { image: "assets/img/c01.webp", name: "Smartphones", offer: "Up to 50% Off" },
        { image: "assets/img/c02.webp", name: "Tablets", offer: "Flat 30% Off" },
        { image: "assets/img/c03.webp", name: "Clothing", offer: "Buy 1 Get 1 Free" },
        { image: "assets/img/c04.webp", name: "Shoes", offer: "Flat 40% Off" }
      ]
    },
    {
      title: "Home Essentials",
      categories: [
        { image: "assets/img/c01.webp", name: "Smartphones", offer: "Up to 50% Off" },
        { image: "assets/img/c02.webp", name: "Tablets", offer: "Flat 30% Off" },
        { image: "assets/img/c03.webp", name: "Clothing", offer: "Buy 1 Get 1 Free" },
        { image: "assets/img/c04.webp", name: "Shoes", offer: "Flat 40% Off" }
      ]
    }
  ];
}
