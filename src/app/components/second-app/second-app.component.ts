import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-second-app',
  templateUrl: './second-app.component.html',
  styleUrls: ['./second-app.component.scss']
})
export class SecondAppComponent implements OnInit {
  @Input('countryName') nameCountry :string =''
  streetName:string=''
  constructor() { }
  onStreet:boolean=false
  onNameStreet(value:boolean){
    console.log('this value come third class',value);
    this.onStreet = value
  }

  onNameSSSS(value:string):void{
    this.streetName = value
  }
  ngOnInit(): void {

  }

}
