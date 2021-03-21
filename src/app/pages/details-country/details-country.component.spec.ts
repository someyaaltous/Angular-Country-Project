import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DetailsCountryComponent } from './details-country.component';

describe('DetailsCountryComponent', () => {
  let component: DetailsCountryComponent;
  let fixture: ComponentFixture<DetailsCountryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule, HttpClientModule],

      declarations: [ DetailsCountryComponent ],
      providers: [HttpClient],

    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCountryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });


  it('should create country datiles', () => {
    expect(component).toBeTruthy();
  });

  it('should a first div have class (container) ', () => {
    const card1: HTMLElement = fixture.nativeElement.querySelector('div');
    const className1 = card1.classList;

    expect(className1).toContain('container');
  });
  it('should show a loading spinner when loadingON = true on country datiles ', () => {
    component.loadingON=true;
    fixture.detectChanges()

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
