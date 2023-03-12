import { RouterModule, Routes} from "@angular/router";
import { HomeComponent} from "./home/home/home.component";
import { FormComponent} from "./form/form/form.component";
import { CustomerComponent} from "./customer/customer/customer.component";

const app_routes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'form', component: FormComponent},
  { path: 'customer', component: CustomerComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
  ];

export const app_routing = RouterModule.forRoot(app_routes);
