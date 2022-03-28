import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AirportPickerComponent } from './airport-picker.component';

describe('AirportPickerComponent', () => {
  let component: AirportPickerComponent;
  let fixture: ComponentFixture<AirportPickerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AirportPickerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AirportPickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
