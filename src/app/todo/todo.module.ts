import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TodoListComponent} from './components/todo-list/todo-list.component'
import { EntityMetadataMap, EntityDefinitionService, EntityDataService, DefaultDataServiceConfig } from '@ngrx/data';
import { ToDoEntityService } from './services/todo-entity.service'
import { ToDoDataService } from './services/todo-data.service'

export const todoRoutes: Routes = [
    {
        path: '',
        component: TodoListComponent
    }
];

const entityMetadata: EntityMetadataMap = {
    ToDo: {
  
    }
}
  

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(todoRoutes)
    ],
    declarations: [TodoListComponent],
    exports: [TodoListComponent],
    providers: [
        ToDoEntityService,
        ToDoDataService,
    ]
})
export class TodoModule {
    constructor(
        private entityDefinitionService: EntityDefinitionService,
        private entityDataService: EntityDataService,
        private toDoDataService: ToDoDataService) {
    
        entityDefinitionService.registerMetadataMap(entityMetadata);
        entityDataService.registerService('ToDo', toDoDataService);
      }
}
