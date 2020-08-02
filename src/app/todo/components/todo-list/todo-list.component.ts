import { Component, OnInit } from '@angular/core';
import {ToDo} from '../../models/toDo';
import {Observable} from 'rxjs';
import {ToDoEntityService} from '../../services/todo-entity.service';

@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{
  todos$: Observable<ToDo[]>;

  constructor(
    private todoService: ToDoEntityService) {
  }

  ngOnInit() {
    this.todos$ = this.todoService.entities$
  }
}
