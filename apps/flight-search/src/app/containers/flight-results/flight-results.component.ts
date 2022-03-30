import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { AmadeusService } from '../../services/amadeus.service';
import { BehaviorSubject } from 'rxjs';
import { FlightDestination } from '@flight-app/models';

@Component({
  selector: 'flight-app-flight-results',
  templateUrl: './flight-results.component.html',
  styleUrls: ['./flight-results.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FlightResultsComponent {

  error = '';
  loading = false;
  flightDestinations$ = new BehaviorSubject<FlightDestination[]>([]);

  constructor(private service: AmadeusService) {}

  _departureAirportIataCode?: string;
  @Input() set departureAirportIataCode(value: string | undefined) {
    if (!value) return;

    this._departureAirportIataCode = value;
    this.searchFlights()
  }

  _departureDate?: string;
  @Input() set departureDate(value: string | undefined) {
    if (!value) return;

    this._departureDate = value;
    this.searchFlights()
  }

  searchFlights() {
    this.error = '';
    const searchParams = {
      departureAirportIataCode: this._departureAirportIataCode,
      departureDate: this._departureDate
    };
    this.flightDestinations$.next([]);
    this.loading = true;
    this.service.getFlightDestinations(searchParams).subscribe(
      (flightDestinations: FlightDestination[]) => this.flightDestinations$.next(flightDestinations),
      (err) => {
        this.loading = false;
        this.error = err.message;
        this.flightDestinations$.next([]);
      },
      () => this.loading = false
    );
  }
}
