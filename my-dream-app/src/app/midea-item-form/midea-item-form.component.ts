import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { max } from 'rxjs';

@Component({
  selector: 'app-midea-item-form',
  templateUrl: './midea-item-form.component.html',
  styleUrls: ['./midea-item-form.component.css']
})
export class MideaItemFormComponent implements OnInit {

  form: FormGroup = new FormGroup({
    mideam: new FormControl('Movies'),
    //VALIDATION: BUILD IN
    name: new FormControl('', Validators.compose([
      Validators.required,
      Validators.pattern('[\\w\\-\\s\\/]+')
    ])),
    category: new FormControl(''),
    // year: new FormControl('', this.yearValidator),
  });

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

  onSubmit(mideaItemForm: any) {
    console.log(mideaItemForm);
  }
}
