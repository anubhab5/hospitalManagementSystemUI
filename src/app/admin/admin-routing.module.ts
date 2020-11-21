import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminOnboardComponent } from './admin-onboard/admin-onboard.component';
import { DoctorOnboardComponent } from './doctor-onboard/doctor-onboard.component';
import { PatientOnboardComponent } from './patient-onboard/patient-onboard.component';

const routes: Routes = [
    {
        path: '',
        component: AdminDashboardComponent
    },
    {
        path: 'admin-view',
        component: AdminOnboardComponent
    },
    {
        path: 'doctor-view',
        component: DoctorOnboardComponent
    },
    {
        path: 'patient-view',
        component: PatientOnboardComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {

}