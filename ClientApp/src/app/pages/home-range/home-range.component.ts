import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-home-range",
  templateUrl: "./home-range.component.html",
  styleUrls: ["./home-range.component.css"],
})
export class HomeRangeComponent implements OnInit {
  public ranges: ShootingRange[];
  public lastrange: ShootingRange;

  constructor(private http: HttpClient) {
    http
      .get<ShootingRange[]>(`https://localhost:5001/api/ShootingRange`)
      .subscribe(
        (result) => {
          this.ranges = result;
        },
        (error) => console.error(error)
      );

    http
      .get<ShootingRange>(`https://localhost:5001/api/ShootingRange/last`)
      .subscribe(
        (result) => {
          this.lastrange = result;
        },
        (error) => console.error(error)
      );
  }

  setShownRange = (id: number) => {
    this.http
      .get<ShootingRange>(`https://localhost:5001/api/ShootingRange/${id}`)
      .subscribe(
        (result) => {
          this.lastrange = result;
        },
        (error) => console.error(error)
      );
  };

  ngOnInit() {}
}
