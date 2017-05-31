import { Component, AfterViewInit, ViewChild } from '@angular/core';
import { MenuComponent } from './components/menu/menu.component';
import { Note } from './models/Note';
import { NoteService } from './services/note.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements AfterViewInit {

  title: string = 'Esteban';
  subtitle: string = 'Keep';
  notes = [new Note('Title 1', 'Text 1'),
  new Note('Title 2', 'Text 2'),];

  @ViewChild(MenuComponent)
  private menuComponent: MenuComponent;

  constructor(private _servive: NoteService) {

  }

  ngAfterViewInit() {
    // this._servive.fetchNotes().subscribe((data) => {
    //   console.log(data);
    //   this.notes = data.notes;
    // });
  }

  toogleMenu() {
    this.menuComponent.toogle();
  }

  receiveNote(note) {
    this.notes.push(note);
  }
}
