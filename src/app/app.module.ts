import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { TicketDetailsModule } from "./ticket-details/ticket-details.module";
import { DashboardModule } from "./dashboard/dashboard.module";
import { AddTicketModule } from './add-ticket/add-ticket.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    TicketDetailsModule,
    AddTicketModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
