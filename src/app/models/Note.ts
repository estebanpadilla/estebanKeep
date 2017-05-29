export class Note {

	private title: string;
	private text: string;

	constructor(title: string, text: string) {
		this.setTitle(title);
		this.setText(text);
	}

	getTitle() { return this.title; }
	getText() { return this.text; }
	setTitle(value) { this.title = value; }
	setText(value) { this.text = value; }
}