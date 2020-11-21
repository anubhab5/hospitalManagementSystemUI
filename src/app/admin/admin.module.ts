import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminOnboardComponent } from './admin-onboard/admin-onboard.component';
import { DoctorOnboardComponent } from './doctor-onboard/doctor-onboard.component';
import { PatientOnboardComponent } from './patient-onboard/patient-onboard.component';
import { AdminRoutingModule } from './admin-routing.module';



@NgModule({
  declarations: [AdminDashboardComponent, AdminOnboardComponent, DoctorOnboardComponent, PatientOnboardComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
