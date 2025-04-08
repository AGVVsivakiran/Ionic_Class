import { Component, OnInit } from '@angular/core';
import { IonTabBar, IonTabButton, IonIcon, IonLabel, IonTabs } from "@ionic/angular/standalone";
import { addIcons } from 'ionicons';
import { chatboxEllipses, home, location, heart, person } from 'ionicons/icons';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: true,
  imports: [IonTabs, IonLabel, IonIcon, IonTabButton, IonTabBar,  ]
})
export class TabsPage implements OnInit {

  constructor() { 
    addIcons({home,location,heart,chatboxEllipses,person});
  }

  ngOnInit() {
  }

}
