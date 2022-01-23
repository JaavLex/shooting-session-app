import { HttpClient } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-person-adder",
  templateUrl: "./person-adder.component.html",
  styleUrls: ["./person-adder.component.css"],
})
export class PersonAdderComponent implements OnInit {
  nameInput: string;
  ageInput: number;

  constructor(
    private http: HttpClient,
    @Inject("BASE_URL") private baseUrl: string,
    private route: Router
  ) {}

  confirmClick = () => {
    if (this.nameInput === undefined || this.ageInput === undefined) {
      alert("You must fill all fields before submitting !");
    } else {
      this.http
        .post<Person>("https://localhost:5001/api/Person", {
          name: this.nameInput,
          age: this.ageInput,
        })
        .subscribe(
          (result) => {
            console.log(result);
          },
          (error) => console.error(error)
        )
        .add(() => {
          this.route.navigate(["/persons"]);
        });
    }
  };

  ngOnInit() {}
}
