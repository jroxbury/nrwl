import { Component, OnInit } from "@angular/core";

import { BackendService } from "../backend.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"],
})
export class DashboardComponent implements OnInit {
  public tickets$ = this._backend.tickets();

  constructor(private _backend: BackendService) {}

  ngOnInit() {}
}
