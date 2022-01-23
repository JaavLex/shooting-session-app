import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-person-viewer-comp",
  templateUrl: "./person-viewer-comp.component.html",
  styleUrls: ["./person-viewer-comp.component.css"],
})
export class PersonViewerCompComponent implements OnInit {
  @Input() person: Object = {};

  constructor(private http: HttpClient, private router: Router) {}

  deletePerson = (id: number) => {
    if (confirm("Are you sure you want to delete this person ?") == true) {
      this.http
        .delete(`https://localhost:5001/api/Person/delete/${id}`)
        .subscribe(
          (result) => {
            console.log(result);
          },
          (error) => console.error(error)
        );
      window.location.reload();
    }
  };

  updatePerson = (id: number) => {
    this.router.navigate([`updateperson/${id}`]);
  };

  ngOnInit() {}
}
