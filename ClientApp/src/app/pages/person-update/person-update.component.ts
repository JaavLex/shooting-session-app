import { HttpClient } from "@angular/common/http";
import { Component, Inject, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-person-update",
  templateUrl: "./person-update.component.html",
  styleUrls: ["./person-update.component.css"],
})
export class PersonUpdateComponent implements OnInit {
  nameInput: string;
  ageInput: number;

  updateId: number;

  constructor(
    private http: HttpClient,
    @Inject("BASE_URL") private baseUrl: string,
    private route: Router,
    routeparams: ActivatedRoute
  ) {
    routeparams.params.subscribe((p) => (this.updateId = +p["id"]));

    http.get<Person>(baseUrl + `api/Person/${this.updateId}`).subscribe(
      (result) => {
        this.nameInput = result.name;
        this.ageInput = result.age;
      },
      (error) => console.error(error)
    );
  }

  confirmClick = () => {
    if (this.nameInput === undefined || this.ageInput === undefined) {
      alert("You must fill all fields before submitting !");
    } else {
      this.http
        .put<any>(`https://localhost:5001/api/Person/update/${this.updateId}`, {
          name: this.nameInput,
          age: this.ageInput,
        })
        .subscribe(
          (result) => {
            console.log(result);
          },
          (error) => console.error(error)
        );
      this.route.navigate(["/persons"]);
    }
  };

  ngOnInit() {}
}
