import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'form-add-todo',
  templateUrl: './form-add-todo.component.html',
  styleUrls: ['./form-add-todo.component.css']
})
export class FormAddTodoComponent {
  @Output() newTodo = new EventEmitter<string>()
  textTodo: string = '';

  onSubmit(): void {
    if (this.textTodo.length > 0) {
      this.newTodo.emit(this.textTodo);
      this.textTodo = '';
    }
  }
}
