import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-range-list-comp",
  templateUrl: "./range-list-comp.component.html",
  styleUrls: ["./range-list-comp.component.css"],
})
export class RangeListCompComponent implements OnInit {
  @Input() rangeList = [];
  @Output() showRangeId = new EventEmitter<any>();

  sendRangeId = (id: number) => {
    this.showRangeId.emit(id);
  };

  constructor() {}

  ngOnInit() {}
}
