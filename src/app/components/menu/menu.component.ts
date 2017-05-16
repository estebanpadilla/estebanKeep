import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }
  xposition: string = '-250px';
  isShowing: boolean = false;
  ngOnInit() {
  }

  toogle() {
    this.isShowing = !this.isShowing;

    if (this.isShowing) {
      this.xposition = '0px';
    } else {
      this.xposition = '-250px';
    }
  }

  hide() {
    this.isShowing = false;
    this.xposition = '-250px';
  }
}