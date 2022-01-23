import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-person",
  templateUrl: "./home-person.component.html",
  styleUrls: ["./home-person.component.css"],
})
export class HomePersonComponent implements OnInit {
  public persons: Person[];
  public lastperson: Person;

  constructor(private http: HttpClient) {
    http.get<Person[]>(`https://localhost:5001/api/Person`).subscribe(
      (result) => {
        this.persons = result;
      },
      (error) => console.error(error)
    );

    http.get<Person>(`https://localhost:5001/api/Person/last`).subscribe(
      (result) => {
        this.lastperson = result;
      },
      (error) => console.error(error)
    );
  }

  setShownPerson = (id: number) => {
    this.http.get<Person>(`https://localhost:5001/api/Person/${id}`).subscribe(
      (result) => {
        this.lastperson = result;
      },
      (error) => console.error(error)
    );
  };

  ngOnInit() {}
}
