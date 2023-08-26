import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MideaItemService {
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
  ];

  get(){
    return this.mideaItems;
  }

  add(mideaItem : any){
    this.mideaItems.push(mideaItem);
  }

  delete(mideaItem: any){
    const index = this.mideaItems.indexOf(mideaItem);
    if(index >= 0){
      this.mideaItems.splice(index,1)
    }
  }

}
