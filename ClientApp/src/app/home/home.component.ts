import { HttpClient } from '@angular/common/http';
import { Component, OnInit, Inject } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  public sessions: ShootingSession[];
  public mostRecentSession: ShootingSession;

  constructor(http: HttpClient, @Inject('BASE_URL') baseUrl: string) {
    http.get<ShootingSession[]>(baseUrl + 'api/ShootingSession').subscribe(result => {
      this.sessions = result;
    }, error => console.error(error));

    http.get<ShootingSession>(baseUrl + 'api/ShootingSession/most-recent').subscribe(result => {
      this.mostRecentSession = result;
    }, error => console.error(error));
  }
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