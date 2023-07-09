import { Component, Input } from '@angular/core';
import { ITodo } from '../../app.component';


@Component({
  selector: 'todos-list',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  @Input() todos!: ITodo[];
}
