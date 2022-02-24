import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html'
})
export class LogComponent implements OnInit {
  logArray: Array<number> = [];

  constructor() {}

  ngOnInit(): void {
  }

  getColor(): string {
    return this.logArray.length >= 5 ? 'blue' : 'undefined';
  }

  getLog(): number {
    return this.logArray[this.logArray.length - 1];
  }

}
