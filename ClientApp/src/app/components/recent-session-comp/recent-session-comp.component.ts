import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-recent-session-comp",
  templateUrl: "./recent-session-comp.component.html",
  styleUrls: ["./recent-session-comp.component.css"],
})
export class RecentSessionCompComponent implements OnInit {
  @Input() sessionList = [];
  @Output() showSessionId = new EventEmitter<any>();

  sendSessionId = (id: number) => {
    this.showSessionId.emit(id);
  };

  constructor() {}

  ngOnInit() {}
}
