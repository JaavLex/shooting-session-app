import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-ammo-bar",
  templateUrl: "./ammo-bar.component.html",
  styleUrls: ["./ammo-bar.component.css"],
})
export class AmmoBarComponent implements OnInit {
  @Input() caliber: string = "";
  @Input() pricePerPacks: string = "";

  constructor() {}

  ngOnInit() {}
}
