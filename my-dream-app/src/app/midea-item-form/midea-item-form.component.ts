import { Component, OnInit, Inject } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { max } from 'rxjs';
import { MideaItemService } from '../midea-item.service';
import { lookupListToken } from '../providers';

@Component({
  selector: 'app-midea-item-form',
  templateUrl: './midea-item-form.component.html',
  styleUrls: ['./midea-item-form.component.css']
})
export class MideaItemFormComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    mideam: this.formBuilder.control('Movies'),
    //VALIDATION: BUILD IN
    name: this.formBuilder.control('', Validators.compose([
      Validators.required,
      Validators.pattern('[\\w\\-\\s\\/]+')
    ])),
    category: this.formBuilder.control(''),
    // year: this.formBuilder.control('', this.yearValidator),
  });

  constructor(
    private formBuilder: FormBuilder, 
    private mideaItemService: MideaItemService,
    @Inject(lookupListToken) public lookupLists: any) {}

  ngOnInit(): void {
    // No need to initialize the form here again
  }

  // VALIDATION: CUSTOME
  // yearValidator(control: FormControl) {
  //   if (control.value.trim().length === 0) {
  //     return null;
  //   }
  //   const year = parseInt(control.value, 10);
  //   const minYear = 1900;
  //   const maxYear = 2100;
  //   if (year >= minYear && year <= maxYear) {
  //     return null;
  //   } else {
  //     return { 
  //       year: {
  //         min: minYear,
  //         max: maxYear
  //       }
  //   }
  // }

  onSubmit(mideaItem: any) {
    console.log(mideaItem);
    this.mideaItemService.add(mideaItem)
  }
}
