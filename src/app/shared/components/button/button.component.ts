import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { SharedService } from '../../services/shared.service';


@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {
  @Input() label:string=''
  @Input('classes') classBtn:string = ''
  @Output('onClick') clickBut:EventEmitter<any> = new EventEmitter<any>()
  constructor(private sharedService: SharedService) { }

  click(){
    console.log( `shared actions for all buttons ${this.label} , ${this.classBtn}`);
    this.clickBut.emit()
  }


  ngOnInit(): void {
  }

}
