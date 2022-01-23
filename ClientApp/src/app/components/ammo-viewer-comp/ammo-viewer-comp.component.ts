import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-ammo-viewer-comp",
  templateUrl: "./ammo-viewer-comp.component.html",
  styleUrls: ["./ammo-viewer-comp.component.css"],
})
export class AmmoViewerCompComponent implements OnInit {
  @Input() ammo: Object = {};

  constructor(private http: HttpClient, private router: Router) {}

  deleteAmmo = (id: number) => {
    if (confirm("Are you sure you want to delete this ammo ?") == true) {
      this.http
        .delete(`https://localhost:5001/api/Ammunition/delete/${id}`)
        .subscribe(
          (result) => {
            console.log(result);
          },
          (error) => console.error(error)
        );
      window.location.reload();
    }
  };

  updateAmmo = (id: number) => {
    this.router.navigate([`updateammo/${id}`]);
  };

  ngOnInit() {}
}
