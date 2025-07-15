import { Component, input, output } from '@angular/core';

@Component({
  selector: 'country-search-input',
  imports: [],
  templateUrl: './serch-input.component.html',
  styleUrl: './serch-input.component.css'
})
export class SerchInputComponent {

  placeholder = input('Buscar');
  value = output<string>();

  onSearch( value: string ) {
    console.log({value})
  }

}
