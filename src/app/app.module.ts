import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountriesComponent } from './pages/countries-component/countries-component.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsCountryComponent } from './pages/details-country/details-country.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { routingTable } from './routes';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { ThemeService } from './components/header/theme.service';

import { CountryService } from './services/country.service';
@NgModule({
  declarations: [
    AppComponent,
    CountriesComponent,
    DetailsCountryComponent,
    PageNotFoundComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routingTable),
  ],
  providers: [CountryService, ThemeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
