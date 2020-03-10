import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { InvoiceListingComponent } from "./components/invoice-listing/invoice-listing.component";
import { FormsModule } from "@angular/forms";
import { MatCardModule } from "@angular/material/card";
import { InvoiceService } from "./services/invoice.service";
import { HttpClientModule } from "@angular/common/http";
import { MatTableModule } from "@angular/material/table";
import { MatIconModule } from "@angular/material/icon";
import { MatMenuModule } from "@angular/material/menu";
import { MatToolbarModule } from "@angular/material/toolbar";
import { InvoiceFormComponent } from "./components/invoice-form/invoice-form.component";
import {MatFormFieldModule} from '@angular/material/form-field'; 
import {MatInputModule} from '@angular/material/input'; 
import {MatDatepickerModule} from '@angular/material/datepicker'; 
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar'; 




@NgModule({
  declarations: [InvoiceListingComponent, InvoiceFormComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatCardModule,
    HttpClientModule,
    MatTableModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    ReactiveFormsModule, 
    MatSnackBarModule,
  ],
  exports: [InvoiceListingComponent, InvoiceFormComponent],
  providers: [InvoiceService]
})
export class InvoicesModule {}
