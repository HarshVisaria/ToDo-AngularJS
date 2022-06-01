import { Component, OnInit } from '@angular/core';
import { TodoFormat } from 'src/app/Todos';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  localItem: string | null;
  todos!: TodoFormat[];

  constructor() {
    this.localItem = localStorage.getItem("todos");
    // console.log("Printing localitem", this.localItem)
    // this.todos = [
    //   {
    //     sno: 1,
    //     desc: "this is first todo",
    //     title: "first todo",
    //     active: true
    //   },
    //   {
    //     sno: 2,
    //     desc: "this is second todo",
    //     title: "second todo",
    //     active: true
    //   }
    // ];
    if (this.localItem == null) {
      this.todos = [];
      console.log("Printing localitem", this.localItem);
    } else {
      this.todos = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
  }

  deleteTodo(Recievedtodo: TodoFormat) {
    this.todos.splice(this.todos.indexOf(Recievedtodo), 1);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  addTodo(Recievedtodo: TodoFormat) {
    // console.log("hi" + this.todos[this.todos.length - 1])
    const todoLength = this.todos[this.todos.length - 1].sno + 1;
    Recievedtodo.sno = this.todos.length + 1;
    console.log(Recievedtodo);
    this.todos.push(Recievedtodo);
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }

  checkBox(Recievedtodo: TodoFormat) {
    const todoIndex = this.todos.indexOf(Recievedtodo);
    this.todos[todoIndex].active = !this.todos[todoIndex].active;
    localStorage.setItem("todos", JSON.stringify(this.todos));
  }
}
