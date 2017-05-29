import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { Note } from './models/Note';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {

  title: string = 'Esteban';
  subtitle: string = 'Keep';
  notes: Note[] = [];

  @ViewChild(MenuComponent)
  private menuComponent: MenuComponent;

  ngAfterViewInit() {
  }

  toogleMenu() {
    this.menuComponent.toogle();
  }

  receiveNote(note) {
    this.notes.push(note);
  }
}
