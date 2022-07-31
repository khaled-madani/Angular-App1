import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-third-app',
  templateUrl: './third-app.component.html',
  styleUrls: ['./third-app.component.scss']
})
export class ThirdAppComponent implements OnInit {
  @Input('countryName2') nameC:string = ''
  nameS:string=''
  @Output('NameStreet')  streetName: EventEmitter<boolean> = new EventEmitter<boolean>(false)

  @Output('NameSSSS')  data: EventEmitter<string> = new EventEmitter<string>()
  constructor() { }
  onNameChange(value:string):void{
    this.nameS = value
    this.data.emit(this.nameS)

  }
  ngOnInit(): void {
    // setTimeout(() => {
    // }, 5000);
  }

}
