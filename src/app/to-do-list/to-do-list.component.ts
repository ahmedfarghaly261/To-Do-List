import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { from } from 'rxjs';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {


  taskArray=[{taskName:'demo',done:false}]


  OnAdd(TaskForm:NgForm) 
  {
    console.log(TaskForm)
    this.taskArray.push({
      taskName: TaskForm.controls['addTask'].value,
      done:false




    })   
  }
  
  OnDelete(index :number){
    console.log(index)
    console.log(index)
    this.taskArray.splice(index,1)

  }
}
