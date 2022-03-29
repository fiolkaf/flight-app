import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Airport } from '@flight-app/models';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

type AmadeusResponse<T> = {
  meta: {
    count: number;
  };
  data: T;
}
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
}
