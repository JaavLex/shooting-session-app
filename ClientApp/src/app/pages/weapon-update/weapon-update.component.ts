import { HttpClient } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-weapon-update",
  templateUrl: "./weapon-update.component.html",
  styleUrls: ["./weapon-update.component.css"],
})
export class WeaponUpdateComponent implements OnInit {
  public ammoList: Ammunition[];

  weaponNameInput: string;
  weaponPictureInput: string;
  selectedAmmo: any = "none";

  updateId: number;

  constructor(
    private http: HttpClient,
    @Inject("BASE_URL") private baseUrl: string,
    private route: Router,
    routeparams: ActivatedRoute
  ) {
    http.get<Ammunition[]>(baseUrl + "api/Ammunition").subscribe(
      (result) => {
        this.ammoList = result;
      },
      (error) => console.error(error)
    );

    routeparams.params.subscribe((p) => (this.updateId = +p["id"]));

    http.get<Weapon>(baseUrl + `api/Weapon/${this.updateId}`).subscribe(
      (result) => {
        this.weaponNameInput = result.weaponName;
        this.weaponPictureInput = result.weaponPicture;
        this.selectedAmmo = result.ammunition.ammunitionId;
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
        .put<any>(`https://localhost:5001/api/Weapon/update/${this.updateId}`, {
          weaponName: this.weaponNameInput,
          weaponPicture: this.weaponPictureInput,
          ammunitionId: parseInt(this.selectedAmmo),
        })
        .subscribe(
          (result) => {
            console.log(result);
          },
          (error) => console.error(error)
        )
        .add(() => {
          this.route.navigate(["/weapons"]);
        });
    }
  };

  ngOnInit() {}
}
