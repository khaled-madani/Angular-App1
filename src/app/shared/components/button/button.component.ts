import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label:string=''
  @Input('classes') classBtn:string = ''
  @Output('props') props:EventEmitter<any> = new EventEmitter<any>()
  @Output('onClick') clickBut:EventEmitter<string> = new EventEmitter<string>()
  constructor() { }

  click(){
    this.clickBut.emit('massageHi')
  }
  propss(){
    this.props.emit()
  }
  ngOnInit(): void {
  }

}
