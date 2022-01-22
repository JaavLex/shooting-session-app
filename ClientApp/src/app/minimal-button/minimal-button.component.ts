import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-minimal-button",
  templateUrl: "./minimal-button.component.html",
  styleUrls: ["./minimal-button.component.css"],
})
export class MinimalButtonComponent implements OnInit {
  @Input() insideContent: string = "";

  constructor() {}

  ngOnInit() {}
}
