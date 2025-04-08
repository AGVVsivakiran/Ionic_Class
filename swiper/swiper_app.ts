import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { register } from 'swiper/element/bundle'; //swiper imported


@Component({
    selector: 'app-banner-slider',
    templateUrl: './banner-slider.page.html',
    styleUrls: ['./banner-slider.page.scss'],
    standalone: true,
    imports: [IonicModule]
  })
  export class BannerSliderPage implements OnInit {
    ngOnInit(): void {
      // Register Swiper web component
      register();
    }
  }
