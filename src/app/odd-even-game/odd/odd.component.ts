import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-odd',
  templateUrl: './odd.component.html',
  styleUrls: ['./odd.component.scss']
})
export class OddComponent implements OnInit {

  _isRunning: string;
  get isRunning(): string {
    return this._isRunning;
  }
  @Input() set isRunning(value: string) {
    this._isRunning = value;
    if (this._isRunning) {
      this.startOddGame();
    } else {
      this.pauseOddGame();
    }
  }

  oddList: Array<number> = [];
  odd: number = -1;
  interval: any;

  constructor() { }

  ngOnInit(): void {
  }

  startOddGame() {
    this.interval = setInterval(() => {
      this.odd = this.odd + 2;
      this.oddList.push(this.odd);
    },1000)
  }

  pauseOddGame() {
    clearInterval(this.interval);
  }

}
