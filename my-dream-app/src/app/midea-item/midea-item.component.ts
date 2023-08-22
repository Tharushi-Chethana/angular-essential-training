import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-midea-item',
  templateUrl: './midea-item.component.html',
  styleUrls: ['./midea-item.component.css']
})
export class MideaItemComponent {

  @Input() MideaItem: any;
  @Output() delete = new EventEmitter();

  name = 'Student';
  description(){
    return true;
  }
  onDelete(){
    console.log('deleted');
    this.delete.emit(this.MideaItem);
  }
}
