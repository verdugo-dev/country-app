import { Component, input } from '@angular/core';
import type { Country } from '../../interfaces/country-interface';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'country-list',
  imports: [ DecimalPipe ],
  templateUrl: './country-list.component.html',
  styleUrl: './country-list.component.css'
})
export class CountryListComponent {

  countries = input.required<Country[]>();

}
