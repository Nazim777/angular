import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  // interpolation
  name='nazim'
  obj={
    name:'rahim',
    email:'rahim@gmail.com'
  }

  users=[
    {
      id:1,
      name:'karim',
      email:'karim@gmail.com'
    },
    {
      id:2,
      name:'habib',
      email:'habib@gmail.com'
    },
    {
      id:3,
      name:'nazim',
      email:'nazim@gmail.com'
    }
  ]

  handleClick(){
   alert('button is clicked!')
  }

  getName(){
    return this.name
  }

  printHello(hello:string){
    console.log(hello)
  }




  // form
  LoginDetails={
    email:'',
    password:''
  }
  formSubmit(formValue:any){
    console.log('formValud',this.LoginDetails)
    // after form submition make empty the form
    this.LoginDetails={
      email:'',
      password:''
    }

  }

}
