import { Component } from '@angular/core';

export interface ITodo {
  key: number;
  done: boolean;
  text: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  todos: ITodo[] = []

  addNewTodo(todo: string): void {
    this.todos = [
      ...this.todos,
      { key: Date.now(), done: false, text: todo }
    ]
    console.log(this.todos);
  }
}