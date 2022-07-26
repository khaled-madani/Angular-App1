import { Component, OnInit } from '@angular/core';
import { AppService } from '../services/app.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent implements OnInit{
  isDisabled:boolean = false;
  name:string= '';
  email:string= 'Email:';
  password:string= '';
  formStatus: boolean= true
  saturate:string='';
  grayscale:string='';
  userName:string='userName:'

  constructor(private appService:AppService){

  }
  ngOnInit(): void {
    this.appService.welcomeComponent('PersonComponent');

  }
  onCreateForm():void{
    console.log('button clicked..............');
    if(!this.name || !this.email || !this.password){
      this.formStatus= false;
    }else{
      this.formStatus= true;

    }

  }

  onNameChange(nameValue:string):void{
    console.log(nameValue);
    this.name = nameValue
  }

  onEmailChange(emailValue:any):void{
    this.email = emailValue.target.value
  }

  onPasswordChange(passwordValue:any):void{
    this.password= passwordValue.target.value
  }

  saturateClick(){
    if (!this.saturate) {
      this.saturate="saturate"
    } else {
      this.saturate=""
      }
  }
  grayscaleClick(){
    if (!this.grayscale) {
      this.grayscale="grayscale"
    } else {
      this.grayscale=""
      }
  }
}
