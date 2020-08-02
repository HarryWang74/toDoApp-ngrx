import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { ToDo } from './../../models/todo';

@Component({
  selector: 'to-do-detail',
  templateUrl: './to-do-detail.component.html',
  styleUrls: ['./to-do-detail.component.scss']
})
export class ToDoDetailComponent implements OnInit {
	selectedToDo: ToDo;
	editing: boolean = false;

	constructor(
	) { }

	ngOnInit() {

	}

	saveToDo() {
		setTimeout(() => {
			this.editing = false;
		});
	}

    deleteToDo() {
		setTimeout(() => {
			this.editing = false;
		});
  	}
}
