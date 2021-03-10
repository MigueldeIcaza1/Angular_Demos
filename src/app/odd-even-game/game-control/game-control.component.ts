import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.scss']
})
export class GameControlComponent implements OnInit {

  constructor() { }
  isRunning: boolean;

  ngOnInit(): void {
  }

  startGame() {
    this.isRunning = true;
  }

  endGame() {
    this.isRunning = false;
  }

}
