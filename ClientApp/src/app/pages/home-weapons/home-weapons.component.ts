import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-weapons",
  templateUrl: "./home-weapons.component.html",
  styleUrls: ["./home-weapons.component.css"],
})
export class HomeWeaponsComponent {
  public weapons: Weapon[];
  public lastweapon: Weapon;

  constructor(private http: HttpClient) {
    http.get<Weapon[]>(`https://localhost:5001/api/Weapon`).subscribe(
      (result) => {
        this.weapons = result;
      },
      (error) => console.error(error)
    );

    http.get<Weapon>(`https://localhost:5001/api/Weapon/last`).subscribe(
      (result) => {
        this.lastweapon = result;
      },
      (error) => console.error(error)
    );
  }

  setShownWeapon = (id: number) => {
    this.http.get<Weapon>(`https://localhost:5001/api/Weapon/${id}`).subscribe(
      (result) => {
        this.lastweapon = result;
      },
      (error) => console.error(error)
    );
  };
}
