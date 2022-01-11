import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-most-recent-comp',
  templateUrl: './most-recent-comp.component.html',
  styleUrls: ['./most-recent-comp.component.css']
})
export class MostRecentCompComponent implements OnInit {
  @Input() summaryDate: string = "";
  @Input() summaryShootingRange: string = "";
  @Input() summaryParticipants = [];
  @Input() summaryAmmos = [];
  @Input() summaryWeapons = [];
  @Input() summaryPrice: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
