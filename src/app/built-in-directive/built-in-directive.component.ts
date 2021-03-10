import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-built-in-directive',
  templateUrl: './built-in-directive.component.html',
  styleUrls: ['./built-in-directive.component.scss']
})
export class BuiltInDirectiveComponent implements OnInit {

  constructor() { }
  canShow: boolean;
  count: number = 0;
  countList: Array<number> = [];

  ngOnInit(): void {
  }

  toggleDisplay() {
    this.canShow = !this.canShow;
    this.count++;
    this.countList.push(this.count);
  }

}
