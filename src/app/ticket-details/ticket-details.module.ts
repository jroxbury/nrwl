import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { TicketDetailsComponent } from "./ticket-details.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [TicketDetailsComponent],
  imports: [CommonModule, RouterModule],
  exports: [TicketDetailsComponent],
})
export class TicketDetailsModule {}
