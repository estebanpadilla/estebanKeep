import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/Rx';

@Injectable()
export class NoteService {

	constructor(private http: Http) {

	}

	fetchNotes() {
		return this.http.get('../../assets/data/notes.json').map(res => res.json());
	}
}
