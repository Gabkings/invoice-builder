import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { InvoiceService } from "../../services/invoice.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { Validators } from "@angular/forms";
import { Router } from "@angular/router";

@Component({
  selector: "app-invoice-form",
  templateUrl: "./invoice-form.component.html",
  styleUrls: ["./invoice-form.component.scss"]
})
export class InvoiceFormComponent implements OnInit {
  constructor(
    private svs: InvoiceService,
    public snackBar: MatSnackBar,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.invoiceForm;
  }

  invoiceForm = new FormGroup({
    item: new FormControl("", [Validators.required]),
    qty: new FormControl("", [Validators.required]),
    tax: new FormControl("", [Validators.required]),
    rate: new FormControl("", [Validators.required]),
    due: new FormControl("", [Validators.required])
  });

  onSubmit() {
    this.svs.createInvoice(this.invoiceForm.value).subscribe(
      data => {
        this.snackBar.open("Invoice created!", "Success", {
          duration: 2000
        });
        this.invoiceForm.reset();
        this.router.navigate(["", "invoices"]);
      },
      err => {
        console.log(err);
      }
    );

    console.warn(this.invoiceForm.value);
  }
}
