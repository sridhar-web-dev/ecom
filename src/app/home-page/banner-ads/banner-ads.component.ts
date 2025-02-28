import { Component } from '@angular/core';

@Component({
  selector: 'app-banner-ads',
  templateUrl: './banner-ads.component.html',
  styleUrls: ['./banner-ads.component.css']
})
export class BannerAdsComponent {
  images = [
    'assets/img/ads1.webp',
    'assets/img/ads2.webp',
    'assets/img/ads3.webp'
  ];
fade: any;
}
