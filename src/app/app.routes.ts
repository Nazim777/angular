import { Routes } from '@angular/router';
import { LoginComponent } from './users/login/login.component';
import { RegisterComponent } from './users/register/register.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AppComponent } from './app.component';
import { TodolistComponent } from './todos/todolist/todolist.component';
import { CreatetodoComponent } from './todos/createtodo/createtodo.component';


export const routes: Routes = [
    
{
    path:'login',component:LoginComponent
},
{
    path:"register",component:RegisterComponent
},
{
    path:"todolist",component:TodolistComponent
},
{
    path:"createtodo",component:CreatetodoComponent
},
{
    path:"edittodo/:id",component:CreatetodoComponent
},
// {
//     path:"**",component:PagenotfoundComponent
// }
];
