import type { Country } from "../interfaces/country-interface";
import type { RESTCountry } from "../interfaces/rest-countries.interfaces";

export class CountryMapper {

    static mapRestCountryToCountry( restCountry: RESTCountry ): Country {
        const {
            capital: capitalArray = [],
            cca2,
            flag,
            population,
            region,
            subregion
        } = restCountry;

        const capital = Array.isArray(capitalArray) ? capitalArray.join(', ') : '';
        const svg = restCountry.flags?.svg ?? '';
        const name = restCountry.translations['spa'].common ?? '';

        return {
            capital,
            cca2,
            flag,
            flagSvg: svg,
            name,
            population,
            region,
            subregion
        };
    }


    static mapRestCountryArrayToCountryArray( restCountries: RESTCountry[] ): Country[] {
        return restCountries.map(this.mapRestCountryToCountry);
    }

}