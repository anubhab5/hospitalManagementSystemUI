import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminOnboardComponent } from './admin-onboard.component';

describe('AdminOnboardComponent', () => {
  let component: AdminOnboardComponent;
  let fixture: ComponentFixture<AdminOnboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminOnboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminOnboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
