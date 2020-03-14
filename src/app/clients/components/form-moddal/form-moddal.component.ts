import { Component, OnInit, Inject } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ClientsService } from "../../services/clients.service";

@Component({
  selector: "app-form-moddal",
  templateUrl: "./form-moddal.component.html",
  styleUrls: ["./form-moddal.component.scss"]
})
export class FormModdalComponent implements OnInit {
  clientForm: FormGroup;
  title = "New Client";
  constructor(
    public dialogRef: MatDialogRef<FormModdalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private fb: FormBuilder,
    private clientService: ClientsService,
    private snackBar: MatSnackBar
  ) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
    this.initClientForm();
    console.log(this.data);
    if (this.data && this.data.clientId) {
      this.setClientToForm(this.data.clientId);
    }
  }

  private setClientToForm(clientId) {
    this.title = "Edit Client";
    this.clientService.getClient(clientId).subscribe(
      client => {
        this.clientForm.patchValue(client);
      },
      err => this.errorHandler(err, "Failed to load client")
    );
  }

  private initClientForm() {
    this.clientForm = this.fb.group({
      firstName: ["", Validators.required],
      lastName: ["", Validators.required],
      email: ["", Validators.required]
    });
  }
  private errorHandler(error, message) {
    console.error(error);
    this.snackBar.open(message, "Error", {
      duration: 2000
    });
  }
}
