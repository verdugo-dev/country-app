import { Component, inject, resource, signal } from '@angular/core';
import { SerchInputComponent } from '../../components/serch-input/serch-input.component';
import { CountryListComponent } from "../../components/country-list/country-list.component";
import { CountryService } from '../../services/country.service';
import type { Country } from '../../interfaces/country-interface';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-by-capital-page',
  imports: [SerchInputComponent, CountryListComponent],
  templateUrl: './by-capital-page.component.html',
  styleUrl: './by-capital-page.component.css'
})
export class ByCapitalPageComponent {

  countryService = inject( CountryService );
  query = signal('');

  countryResource = resource({
    request: () => ({ query: this.query() }),
    loader: async({ request }) => {
      if ( !request.query ) return [];

      return await firstValueFrom(
        this.countryService.searchByCapital(request.query)
      );
    },
  })

  // isLoading = signal(false);
  // isError = signal<string | null>(null)
  // countries = signal<Country[]>([])

  // onSearch( query: string ) {
  //   if ( this.isLoading() ) return;

  //   this.isLoading.set(true);
  //   this.isError.set(null);
    
  //   this.countryService.searchByCapital( query )
  //     .subscribe({
  //       next: (countries) => {
  //         this.isLoading.set(false);
  //         this.countries.set(countries);
  //       },
  //       error: ( err ) => {
  //         this.isLoading.set(false);
  //         this.countries.set([]);
  //         this.isError.set(err);
  //       }
  //     })
  // }
}
