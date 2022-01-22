import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-most-recent-comp",
  templateUrl: "./most-recent-comp.component.html",
  styleUrls: ["./most-recent-comp.component.css"],
})
export class MostRecentCompComponent implements OnInit {
  @Input() session: Object = {};

  formatDate(date: Date) {
    var d = new Date(date),
      month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  }

  constructor(private http: HttpClient, private router: Router) {}

  deleteSession = (id: number) => {
    if (confirm("Are you sure you want to delete this session ?") == true) {
      this.http
        .delete(`https://localhost:5001/api/ShootingSession/delete/${id}`)
        .subscribe(
          (result) => {
            console.log(result);
          },
          (error) => console.error(error)
        );
      window.location.reload();
    }
  };

  updateSession = (id: number) => {
    this.router.navigate([`updatesession/${id}`]);
  };

  ngOnInit() {}
}
