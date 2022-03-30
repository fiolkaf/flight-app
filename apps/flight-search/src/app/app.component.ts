import { Component } from '@angular/core';
import { FlightSearchParams } from './types/flight-search-params';

@Component({
  selector: 'flight-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'flight-search';

  flightSearchParams?: FlightSearchParams;

  onSelectionChange(flightSearchParams: FlightSearchParams) {
    this.flightSearchParams = flightSearchParams;
  }
}
