import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientOnboardComponent } from './patient-onboard.component';

describe('PatientOnboardComponent', () => {
  let component: PatientOnboardComponent;
  let fixture: ComponentFixture<PatientOnboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientOnboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientOnboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
