import { Component ,Inject,OnInit} from '@angular/core';
import { TodoserviceService } from '../service/todoservice.service';
// import { RouterModule } from '@angular/router';
// import { routes } from '../../app.routes';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todolist',
  standalone: true,
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})


export class TodolistComponent  {
  todos: any[] = []; 
  constructor( private todoService:TodoserviceService,private router: Router){}
 
  ngOnInit(){
    this.getTodos()
  }

  getTodos(){
    return this.todoService.getAllTodos().subscribe((todos:any)=>{
      console.log(todos)
      this.todos=todos
    })
  }

  handleDelete(id:any){
    console.log('delete id',id)
    return this.todoService.deleteTodo(id).subscribe(()=>{
      this.getTodos()
    })

  }
  navigateToEdit(id:any){
    this.router.navigate(['/edittodo', id]);
  }
 

}
