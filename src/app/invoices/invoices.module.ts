import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InvoiceListingComponent } from "./components/invoice-listing/invoice-listing.component";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [InvoiceListingComponent],
  imports: [CommonModule, FormsModule, MatCardModule],
  exports: [InvoiceListingComponent]
})
export class InvoicesModule {}
