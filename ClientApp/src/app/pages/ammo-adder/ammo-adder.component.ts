import { HttpClient } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-ammo-adder",
  templateUrl: "./ammo-adder.component.html",
  styleUrls: ["./ammo-adder.component.css"],
})
export class AmmoAdderComponent implements OnInit {
  caliberInput: string;
  ammoPictureInput: string;
  pricePerPacksInput: number;

  constructor(
    private http: HttpClient,
    @Inject("BASE_URL") private baseUrl: string,
    private route: Router
  ) {}

  confirmClick = () => {
    if (
      this.caliberInput === undefined ||
      this.ammoPictureInput === undefined ||
      this.pricePerPacksInput === undefined
    ) {
      alert("You must fill all fields before submitting !");
    } else {
      this.http
        .post<Ammunition>("https://localhost:5001/api/Ammunition", {
          caliber: this.caliberInput,
          ammoPicture: this.ammoPictureInput,
          pricePerPacks: this.pricePerPacksInput,
        })
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
