import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-person-list-comp",
  templateUrl: "./person-list-comp.component.html",
  styleUrls: ["./person-list-comp.component.css"],
})
export class PersonListCompComponent implements OnInit {
  @Input() personList = [];
  @Output() showPersonId = new EventEmitter<any>();

  sendPersonId = (id: number) => {
    this.showPersonId.emit(id);
  };

  constructor() {}

  ngOnInit() {}
}
