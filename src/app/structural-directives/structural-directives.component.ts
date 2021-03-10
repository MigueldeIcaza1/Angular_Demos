import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structural-directives',
  templateUrl: './structural-directives.component.html',
  styleUrls: ['./structural-directives.component.scss']
})
export class StructuralDirectivesComponent implements OnInit {

  constructor() { }
  numbersList: Array<number> = [0, 1, 2, 3, 4, 5, 6];
  canShow: boolean;

  ngOnInit(): void {
  }

  display() {
    this.canShow = true;
   // this.numbersList = this.numbersList.filter(t => t%2 != 0);
  }

}
