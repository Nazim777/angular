import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})


export class ProfileComponent {
  @Input() name:any
  @Input() userInfo:any
  @Output() parentFunction:EventEmitter<any>= new EventEmitter()
  @Output() parentFunction2:EventEmitter<any>= new EventEmitter()

  ngOnInit():void{
    this.parentFunction.emit('Hello from child components1')
  }

  handleSendData(data:any){
    console.log('data',data)
    this.parentFunction2.emit(data)
  }

}
