import { HttpClient } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-weapon-adder",
  templateUrl: "./weapon-adder.component.html",
  styleUrls: ["./weapon-adder.component.css"],
})
export class WeaponAdderComponent implements OnInit {
  public ammoList: Ammunition[];

  weaponNameInput: string;
  weaponPictureInput: string;
  selectedAmmo: any = "none";

  constructor(
    private http: HttpClient,
    @Inject("BASE_URL") private baseUrl: string,
    private route: Router
  ) {
    http.get<Ammunition[]>(baseUrl + "api/Ammunition").subscribe(
      (result) => {
        this.ammoList = result;
      },
      (error) => console.error(error)
    );
  }

  confirmClick = () => {
    if (
      this.weaponNameInput === undefined ||
      this.weaponPictureInput === undefined ||
      this.selectedAmmo === "none"
    ) {
      alert("You must fill all fields before submitting !");
    } else {
      this.http
        .post<Weapon>("https://localhost:5001/api/Weapon", {
          weaponName: this.weaponNameInput,
          weaponPicture: this.weaponPictureInput,
          ammunitionId: parseInt(this.selectedAmmo),
        })
        .subscribe(
          (result) => {
            console.log(result);
          },
          (error) => console.error(error)
        );
      this.route.navigate(["/weapons"]);
    }
  };

  ngOnInit() {}
}
