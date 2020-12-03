import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.matmodule';
import { AppComponent } from './app.component';
import { FirstcomComponent } from './compse/firstcom/firstcom.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatmodulModule, DemoMaterialModule } from './moduls/matmodul/matmodul.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { FlitsecomComponent } from './compse/flitsecom/flitsecom.component';
import { EnrollmentComponent } from './compse/enrollment/enrollment.component';
import { PaymentComponent } from './compse/payment/payment.component';
import { ErrorsComponent } from './compse/errors/errors.component';
import { DitaylsComponent } from './compse/ditayls/ditayls.component';
import { HttpClientModule } from '@angular/common/http';
import { FlightdetailsComponent } from './compse/flightdetails/flightdetails.component';
import { ManagementComponent } from './compse/management/management.component';
import { UpgradeComponent } from './compse/upgrade/upgrade.component';
import { CheckInComponent } from './compse/check-in/check-in.component';

@NgModule({
  declarations: [
    AppComponent,
    FirstcomComponent,
    FlitsecomComponent,
    EnrollmentComponent,
    PaymentComponent,
    ErrorsComponent,
    DitaylsComponent,
    FlightdetailsComponent,
    ManagementComponent,
    UpgradeComponent,
    CheckInComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
    ,MatmodulModule,
    ReactiveFormsModule,DemoMaterialModule, FormsModule,   HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
