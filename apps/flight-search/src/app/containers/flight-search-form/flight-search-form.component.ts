import { Airport } from '@flight-app/models';
import { Component, Output, EventEmitter } from '@angular/core';

type FlightSearchParams = {
  departureAirportId?: string;
  destinationAirportId?: string;
  departureDate?: Date;
  returnDate?: Date;
}

@Component({
  selector: 'flight-app-flight-search-form',
  templateUrl: './flight-search-form.component.html',
  styleUrls: ['./flight-search-form.component.scss']
})
export class FlightSearchFormComponent {

  @Output() selectionChange = new EventEmitter<FlightSearchParams>();

  private searchParams: FlightSearchParams = {};

  onDepartureAirportSelected(airport: Airport) {
    this.searchParams.departureAirportId = airport.id;
    this.validateAndEmitSearchParameters();
  }

  onDestinationAirportSelected(airport: Airport) {
    this.searchParams.destinationAirportId = airport.id;
    this.validateAndEmitSearchParameters();
  }

  onDepartureDateSelected(date: Date) {
    this.searchParams.departureDate = date;
    this.validateAndEmitSearchParameters();
  }

  onReturnDateSelected(date: Date) {
    this.searchParams.returnDate = date;
    this.validateAndEmitSearchParameters();
  }

  validateAndEmitSearchParameters() {
    if (!this.searchParams.departureAirportId ||
        !this.searchParams.destinationAirportId ||
        !this.searchParams.departureDate) {
      return;
    }

    this.selectionChange.emit(this.searchParams);
  }
}
