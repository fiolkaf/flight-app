import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Airport } from '@flight-app/models';
import { Observable } from 'rxjs';
import {
  startWith,
  debounceTime,
  distinctUntilChanged,
  mergeMap,
} from 'rxjs/operators';
import { AmadeusService } from '../../services/amadeus.service';

@Component({
  selector: 'flight-app-airport-picker',
  templateUrl: './airport-picker.component.html',
  styleUrls: ['./airport-picker.component.scss'],
})
export class AirportPickerComponent {
  @Input() title = '';

  myControl = new FormControl();
  filteredAirports$: Observable<Airport[]>;

  constructor(private service: AmadeusService) {
    this.filteredAirports$ = this.myControl.valueChanges.pipe(
      startWith(''),
      debounceTime(400),
      distinctUntilChanged(),
      mergeMap((keyword: string) => {
        return service.getAirports(keyword);
      })
    );
  }
}
