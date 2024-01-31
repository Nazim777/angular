import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { ProfileComponent } from './users/profile/profile.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink,ProfileComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'demo-project';
  data='Nazim';
  userData={
    name:'Rahim Islam',
    email:"rahim@gmail.com"
  }

  parentComponents(data:any){
    console.log(data)
  }

  parentComponents2(data:any){
    console.log(data)
    alert(data)
  }
}
