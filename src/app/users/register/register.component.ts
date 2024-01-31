import { Component } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { CommonModule} from '@angular/common';



@Component({
  selector: 'app-register',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

  userDetails = {
    name: '',
    email: '',
    mobile: '',
    age: null,
    gender: ''
  };

  submitForm(form: any): void {
    if (form.valid) {
      console.log('Form data:', this.userDetails);
      // after form submition make empty the form
      this.userDetails={
        name: '',
        email: '',
        mobile: '',
        age: null,
        gender: ''

      }
    }
  }

}
