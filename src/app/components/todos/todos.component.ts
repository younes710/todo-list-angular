import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ITodo } from '../../app.component';


@Component({
  selector: 'todos-list',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  @Input() todos!: ITodo[];
  @Output() delete = new EventEmitter<number>()

  deleteTodo(key: number) {
    this.delete.emit(key);
  }
}
