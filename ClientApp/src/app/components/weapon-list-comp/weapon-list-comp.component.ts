import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-weapon-list-comp",
  templateUrl: "./weapon-list-comp.component.html",
  styleUrls: ["./weapon-list-comp.component.css"],
})
export class WeaponListCompComponent implements OnInit {
  @Input() weaponList = [];
  @Output() showWeaponId = new EventEmitter<any>();

  sendWeaponId = (id: number) => {
    this.showWeaponId.emit(id);
  };

  constructor() {}

  ngOnInit() {}
}
