import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { mailOutline, keyOutline, eyeOutline,eyeOffOutline, lockClosed } from 'ionicons/icons';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {
      addIcons({
        mailOutline,
        keyOutline,
        eyeOutline,
        eyeOffOutline,
        lockClosed,
      })
      }
}
