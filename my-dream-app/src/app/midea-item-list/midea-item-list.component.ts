import { Component } from '@angular/core';

@Component({
  selector: 'app-midea-item-list',
  templateUrl: './midea-item-list.component.html',
  styleUrls: ['./midea-item-list.component.css']
})
export class MideaItemListComponent {
  mideaItems =[
    {
      id: 1,
      name: "Tharushi",
      description: "I am 24 years"
    },
    {
      id: 2,
      name: "Chethana",
      description: "I am 24 years"
    },    
  ]
  
}
