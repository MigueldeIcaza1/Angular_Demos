import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.scss']
})
export class EvenComponent implements OnInit {
  _isRunning: string;
  get isRunning(): string {
    return this._isRunning;
  }
  @Input() set isRunning(value: string) {
    this._isRunning = value;
    if (this._isRunning) {
      this.startEvenGame();
    } else {
      this.pauseEvenGame();
    }
  }

  evenList: Array<number> = [];
  even: number = 0;
  interval: any;

  constructor() { }

  ngOnInit(): void {
  }

  startEvenGame() {
    this.interval = setInterval(() => {
      this.even = this.even + 2;
      this.evenList.push(this.even);
    },1000)
  }

  pauseEvenGame() {
    clearInterval(this.interval);
  }

}
