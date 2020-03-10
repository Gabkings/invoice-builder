import { Component, OnInit } from "@angular/core";
import { InvoiceService } from "../../services/invoice.service";
import { Invoice } from "../../models/invoice";
import { Router } from "@angular/router";

@Component({
  selector: "app-invoice-listing",
  templateUrl: "./invoice-listing.component.html",
  styleUrls: ["./invoice-listing.component.scss"]
})
export class InvoiceListingComponent implements OnInit {
  displayedColumns = ["item", "date", "due", "qty", "rate", "tax", "action"];
  dataSource: Invoice[] = [];
  constructor(private invoceService: InvoiceService, private router: Router) {}

  ngOnInit(): void {
    this.invoices();
  }

  saveInvoiceBtn() {
    return this.router.navigate(["", "invoices", "new"]);
  }

  editBtnHandler(id) {
    this.router.navigate(["", "invoices", id]);
  }

  deleteInvoice(id) {
    console.log(id);
    return this.invoceService.deleteInvoice(id).subscribe(
      data => {
        console.log("Successs  deleted ");
      },
      err => {
        console.log(err);
      }
    );
  }

  invoices() {
    return this.invoceService.getInvoices().subscribe(
      data => {
        this.dataSource = data;
        console.log(data);
      },
      err => {
        console.log(err);
      }
    );
  }
}
