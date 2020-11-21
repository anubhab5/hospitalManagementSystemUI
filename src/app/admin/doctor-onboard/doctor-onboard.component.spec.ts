import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DoctorOnboardComponent } from './doctor-onboard.component';

describe('DoctorOnboardComponent', () => {
  let component: DoctorOnboardComponent;
  let fixture: ComponentFixture<DoctorOnboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DoctorOnboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DoctorOnboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
