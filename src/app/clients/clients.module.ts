import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ClientListingComponent } from "./components/client-listing/client-listing.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { MaterialModule } from '../shared/shared.module';
import { ClientsService } from './services/clients.service';
import { FormModdalComponent } from './components/form-moddal/form-moddal.component';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    MaterialModule,
    ReactiveFormsModule
  ],
  declarations: [ClientListingComponent, FormModdalComponent],
  exports: [ClientListingComponent],
  providers: [ClientsService],
  entryComponents: [FormModdalComponent]
})
export class ClientsModule {}
