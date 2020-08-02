import { Injectable } from '@angular/core'
// import { EntityCollectionServiceBase, EntityCollectionServiceElementsFactory } from '@ngrx/data'
import { ToDo } from '../models/toDo'
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Observable, of } from 'rxjs'
import { ToDoEntityService } from './todo-entity.service'
import { map, tap, filter, first } from 'rxjs/operators'

@Injectable()
export class ToDoResolver implements Resolve<boolean> {

    constructor(private toDoService: ToDoEntityService) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
        return this.toDoService.loaded$
            .pipe(
                tap(loaded => {
                    if (!loaded) {
                        this.toDoService.getAll()
                    }
                }),
                filter(loaded => !!loaded),
                first()

            );
    }
}