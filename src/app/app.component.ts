import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<app-spinner></app-spinner> 
  <div>
    <div class="titlePage">
      <h1>FLIGHT BOOKING</h1>
    </div>
    <router-outlet></router-outlet>
  </div>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'newshoreAir_App';
}
