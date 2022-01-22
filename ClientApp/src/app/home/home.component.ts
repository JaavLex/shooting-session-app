import { HttpClient } from "@angular/common/http";
import { Component } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent {
  public sessions: ShootingSession[];
  public mostRecentSession: ShootingSession;

  constructor(private http: HttpClient, private router: Router) {
    http
      .get<ShootingSession[]>(`https://localhost:5001/api/ShootingSession`)
      .subscribe(
        (result) => {
          this.sessions = result;
        },
        (error) => console.error(error)
      );

    http
      .get<ShootingSession>(
        `https://localhost:5001/api/ShootingSession/most-recent`
      )
      .subscribe(
        (result) => {
          this.mostRecentSession = result;
        },
        (error) => console.error(error)
      );
  }

  setShownSession = (id: number) => {
    this.http
      .get<ShootingSession>(`https://localhost:5001/api/ShootingSession/${id}`)
      .subscribe(
        (result) => {
          this.mostRecentSession = result;
        },
        (error) => console.error(error)
      );
  };
}

interface ShootingSession {
  sessionDate: Date;
  totalPrice: number;
  stallCount: number;
  shootingRange: Object;
  sessionParticipants: Object;
  usedAmmunitions: Object;
  usedWeapons: Object;
}
