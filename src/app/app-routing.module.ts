import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AddTicketComponent } from "./add-ticket/add-ticket.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { TicketDetailsComponent } from "./ticket-details/ticket-details.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full",
  },
  {
    path: "dashboard",
    component: DashboardComponent,
  },
  {
    path: "ticket-details/:id",
    component: TicketDetailsComponent,
  },
  {
    path: "add-ticket",
    component: AddTicketComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
