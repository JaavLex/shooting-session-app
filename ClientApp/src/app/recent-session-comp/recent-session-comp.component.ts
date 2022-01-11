import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-recent-session-comp',
  templateUrl: './recent-session-comp.component.html',
  styleUrls: ['./recent-session-comp.component.css']
})
export class RecentSessionCompComponent implements OnInit {
  @Input() sessionList = [];

  constructor() { }

  ngOnInit() {
  }

}
