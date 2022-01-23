import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-person-bar",
  templateUrl: "./person-bar.component.html",
  styleUrls: ["./person-bar.component.css"],
})
export class PersonBarComponent implements OnInit {
  @Input() name: string = "";
  @Input() age: number;

  constructor() {}

  ngOnInit() {}
}
