import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CountryService } from '../../services/country.service';
import { Location } from '@angular/common';
import { Country } from '../modules/Country';
import { CountryDetails } from '../modules/CountryDetails';
@Component({
  selector: 'app-details-country',
  templateUrl: './details-country.component.html',
  styleUrls: ['./details-country.component.css'],
})
export class DetailsCountryComponent implements OnInit {
  allCountries: Array<Country> = [];
  countriesDetails: Array<CountryDetails> = [];
  errorON = false;
  showBorders = false;
  loadingON = false;
  borders: Array<Country> = [];

  constructor(
    private countryService: CountryService,
    private route: ActivatedRoute,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getDetailsCountries();
  }

  getDetailsCountries() {
    this.loadingON = true;
    this.route.paramMap.subscribe((params) => {
      let name = params.get('name');
      if (name) {
        this.countryService.getDetails(name).subscribe(
          
          (res) => {
            this.showBorders=false

            this.countriesDetails = res;
            this.getDetilesAnotherCountry();

            this.loadingON = false;
          },
          (error) => {
            this.errorON = true;
          }
        );
      }
    });
  }

  getDetilesAnotherCountry() {
    this.countryService.getCountries().subscribe((countries) => {
      this.allCountries = countries;
      this.borders = this.allCountries.filter((item: any) => {
        return this.countriesDetails[0].borders.includes(item.alpha3Code);
      });
    });
  }

  onClick() {
    this.showBorders = !this.showBorders;
  }
  onClickBack() {
    this.location.back();
  }
}
