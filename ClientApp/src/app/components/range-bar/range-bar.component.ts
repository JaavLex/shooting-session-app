import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-range-bar",
  templateUrl: "./range-bar.component.html",
  styleUrls: ["./range-bar.component.css"],
})
export class RangeBarComponent implements OnInit {
  @Input() address: string = "";
  @Input() pricePerStall: number;

  constructor() {}

  ngOnInit() {}
}
