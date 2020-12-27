import { ChangeDetectionStrategy, Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { Observable } from "rxjs";
import { map, switchMap } from "rxjs/operators";

import { BackendService, Ticket } from "../backend.service";

@Component({
  selector: "app-ticket-details",
  templateUrl: "./ticket-details.component.html",
  styleUrls: ["./ticket-details.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TicketDetailsComponent {
  public data$: Observable<AllData> = this._route.params.pipe(
    map((params) => params["id"]),
    switchMap((id) => this._backend.ticket(id)),
    switchMap((ticket) => {
      return this._backend.user(ticket.assigneeId).pipe(
        map((user) => {
          return {
            ...user,
            ...ticket,
          };
        })
      );
    })
  );

  constructor(
    private _route: ActivatedRoute,
    private _backend: BackendService
  ) {}
}

interface AllData extends Ticket {
  name: string;
}
