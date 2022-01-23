import { HttpClient } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-range-adder",
  templateUrl: "./range-adder.component.html",
  styleUrls: ["./range-adder.component.css"],
})
export class RangeAdderComponent implements OnInit {
  addressInput: string;
  pricePerStallInput: number;

  constructor(
    private http: HttpClient,
    @Inject("BASE_URL") private baseUrl: string,
    private route: Router
  ) {}

  confirmClick = () => {
    if (
      this.addressInput === undefined ||
      this.pricePerStallInput === undefined
    ) {
      alert("You must fill all fields before submitting !");
    } else {
      this.http
        .post<Person>("https://localhost:5001/api/ShootingRange", {
          address: this.addressInput,
          pricePerStall: this.pricePerStallInput,
        })
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
