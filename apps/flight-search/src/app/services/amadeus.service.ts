import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Airport } from '@flight-app/models';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AmadeusService {

  constructor(private httpClient: HttpClient) {}

  getAirports(keyword: string): Observable<Airport[]> {
    return this.httpClient.get<Airport[]>(`/api/reference-data/locations?subType=AIRPORT&keyword=${keyword}`).pipe();
  }
}
