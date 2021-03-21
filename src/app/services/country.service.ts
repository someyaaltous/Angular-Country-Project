import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CountryService {
   ROOT_URL= "https://restcountries.eu/rest/v2"
  constructor(private http: HttpClient) {}
  getCountries(): Observable<any> {
    return this.http.get(`${this.ROOT_URL}`);
  }

  getDetails(name: string):Observable<any>  {
    return this.http.get('https://restcountries.eu/rest/v2/name/' + name);
  }
}
