import { HttpClient } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-ammo-update",
  templateUrl: "./ammo-update.component.html",
  styleUrls: ["./ammo-update.component.css"],
})
export class AmmoUpdateComponent implements OnInit {
  caliberInput: string;
  ammoPictureInput: string;
  pricePerPacksInput: number;

  updateId: number;

  constructor(
    private http: HttpClient,
    @Inject("BASE_URL") private baseUrl: string,
    private route: Router,
    routeparams: ActivatedRoute
  ) {
    routeparams.params.subscribe((p) => (this.updateId = +p["id"]));

    http.get<Ammunition>(baseUrl + `api/Ammunition/${this.updateId}`).subscribe(
      (result) => {
        this.caliberInput = result.caliber;
        this.ammoPictureInput = result.ammoPicture;
        this.pricePerPacksInput = result.pricePerPacks;
      },
      (error) => console.error(error)
    );
  }

  confirmClick = () => {
    if (
      this.caliberInput === undefined ||
      this.ammoPictureInput === undefined ||
      this.pricePerPacksInput === undefined
    ) {
      alert("You must fill all fields before submitting !");
    } else {
      this.http
        .put<any>(
          `https://localhost:5001/api/Ammunition/update/${this.updateId}`,
          {
            caliber: this.caliberInput,
            ammoPicture: this.ammoPictureInput,
            pricePerPacks: this.pricePerPacksInput,
          }
        )
        .subscribe(
          (result) => {
            console.log(result);
          },
          (error) => console.error(error)
        );
      this.route.navigate(["/ammos"]);
    }
  };

  ngOnInit() {}
}
