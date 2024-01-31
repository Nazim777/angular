import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class TodoserviceService {
  private apiUrl = 'http://localhost:3000/todos';
  constructor(private http:HttpClient) { }

getAllTodos(){
return this.http.get(this.apiUrl)
  }

  deleteTodo(id:any){
    const url = `${this.apiUrl}/${id}`
    return this.http.delete(url,id)
  }

  createTodo(todo:any){
    return this.http.post(this.apiUrl,todo)

  }

  getTodo(id:any){
    return this.http.get(`${this.apiUrl}/${id}`)
  }

  updateTodo(id:any,todo:any){
    return this.http.patch(`${this.apiUrl}/${id}`,todo)
  }

}
