import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-weapon-viewer-comp",
  templateUrl: "./weapon-viewer-comp.component.html",
  styleUrls: ["./weapon-viewer-comp.component.css"],
})
export class WeaponViewerCompComponent implements OnInit {
  @Input() weapon: Object = {};

  constructor(private http: HttpClient, private router: Router) {}

  deleteWeapon = (id: number) => {
    if (confirm("Are you sure you want to delete this weapon ?") == true) {
      this.http
        .delete(`https://localhost:5001/api/Weapon/delete/${id}`)
        .subscribe(
          (result) => {
            console.log(result);
          },
          (error) => console.error(error)
        );
      window.location.reload();
    }
  };

  updateWeapon = (id: number) => {
    this.router.navigate([`updateweapon/${id}`]);
  };

  ngOnInit() {}
}
