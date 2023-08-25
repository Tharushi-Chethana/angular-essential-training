import { Component } from '@angular/core';

@Component({
  selector: 'app-midea-item-form',
  templateUrl: './midea-item-form.component.html',
  styleUrls: ['./midea-item-form.component.css']
})
export class MideaItemFormComponent {
  onSubmit(mideaItemForm: any){
    console.log(mideaItemForm)
  }
}
