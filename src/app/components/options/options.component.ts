import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from './../../models/Note';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  @Output() sendNote = new EventEmitter();
  title = 'title';
  text = 'text';
  isShowingNoteTxtFields = false;

  constructor() {

  }

  ngOnInit() {

  }

  onfocusout(event) {
    console.log(event);
    this.isShowingNoteTxtFields = false;
  }

  onTakeNote() {
    this.isShowingNoteTxtFields = true;
  }


  onDone() {
    this.sendNote.emit(new Note(this.title, this.text));
    this.isShowingNoteTxtFields = false;
    this.title = 'title';
    this.text = 'text';
  }

  onTitleChange(event) {
    this.title = event.target.value;
  }

  onTextChange(event) {
    this.text = event.target.value;
  }
}