import { Observable, of } from 'rxjs';
import { Airport } from '@flight-app/models';
import { FormControl } from '@angular/forms';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
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
  @Output() selectionChange = new EventEmitter<Airport>();

  myControl = new FormControl();
  selectedAirport?: Airport;
  filteredAirports$: Observable<Airport[]>;

  onSelectionChange(airport: Airport) {
    this.selectedAirport = airport;
    this.selectionChange.emit(airport);
  }

  constructor(private service: AmadeusService) {
    this.filteredAirports$ = this.myControl.valueChanges.pipe(
      debounceTime(400),
      distinctUntilChanged(),
      mergeMap((keyword: string) => {
        if (!keyword.length || this.selectedAirport?.name === keyword) {
          return of([]);
        }
        return this.service.getAirports(keyword);
      })
    );
  }
}
