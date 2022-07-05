import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule ,ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';

import { BillingComponent } from './billing/billing.component';
import { PrepaidComponent } from './prepaid/prepaid.component';
import { PostpaidComponent } from './postpaid/postpaid.component';
import { DongleComponent } from './dongle/dongle.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { RegisterComponent } from './register/register.component';

import { ProductComponent } from './product/product.component';

import { HelpComponent } from './help/help.component';
import { HttpClientModule } from '@angular/common/http';

import { DashboardComponent } from './dashboard/dashboard.component';
import { LogoutComponent } from './logout/logout.component';
import { ContactComponent } from './contact/contact.component';
import { HelpresponsesComponent } from './helpresponses/helpresponses.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { PaymentComponent } from './payment/payment.component';
import { TracknextComponent } from './tracknext/tracknext.component';
import { TrackComponent } from './track/track.component';
import { ApiService } from './service/api.service';
import { HelpService } from './service/help.service';
import { NewconnectionComponent } from './newconnection/newconnection.component';
import { InteractionService } from './service/interaction.service';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    LoginComponent,
    BillingComponent,
    PrepaidComponent,
    PostpaidComponent,
    DongleComponent,
    ForgotpasswordComponent,
    RegisterComponent,
  
    ProductComponent,
    HelpComponent,
    ContactComponent,
    DashboardComponent,
    LogoutComponent,
    HelpresponsesComponent,
    WelcomeComponent,
    FooterComponent,
    PaymentComponent,
    HelpComponent,
    TracknextComponent,
    TrackComponent,
    NewconnectionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [ApiService,HelpService,InteractionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
