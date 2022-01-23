import { HttpClient } from "@angular/common/http";
import { Component, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-range-viewer-comp",
  templateUrl: "./range-viewer-comp.component.html",
  styleUrls: ["./range-viewer-comp.component.css"],
})
export class RangeViewerCompComponent implements OnInit {
  @Input() range: Object = {};

  constructor(private http: HttpClient, private router: Router) {}

  deleteRange = (id: number) => {
    if (confirm("Are you sure you want to delete this range ?") == true) {
      this.http
        .delete(`https://localhost:5001/api/ShootingRange/delete/${id}`)
        .subscribe(
          (result) => {
            console.log(result);
          },
          (error) => console.error(error)
        );
      window.location.reload();
    }
  };

  updateRange = (id: number) => {
    this.router.navigate([`updaterange/${id}`]);
  };

  ngOnInit() {}
}
