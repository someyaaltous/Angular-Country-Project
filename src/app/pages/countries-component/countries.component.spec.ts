import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { CountriesComponent } from './countries-component.component';
import { CountryService } from '../../services/country.service';

describe('CountriesComponent', () => {
  let component: CountriesComponent;
  let fixture: ComponentFixture<CountriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],

      declarations: [CountriesComponent],
      providers: [HttpClient, CountryService],
    }).compileComponents();
  });

  beforeEach(async () => {
    fixture = TestBed.createComponent(CountriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should CountriesComponent create', () => {
    expect(component).toBeTruthy();
  });

  it('should a first div have class (formSection) ', () => {
    const card: HTMLElement = fixture.nativeElement.querySelector('div');
    const className = card.classList;

    expect(className).toContain('formSection');
  });

  it('should show a loading spinner when loadingON = true on CountriesComponent', () => {
    component.loadingON = true;
    fixture.detectChanges();

    const div: HTMLUListElement = fixture.nativeElement.querySelector('div');
    expect(div.isConnected).toBeTruthy();
  });

  it('should not show a loading spinner when loadingON = false on CountriesComponent', () => {
    component.loadingON = false;
    fixture.detectChanges();

    const span: HTMLUListElement = fixture.nativeElement.querySelector('span');
    expect(span).toBeFalsy();
  });
});
