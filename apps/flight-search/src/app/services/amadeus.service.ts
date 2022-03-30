import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Airport, FlightDestination } from '@flight-app/models';
import { Observable } from 'rxjs';
import { map, retry } from 'rxjs/operators';
import { FlightSearchParams } from '../types/flight-search-params';
import { AmadeusResponse, FlightDestinationResponse } from './amadeus.service.types';

@Injectable({
  providedIn: 'root'
})
export class AmadeusService {

  constructor(private httpClient: HttpClient) {}

  getAirports(keyword: string): Observable<Airport[]> {
    return this.httpClient.get<AmadeusResponse<Airport[]>>(`/api/reference-data/locations?subType=AIRPORT,CITY&keyword=${keyword}`).pipe(
      map((res) => res.data)
    );
  }

  getFlightDestinations(searchParams: FlightSearchParams) : Observable<FlightDestination[]> {

    let url = `/api/shopping/flight-destinations?origin=${searchParams.departureAirportIataCode}`;
    if (searchParams.departureDate) {
      url = `${url}&departureDate=${searchParams.departureDate}`;
    }

    return this.httpClient.get<AmadeusResponse<FlightDestinationResponse[]>>(url).pipe(
      retry(3),
      map((res) => res.data.map((item: FlightDestinationResponse) => ({
        departureDate: item.departureDate,
        returnDate: item.returnDate,
        departureName: res.dictionaries.locations[item.origin].detailedName,
        destinationName: res.dictionaries.locations[item.destination].detailedName,
        totalPrice: item.price.total + ' ' + res.meta.currency
      })))
    );
  }
}
