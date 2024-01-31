import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TodoserviceService } from '../service/todoservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-createtodo',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './createtodo.component.html',
  styleUrl: './createtodo.component.css'
})
export class CreatetodoComponent {
  todoId:any
  updateTodo:any
  constructor(private todoService:TodoserviceService,private route: ActivatedRoute,private router:Router){}

  ngOnInit() {
    this.todoId = this.route.snapshot.paramMap.get('id');
    
    // Fetch the task details using the todoId
    this.todoService.getTodo(this.todoId).subscribe((todo:any)=>{
      // console.log(todo)
      this.updateTodo=todo
    })
  }

  todo={
    title:'',
    desc:''
  }

  createTodo(data:any){
    if(data.valid){
      console.log(this.todo)
      this.todoService.createTodo(this.todo).subscribe((todo)=>{
        alert('todo created')
        this.todo={
          title:'',
          desc:''
        }
        this.router.navigate(['/todolist'])
      })
      
    }
  }

  editTodo(data:any){
    
    console.log('data',data.form.value)
    this.todoService.updateTodo(this.todoId,data.form.value).subscribe((todo:any)=>{
      console.log('todo updated')
      alert('todo updated')
      this.router.navigate(['/todolist'])
    })

  }
}
