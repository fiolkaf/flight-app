import { Component, Input, EventEmitter, Output } from '@angular/core';
import { MatDatepickerInputEvent } from '@angular/material/datepicker';

@Component({
  selector: 'flight-app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.scss']
})
export class DatePickerComponent {
  @Input() title = '';

  @Output() selectionChange = new EventEmitter<Date>();

  onDateChange(event: MatDatepickerInputEvent<Date>) {
    if (event.value) {
      this.selectionChange.emit(event.value);
    }
  }
}
