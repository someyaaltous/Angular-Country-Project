import { CountriesComponent } from './pages/countries-component/countries-component.component';
import { DetailsCountryComponent } from './pages/details-country/details-country.component';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';

export const routingTable = [
  { path: '', redirectTo: '/countries', pathMatch: 'full' },
  { path: 'countries', component: CountriesComponent },
  { path: 'countries/:name', component: DetailsCountryComponent },
  { path: '**', component: PageNotFoundComponent },
];
