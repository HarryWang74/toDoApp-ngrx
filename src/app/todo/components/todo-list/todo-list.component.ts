import { Component, OnInit } from '@angular/core';
import {ToDo} from '../../models/toDo';
import {Observable} from 'rxjs';
import {ToDoEntityService} from '../../services/todo-entity.service';
import {concatMap, delay, filter, first, map, shareReplay, tap, withLatestFrom} from 'rxjs/operators';
@Component({
  selector: 'todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent implements OnInit{
  loading$: Observable<boolean>;
  todos$: Observable<ToDo[]>;

  constructor(
    private todoService: ToDoEntityService) {
  }

  ngOnInit() {
    this.todoService.getAll();
    this.todos$ = this.todoService.entities$
    this.loading$ = this.todoService.loading$.pipe(delay(0));
  }
}
