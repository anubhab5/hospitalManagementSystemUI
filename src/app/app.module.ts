import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { HomeScreenComponent } from './home-screen/home-screen.component';
import { AdminModule } from './admin/admin.module';
import { DoctorModule } from './doctor/doctor.module';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent,
    HomeScreenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdminModule,
    DoctorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
