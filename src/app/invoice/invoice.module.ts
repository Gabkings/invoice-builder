import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { InvoiceRoutingModule } from "./invoice-routing.module";
import { InvoiceComponent } from "./invoice.component";
import { MainComponent } from "../main/main.component";
import { SideNavComponent } from "../side-nav/side-nav.component";
import { ToolBarComponent } from "../tool-bar/tool-bar.component";
import { MatSidenavModule } from "@angular/material/sidenav";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatListModule } from "@angular/material/list";
import { MatIconModule } from "@angular/material/icon";
import { MatCardModule } from "@angular/material/card";

@NgModule({
  declarations: [
    InvoiceComponent,
    MainComponent,
    SideNavComponent,
    ToolBarComponent
  ],
  imports: [
    MatIconModule,
    MatSidenavModule,
    MatListModule,
    CommonModule,
    InvoiceRoutingModule,
    MatToolbarModule,
    MatCardModule
  ],
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatToolbarModule,
    MatListModule,
    MatCardModule
  ]
})
export class InvoiceModule {}
