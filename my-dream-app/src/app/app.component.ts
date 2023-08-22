import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-dream-app';
  firstMideaItem = {
    id: 1,
    name: 'Tharushi',
    year: 2020
  }

  // onMideaItemDelete(mideaItem){}
}
