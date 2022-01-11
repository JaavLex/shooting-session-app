import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-summary-bar',
  templateUrl: './summary-bar.component.html',
  styleUrls: ['./summary-bar.component.css']
})
export class SummaryBarComponent implements OnInit {
  @Input() summaryDate: string = "";
  @Input() summaryShootingRange: string = "";
  @Input() summaryNumParticipants: number = 0;
  @Input() summaryPrice: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
