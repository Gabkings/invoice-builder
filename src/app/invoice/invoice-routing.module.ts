import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { InvoiceComponent } from "./invoice.component";
import { MainComponent } from "../main/main.component";

const routes: Routes = [
  {
    path: "",
    component: InvoiceComponent,
    children: [{ path: "", component: MainComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InvoiceRoutingModule {}
