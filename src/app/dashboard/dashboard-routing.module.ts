import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "./dashboard.component";
import { MainComponent } from "../main/main.component";
import { InvoiceListingComponent } from "../invoices/components/invoice-listing/invoice-listing.component";
import { ClientListingComponent } from "../clients/components/client-listing/client-listing.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      { path: "", component: MainComponent },
     // { path: "invoices", component: InvoiceListingComponent },
      { path: "clients", component: ClientListingComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule {}
