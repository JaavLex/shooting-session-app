import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-ammo",
  templateUrl: "./home-ammo.component.html",
  styleUrls: ["./home-ammo.component.css"],
})
export class HomeAmmoComponent implements OnInit {
  public ammos: Ammunition[];
  public lastammo: Ammunition;

  constructor(private http: HttpClient) {
    http.get<Ammunition[]>(`https://localhost:5001/api/Ammunition`).subscribe(
      (result) => {
        this.ammos = result;
      },
      (error) => console.error(error)
    );

    http
      .get<Ammunition>(`https://localhost:5001/api/Ammunition/last`)
      .subscribe(
        (result) => {
          this.lastammo = result;
        },
        (error) => console.error(error)
      );
  }

  setShownAmmo = (id: number) => {
    this.http
      .get<Ammunition>(`https://localhost:5001/api/Ammunition/${id}`)
      .subscribe(
        (result) => {
          this.lastammo = result;
        },
        (error) => console.error(error)
      );
  };

  ngOnInit() {}
}
