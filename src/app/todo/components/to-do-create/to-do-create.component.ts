import { Component, OnInit } from '@angular/core';
import {ToDoEntityService} from '../../services/todo-entity.service';
import {ToDo} from '../../models/toDo';
@Component({
  selector: 'to-do-create',
  templateUrl: './to-do-create.component.html',
  styleUrls: ['./to-do-create.component.scss']
})
export class ToDoCreateComponent implements OnInit {
  creating: boolean = false;
  create: boolean = false;

  constructor(
    private todoService: ToDoEntityService
  ) { }

  ngOnInit() {
  }

  startCreateToDo() {
    this.create = true;
    setTimeout(() => {
        document.getElementById("newToDoSubject").focus();
    }, 100);
  }


  savingToDo(input) {
    let newTodo:ToDo = {
      id:0,
      subject: input.value
    }
    this.todoService.add(newTodo).subscribe(
      (result) => {
        this.creating = false;
      },
    )
    setTimeout(() => {
      input.value = ""
      this.create = false;
    });
  } 
}
