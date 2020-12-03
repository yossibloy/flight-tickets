import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FirstcomComponent } from './compse/firstcom/firstcom.component';
import { FlitsecomComponent } from './compse/flitsecom/flitsecom.component';
import { EnrollmentComponent } from './compse/enrollment/enrollment.component';
import { PaymentComponent } from './compse/payment/payment.component';
import { ManagementComponent } from './compse/management/management.component';
import { UpgradeComponent } from './compse/upgrade/upgrade.component';
import { CheckInComponent } from './compse/check-in/check-in.component';



const routes: Routes = [
  { path: '', component: FirstcomComponent},
  { path: 'flit', component: FlitsecomComponent },
  { path: 'management', component: ManagementComponent },
  { path: 'flit/enrollment', component: EnrollmentComponent } ,
  { path: 'flit/enrollment/Payment', component: PaymentComponent } ,
  { path: 'upgrade', component: UpgradeComponent } ,
  { path: 'management/checkin', component: CheckInComponent } ,
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
