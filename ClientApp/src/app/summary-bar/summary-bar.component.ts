import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-summary-bar',
  templateUrl: './summary-bar.component.html',
  styleUrls: ['./summary-bar.component.css']
})
export class SummaryBarComponent implements OnInit {
  @Input() summaryDate: Date = new Date();
  @Input() summaryShootingRange: string = "";
  @Input() summaryNumParticipants: number = 0;
  @Input() summaryPrice: number = 0;

  formatDate(date: Date) {
    var d = new Date(date),
        month = '' + (d.getMonth() + 1),
        day = '' + d.getDate(),
        year = d.getFullYear();

    if (month.length < 2) 
        month = '0' + month;
    if (day.length < 2) 
        day = '0' + day;

    return [year, month, day].join('-');
  }

  constructor() { }

  ngOnInit() {
  }

}
