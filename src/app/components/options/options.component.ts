import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Note } from './../../models/Note';

@Component({
  selector: 'app-options',
  templateUrl: './options.component.html',
  styleUrls: ['./options.component.css']
})
export class OptionsComponent implements OnInit {

  //2. Crear la variable para el event
  @Output() sendNote = new EventEmitter();
  titulo = 'title';
  texto = 'text';
  isShowingNoteTxtFields = false;

  constructor() { }
  ngOnInit() { }

  onfocusout(event) {
    console.log(event);
    this.isShowingNoteTxtFields = false;
  }

  onTakeNote() {
    this.isShowingNoteTxtFields = true;
  }


  onDone() {
    //3. Use the event
    this.sendNote.emit(new Note(this.titulo, this.texto));
    this.isShowingNoteTxtFields = false;
    this.titulo = 'title';
    this.texto = 'text';
  }

  onTitleChange(event) {
    this.titulo = event.target.value;
  }

  onTextChange(event) {
    this.texto = event.target.value;
  }
}