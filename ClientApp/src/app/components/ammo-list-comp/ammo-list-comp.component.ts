import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
  selector: "app-ammo-list-comp",
  templateUrl: "./ammo-list-comp.component.html",
  styleUrls: ["./ammo-list-comp.component.css"],
})
export class AmmoListCompComponent implements OnInit {
  @Input() ammoList = [];
  @Output() showAmmoId = new EventEmitter<any>();

  sendAmmoId = (id: number) => {
    this.showAmmoId.emit(id);
  };

  constructor() {}

  ngOnInit() {}
}
