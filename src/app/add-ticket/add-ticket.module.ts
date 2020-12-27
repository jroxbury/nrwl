import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { AddTicketComponent } from "./add-ticket.component";
import { RouterModule } from "@angular/router";

@NgModule({
  declarations: [AddTicketComponent],
  imports: [CommonModule, RouterModule],
})
export class AddTicketModule {}
