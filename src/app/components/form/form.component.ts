import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Output() paramsSelected = new EventEmitter<any>();

  categorySelected = 'general';
  countrySelected = 'ar';

  categories:any[] = [
    { value: 'general', name: 'General'},
    { value: 'business', name: 'Business'},
    { value: 'entertainment', name: 'Entertainment'},
    { value: 'health', name: 'Health'},
    { value: 'science', name: 'Science'},
    { value: 'sports', name: 'Sports'},
    { value: 'technology', name: 'Technology'},
  ]

  countries:any[] = [
    { value: 'ar', name: 'Argentina'},
    { value: 'br', name: 'Brasil'},
    { value: 'fr', name: 'Francia'},
    { value: 'hu', name: 'Hungria'},
    { value: 'mx', name: 'Mexico'},
    { value: 'gb', name: 'United Kingdom'},
  ]


  searchNews() {

   const PARAMS = {
     category: this.categorySelected,
     country: this.countrySelected
   }

   // emit
    this.paramsSelected.emit(PARAMS);
  }

  ngOnInit(): void {
    //
  }

}
