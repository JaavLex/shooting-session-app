import { HttpClient } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-range-update",
  templateUrl: "./range-update.component.html",
  styleUrls: ["./range-update.component.css"],
})
export class RangeUpdateComponent implements OnInit {
  addressInput: string;
  pricePerStallInput: number;

  updateId: number;

  constructor(
    private http: HttpClient,
    @Inject("BASE_URL") private baseUrl: string,
    private route: Router,
    routeparams: ActivatedRoute
  ) {
    routeparams.params.subscribe((p) => (this.updateId = +p["id"]));

    http
      .get<ShootingRange>(baseUrl + `api/ShootingRange/${this.updateId}`)
      .subscribe(
        (result) => {
          this.addressInput = result.address;
          this.pricePerStallInput = result.pricePerStall;
        },
        (error) => console.error(error)
      );
  }

  confirmClick = () => {
    if (
      this.addressInput === undefined ||
      this.pricePerStallInput === undefined
    ) {
      alert("You must fill all fields before submitting !");
    } else {
      this.http
        .put<any>(
          `https://localhost:5001/api/ShootingRange/update/${this.updateId}`,
          {
            address: this.addressInput,
            pricePerStall: this.pricePerStallInput,
          }
        )
        .subscribe(
          (result) => {
            console.log(result);
          },
          (error) => console.error(error)
        )
        .add(() => {
          this.route.navigate(["/ranges"]);
        });
    }
  };

  ngOnInit() {}
}
