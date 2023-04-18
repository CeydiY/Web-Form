import { RouterModule, Routes} from "@angular/router";
import { HomeComponent} from "./home/home/home.component";
import { FormComponent} from "./form/form/form.component";
import { CustomerComponent} from "./customer/customer/customer.component";
import {ModalComponent} from "./modal/modal/modal.component";

const app_routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'form', component: FormComponent},
  { path: 'customer', component: CustomerComponent},
  { path: 'modal', component: ModalComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'},
  ];

export const app_routing = RouterModule.forRoot(app_routes);
