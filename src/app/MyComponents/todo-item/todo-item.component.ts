import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { TodoFormat } from 'src/app/Todos';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.scss']
})
export class TodoItemComponent implements OnInit {
  @Input() passedTodo! : TodoFormat;
  @Output() todoDelete:  EventEmitter<TodoFormat> = new EventEmitter();
  @Output() checkBoxTrigger:  EventEmitter<TodoFormat> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  deleteClicked(Recievedtodo : TodoFormat){
    console.log("Delete Clicked")
    console.log(Recievedtodo)
    this.todoDelete.emit(Recievedtodo);
  }

  checkBoxClick(Recievedtodo : TodoFormat){
    console.log("Checkbox triggered")
    this.checkBoxTrigger.emit(Recievedtodo)
  }
}
