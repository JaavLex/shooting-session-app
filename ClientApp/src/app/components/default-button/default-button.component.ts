import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-default-button',
  templateUrl: './default-button.component.html',
  styleUrls: ['./default-button.component.css']
})
export class DefaultButtonComponent implements OnInit {
  @Input() insideContent: string = '';

  constructor() { }

  ngOnInit() {
  }

}
