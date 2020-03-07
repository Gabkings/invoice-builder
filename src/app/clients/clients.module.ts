import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientListingComponent } from "./components/client-listing/client-listing.component";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [ClientListingComponent],
  imports: [CommonModule, FormsModule, MatCardModule],
  exports: [ClientListingComponent]
})
export class ClientsModule {}
