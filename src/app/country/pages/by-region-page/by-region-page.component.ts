import { Component } from '@angular/core';
import { SerchInputComponent } from "../../components/serch-input/serch-input.component";
import { CountryListComponent } from "../../components/country-list/country-list.component";

@Component({
  selector: 'app-by-region-page',
  imports: [SerchInputComponent, CountryListComponent],
  templateUrl: './by-region-page.component.html',
  styleUrl: './by-region-page.component.css'
})
export class ByRegionPageComponent {

}
