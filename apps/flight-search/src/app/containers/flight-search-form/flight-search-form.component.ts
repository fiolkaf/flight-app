import { Airport } from '@flight-app/models';
import { FlightSearchParams } from '../../types/flight-search-params';
import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'flight-app-flight-search-form',
  templateUrl: './flight-search-form.component.html',
  styleUrls: ['./flight-search-form.component.scss']
})
export class FlightSearchFormComponent {

  @Output() selectionChange = new EventEmitter<FlightSearchParams>();

  private searchParams: FlightSearchParams = {};

  onDepartureAirportSelected(airport: Airport) {
    this.searchParams.departureAirportIataCode = airport.iataCode;
    this.validateAndEmitSearchParameters();
  }

  onDepartureDateSelected(date: Date) {
    const isoDateTime = new Date(date.getTime() - (date.getTimezoneOffset() * 60000)).toISOString().split('T')[0];
    this.searchParams.departureDate = isoDateTime;
    this.validateAndEmitSearchParameters();
  }

  validateAndEmitSearchParameters() {
    if (!this.searchParams.departureAirportIataCode) {
      return;
    }

    this.selectionChange.emit(this.searchParams);
  }
}
