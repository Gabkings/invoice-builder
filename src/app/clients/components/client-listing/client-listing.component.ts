import { Component, OnInit, Inject } from "@angular/core";
import "rxjs/add/operator/mergeMap";
import { remove } from "lodash";
import { MatTableDataSource } from "@angular/material/table";
import { Client } from "../../models/clients";
import { MatDialog } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ClientsService } from "../../services/clients.service";
import { FormModdalComponent } from "../form-moddal/form-moddal.component";
@Component({
  selector: "app-client-listing",
  templateUrl: "./client-listing.component.html",
  styleUrls: ["./client-listing.component.scss"]
})
export class ClientListingComponent implements OnInit {
  displayedColumns = ["firstName", "lastName", "email", "action"];
  dataSource = new MatTableDataSource<Client>();
  isResultsLoading = false;
  constructor(
    private ClientsService: ClientsService,
    public dialog: MatDialog,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit() {
    this.isResultsLoading = true;
    this.ClientsService.getClients().subscribe(
      data => {
        console.log(data);
        this.dataSource.data = data;
      },
      err => console.error(err),
      () => (this.isResultsLoading = false)
    );
  }
  saveBtnHanlder() {}

  deleteBtnHandler(clientId) {
    this.ClientsService.deleteClient(clientId).subscribe(
      data => {
        const removedItems = remove(this.dataSource.data, item => {
          return item._id === data._id;
        });
        this.dataSource.data = [...this.dataSource.data];
        this.snackBar.open("Client deleted", "Success", {
          duration: 2000
        });
      },
      err => this.errorHandler(err, "Failed to delete client")
    );
  }
  openDialog(clientId: string): void {
    const options = {
      width: "400px",
      height: "300px",
      data: {}
    };
    if (clientId) {
      options.data = { clientId: clientId };
    }
    let dialogRef = this.dialog.open(FormModdalComponent, options);
    dialogRef
      .afterClosed()
      .filter(clientParam => typeof clientParam === "object")
      .flatMap(clientParam => {
        return clientId
          ? this.ClientsService.updateClient(clientId, clientParam)
          : this.ClientsService.createClient(clientParam);
      })
      .subscribe(
        client => {
          let successMsg = "";
          if (clientId) {
            const index = this.dataSource.data.findIndex(
              client => client._id === clientId
            );
            this.dataSource.data[index] = client;
            successMsg = "Client updated";
          } else {
            this.dataSource.data.push(client);
            successMsg = "Client created";
          }
          this.dataSource.data = [...this.dataSource.data];
          this.snackBar.open(successMsg, "Success", {
            duration: 2000
          });
        },
        err => this.errorHandler(err, "Failed to created Client")
      );
  }
  private errorHandler(error, message) {
    console.error(error);
    this.snackBar.open(message, "Error", {
      duration: 2000
    });
  }
}
