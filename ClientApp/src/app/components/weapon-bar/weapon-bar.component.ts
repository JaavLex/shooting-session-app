import { Component, Input, OnInit } from "@angular/core";

@Component({
  selector: "app-weapon-bar",
  templateUrl: "./weapon-bar.component.html",
  styleUrls: ["./weapon-bar.component.css"],
})
export class WeaponBarComponent implements OnInit {
  @Input() weaponName: string = "";
  @Input() weaponAmmo: string = "";

  constructor() {}

  ngOnInit() {}
}
