import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { ITodo } from '../models/todo.interface';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  private mock: ITodo[] = [
    { "id": 1, "title": "Tree porcupine", "description": "Coendou prehensilis", "isCompleted": false, "isArchived": false, "endDate": "7/12/2020", selected: true },
    { "id": 2, "title": "Yellow-rumped siskin", "description": "Carduelis uropygialis", "isCompleted": false, "isArchived": false, "endDate": "9/25/2020", selected: false },
    { "id": 3, "title": "Robin, white-throated", "description": "Irania gutteralis", "isCompleted": false, "isArchived": false, "endDate": "2/5/2021", selected: false },
    { "id": 4, "title": "Lion, south american sea", "description": "Otaria flavescens", "isCompleted": false, "isArchived": false, "endDate": "6/13/2020", selected: false },
    { "id": 5, "title": "Buffalo, american", "description": "Bison bison", "isCompleted": false, "isArchived": false, "endDate": "9/4/2020", selected: false },
    { "id": 6, "title": "Kangaroo, red", "description": "Macropus rufus", "isCompleted": false, "isArchived": false, "endDate": "8/27/2020", selected: false },
    { "id": 7, "title": "Mexican wolf", "description": "Canis lupus baileyi", "isCompleted": false, "isArchived": false, "endDate": "10/1/2020", selected: false }];

  private _todoSubject: BehaviorSubject<Array<ITodo>> = new BehaviorSubject(this.mock);

  private singleTodoSubject: BehaviorSubject<ITodo> = new BehaviorSubject(this.mock[0]);

  constructor() { }

  public getTodos(): Observable<Array<ITodo>> {
    return this._todoSubject.asObservable();
  }

  public getSelectedTodo(): Observable<ITodo> {
    return this.singleTodoSubject.asObservable();
  }

  public setSelectedTodo(todo: ITodo) {
    this.singleTodoSubject.next(todo);
  }
}
