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
  loading: boolean;
  todos$: Observable<ToDo[]>;

  constructor(
    private todoService: ToDoEntityService) {
  }

  ngOnInit() {
    this.todos$ = this.todoService.entities$
    this.loadData();
  }

  loadData(){
    this.loading = true; 
    this.todoService.getAll().subscribe(
      result => {this.loading = false},
      error => {console.log("load fail")}
    );
  }
}
