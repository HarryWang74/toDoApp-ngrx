import { Injectable } from '@angular/core'
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data'
import { ToDo } from '../models/toDo'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

@Injectable()
export class ToDoDataService extends DefaultDataService<ToDo> {
    constructor(http: HttpClient, httpUrlGenerator: HttpUrlGenerator) {
        super('ToDo', http, httpUrlGenerator);
    }

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':  'application/json'
        })
    }

    getAll(): Observable<ToDo[]> {
        return this.http.get<ToDo[]>('http://localhost:3000/todos').pipe(delay(2000));
    }

    
    add(toDo:ToDo): Observable<ToDo>{
        return this.http.post<ToDo>('http://localhost:3000/todos/', toDo, this.httpOptions).pipe(delay(2000));
    }


}