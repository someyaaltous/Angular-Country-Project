import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import { region } from '../region';
import { Country } from '../modules/Country';
@Component({
  selector: 'countries-component',
  templateUrl: './countries-component.component.html',
  styleUrls: ['./countries-component.component.css'],
})
export class CountriesComponent implements OnInit {
  countries: Array<Country> = [];
  regionList = region;
  sortBy = 'All';
  countryName = '';
  searchBy: string = '';
  allCountry: Array<Country> = [];
  resluteSearch = false;
  loadingON = false;

  constructor(private countryService: CountryService) {}

  ngOnInit(): void {
    this.countryWithNameFlag();
  }
  countryWithNameFlag() {
    this.loadingON = true;

    this.countryService.getCountries().subscribe((response) => {
      this.countries = response;
      this.allCountry = response;
      this.loadingON = false;
    });
  }
  sortByRegion(event: any) {
    this.sortBy = event.target.value;

    this.countries = this.applyFilters(
      this.allCountry,
      this.countryName,
      this.sortBy
    );
    if (this.countries.length) {
      this.resluteSearch = false;
    } else {
      this.resluteSearch = true;
    }
  }
  searchCountry(event: any) {
    this.countryName = event;
    this.countries = this.applyFilters(
      this.allCountry,
      this.countryName,
      this.sortBy
    );
    if (this.countries.length) {
      this.resluteSearch = false;
    } else {
      this.resluteSearch = true;
    }
  }
  applyFilters(countries: Array<Country>, input: string, sortValue: string) {
    return countries.filter((country: any) => {
      let matches = true;
      if (input.trim() == '' && sortValue && country.region === sortValue) {
        return (matches = true);
      }
      if (input.trim() == '' && sortValue === 'All') {
        return (matches = true);
      }
      if (input && !country.name.toLowerCase().includes(input.toLowerCase())) {
        matches = false;
      }
      if (sortValue && country.region !== sortValue) {
        matches = false;
      }
      if (
        input &&
        country.name.toLowerCase().includes(input.toLowerCase()) &&
        sortValue === 'All'
      ) {
        return (matches = true);
      }

      return matches;
    });
  }
}
