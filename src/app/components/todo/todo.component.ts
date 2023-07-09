import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  @Input('todoItem') todo!: string;
  @Input('todoKey') todoKey!: number;
  @Output() delete = new EventEmitter<number>()

  deleteTodo() {
    this.delete.emit(this.todoKey);
  }
}
