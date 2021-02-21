import { Component } from '@angular/core';

import { TODO } from './todo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'basicToDo';

  list: TODO[] = [];
  textValue: string;
  previousValue: string = '';

  today = new Date();

  addTodo(){
    if(this.textValue!==""){
      const newTodo = {
        id: Date.now(),
        value: this.textValue,
        isDone: false
      }
      if(this.previousValue !== this.textValue){
        this.list.push(newTodo);
      }
    }
    this.previousValue = this.textValue;
    this.textValue = "";
  }

  dltTodo(id: number){
    this.list = this.list.filter(item => item.id !== id);
  }
}
