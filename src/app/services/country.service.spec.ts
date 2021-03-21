import { TestBed } from '@angular/core/testing';

import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { CountryService } from './country.service';

describe('CountryService', () => {
  let service: CountryService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [CountryService],
    });
    service = TestBed.inject(CountryService);
    httpMock = TestBed.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should return countries from api via GET', () => {
    const dummyCountry = [
      { userId: '1', id: 1, body: 'Hello World', title: 'testing Angular' },
      { userId: '2', id: 2, body: 'Hello World', title: 'testing Angular2' },
    ];
    service.getCountries().subscribe((country) => {
      expect(country.length).toBe(2);
    });
    const request = httpMock.expectOne(`${service.ROOT_URL}`);
    expect(request.request.method).toBe('GET');
    request.flush(dummyCountry);
  });

  // it('should return country details by name from api via GET', () => {
  //   const dummyCountry = [
  //     { userId: '1', id: 1, body: 'Hello World', title: 'testing Angular' },
     
  //   ];
  //   service.getCountries().subscribe((detailsCountry) => {
  //     expect(detailsCountry).toBe(1);
  //   });
  //   const request = httpMock.expectOne(`${service.ROOT_URL}`);
  //   expect(request.request.method).toBe('GET');
  //   request.flush(dummyCountry);
  // });
});
