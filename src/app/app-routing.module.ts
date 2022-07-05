import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MenuComponent} from './menu/menu.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import{BillingComponent} from './billing/billing.component';
import{PrepaidComponent} from './prepaid/prepaid.component';
import{PostpaidComponent} from './postpaid/postpaid.component';
import{DongleComponent} from './dongle/dongle.component';
import{ForgotpasswordComponent} from './forgotpassword/forgotpassword.component';
import{RegisterComponent} from './register/register.component';

import { ProductComponent } from './product/product.component';
import {ContactComponent} from './contact/contact.component';
import{HelpComponent} from './help/help.component';
import{HelpresponsesComponent} from './helpresponses/helpresponses.component';
import{PaymentComponent} from './payment/payment.component';
import{DashboardComponent} from './dashboard/dashboard.component';
import{LogoutComponent} from './logout/logout.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { TrackComponent } from './track/track.component';
import { TracknextComponent } from './tracknext/tracknext.component';
import{NewconnectionComponent} from './newconnection/newconnection.component';

const routes: Routes = [
  {path:'',component:WelcomeComponent},
  {path:'menu',component:MenuComponent},
  {path:'home',component:HomeComponent},
  {path:'login',component:LoginComponent},
  {path:'product',component:ProductComponent},
  {path:'billing',component:BillingComponent},
  {path:'prepaid',component:PrepaidComponent},
  {path:'postpaid',component:PostpaidComponent},
  {path:'dongle',component:DongleComponent},
  {path:'forgotpass',component:ForgotpasswordComponent},
  {path:'register',component:RegisterComponent},
  {path:'payment',component:PaymentComponent},
  {path:'help',component:HelpComponent},
  {path:'contact',component:ContactComponent},
  {path:'helpresponses',component:HelpresponsesComponent},
  {path:'dashboard',component:DashboardComponent},
  {path:'logout',component:LogoutComponent},
  {path:'track',component:TrackComponent},
  {path:'tracknext',component:TracknextComponent},
  {path:'newconnection',component:NewconnectionComponent}
  
  


  
  






  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
