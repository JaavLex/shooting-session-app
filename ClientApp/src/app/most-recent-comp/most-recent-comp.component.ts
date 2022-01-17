import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-most-recent-comp',
  templateUrl: './most-recent-comp.component.html',
  styleUrls: ['./most-recent-comp.component.css']
})
export class MostRecentCompComponent implements OnInit {
  @Input() session: Object = {};

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
