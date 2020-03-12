import {
  Component,
  OnInit,
  ViewChild,
  AfterViewInit,
  ChangeDetectorRef,
  AfterViewChecked
} from "@angular/core";
import { InvoiceService } from "../../services/invoice.service";
import { Invoice, InvoicePagination } from "../../models/invoice";
import { Router } from "@angular/router";
import { MatPaginator } from "@angular/material/paginator";
import { catchError } from "rxjs/operators";
import { map } from "rxjs/operators";
import { merge, of } from "rxjs";
import { startWith } from "rxjs/operators";
import { switchMap } from "rxjs/operators";

import { MatSort } from "@angular/material/sort";
import { MatTableDataSource } from "@angular/material/table";
import { MatSnackBar } from "@angular/material/snack-bar";
import { from } from "rxjs";

@Component({
  selector: "app-invoice-listing",
  templateUrl: "./invoice-listing.component.html",
  styleUrls: ["./invoice-listing.component.scss"]
})
export class InvoiceListingComponent
  implements OnInit, AfterViewInit, AfterViewChecked {
  displayedColumns = ["item", "date", "due", "qty", "rate", "tax", "action"];
  dataSource = new MatTableDataSource<Invoice>();
  resultLength = 0;
  isResultsLoading = false;
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private invoiceService: InvoiceService,
    private router: Router,
    private ref: ChangeDetectorRef,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {}

  saveInvoiceBtn() {
    return this.router.navigate(["", "invoices", "new"]);
  }

  editBtnHandler(id) {
    this.router.navigate(["", "invoices", id]);
  }

  deleteInvoice(id) {
    console.log(id);
    return this.invoiceService.deleteInvoice(id).subscribe(
      data => {
        console.log("Successs  deleted ");
      },
      err => {
        console.log(err);
      }
    );
  }

  filterText(filterValue: string) {
    this.isResultsLoading = true;
    filterValue = filterValue.trim();
    this.paginator.pageIndex = 0;
    this.invoiceService
      .getInvoices({
        page: this.paginator.pageIndex,
        perPage: this.paginator.pageSize,
        sortField: this.sort.active,
        sortDir: this.sort.direction,
        filter: filterValue
      })
      .subscribe(
        data => {
          this.dataSource.data = data.docs;
          this.resultLength = data.total;
          this.isResultsLoading = false;
        },
        err => this.errorHandler(err, "Failed to filter invoices")
      );
  }

  ngAfterViewChecked() {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    this.ref.detectChanges();
  }
  ngAfterViewInit() {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    this.sort.sortChange.subscribe(() => (this.paginator.pageIndex = 0));
    merge(this.paginator.page, this.sort.sortChange)
      .pipe(
        startWith({}),
        switchMap(() => {
          this.isResultsLoading = true;
          return this.invoiceService.getInvoices({
            page: this.paginator.pageIndex,
            perPage: this.paginator.pageSize,
            sortField: this.sort.active,
            sortDir: this.sort.direction,
            filter: ""
          });
        }),
        map(data => {
          this.isResultsLoading = false;
          this.resultLength = data.total;
          return data.docs;
        }),
        catchError(() => {
          this.isResultsLoading = false;
          this.errorHandler("Failed to fetch invoices", "Error");
          return of([]);
        })
      )
      .subscribe(data => {
        this.dataSource.data = data;
      });
  }

  private errorHandler(error, message) {
    this.isResultsLoading = false;
    console.error(error);
    this.snackBar.open(message, "Error", {
      duration: 2000
    });
  }
}
