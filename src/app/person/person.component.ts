import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.scss']
})
export class PersonComponent{
  isDisabled:boolean = false;
  name:string= '';
  email:string= '';
  password:string= '';
  formStatus: boolean= true
  saturate:string='';
  grayscale:string='';



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
