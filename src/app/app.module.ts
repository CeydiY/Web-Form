import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { app_routing} from "./app.routes";
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body/body.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer/footer.component';
import { FormComponent } from './form/form/form.component';
import { CustomerComponent } from './customer/customer/customer.component';
import { HomeComponent } from './home/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InformationService } from "./information.service";

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    CustomerComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    app_routing,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [InformationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
