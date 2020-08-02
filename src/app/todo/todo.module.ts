import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {TodoListComponent} from './components/todo-list/todo-list.component'

export const todoRoutes: Routes = [
    {
        path: '',
        component: TodoListComponent,
    }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(todoRoutes)
    ],
    declarations: [],
    exports: [],
    providers: [
    ]
})
export class TodoModule {

}
