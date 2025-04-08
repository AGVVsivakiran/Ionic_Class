import { CUSTOM_ELEMENTS_SCHEMA, Component, OnInit } from '@angular/core';
import { IonicSlides, IonRow } from '@ionic/angular/standalone';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  imports: [ IonRow],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BannerComponent  implements OnInit {
//swiper start
  swiperModules = [IonicSlides];
bannerImages?: any[] = [
  { id: '1', banner: 'assets/banners/1.jpg', active:true, restauran_id: '1'},
  { id: '2', banner: 'assets/banners/2.jpg', active: true },
  {id: '3', banner: 'assets/banners/3.jpg', active: true },
]
//swiper end
  constructor() { }

  ngOnInit() {}

}
