import { MideaItemService } from './../midea-item.service';
import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-midea-item-list',
  templateUrl: './midea-item-list.component.html',
  styleUrls: ['./midea-item-list.component.css']
})
export class MideaItemListComponent implements OnInit {
  mideaItems: any; 
  
  constructor(private mideaItemService: MideaItemService) {}

  ngOnInit() {
    this.mideaItems = this.mideaItemService.get();
  }

  onMideaItemDelete(mideaItem: any){
    this.mideaItemService.delete(mideaItem)
  }

}
