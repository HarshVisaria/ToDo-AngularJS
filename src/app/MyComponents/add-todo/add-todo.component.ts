import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoFormat } from 'src/app/Todos';
import { TodosComponent } from '../todos/todos.component';

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {

  @Output() sendTodo : EventEmitter<TodoFormat> = new EventEmitter();

  title!: string;
  desc!: string;
  public i=0

  constructor() { }

  ngOnInit(): void {
  }

  submitDetails(){
    // console.log("this is todos component" + TodosComponent)
    // this.i = TodosComponent.length() + 1;
    this.i += 1;
    const todo={
      sno : this.i,
      title : this.title,
      desc : this.desc,
      active : true
    }
    this.sendTodo.emit(todo);
  }

}
