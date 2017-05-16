import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  isShowing: boolean = false;
  @Input() title: string;
  @Input() subtitle: string;
  @Output() toogleMenu = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toogle() {
    this.toogleMenu.emit();
  }

}