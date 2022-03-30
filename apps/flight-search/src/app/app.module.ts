import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AirportPickerComponent } from './containers/airport-picker/airport-picker.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card'
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FlightSearchFormComponent } from './containers/flight-search-form/flight-search-form.component';
import { DatePickerComponent } from './components/date-picker/date-picker.component';
import { FlightResultsComponent } from './containers/flight-results/flight-results.component';

@NgModule({
  declarations: [
    AppComponent,
    AirportPickerComponent,
    FlightSearchFormComponent,
    DatePickerComponent,
    FlightResultsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatNativeDateModule,
    MatDatepickerModule,
    MatGridListModule,
    MatToolbarModule,
    MatCardModule,
    MatProgressSpinnerModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
