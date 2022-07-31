import { AfterViewInit, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-pro',
  templateUrl: './person-pro.component.html',
  styleUrls: ['./person-pro.component.scss']
})
export class PersonProComponent implements OnInit ,AfterViewInit{

  @Input() userData:string=''

  isBorderBlack:boolean=false
  ngClassArr:string[]=['bold','red']
  scaleSize:number= 20
  fontWeight:string = ''
  colorDiv:string='blue'
  colorList:string[]=['Tomato','Orange','DodgerBlue','MediumSeaGreen','Gray','SlateBlue','Violet','LightGray']
  constructor() {   // initialized class
    console.log('constructor ........PersonProComponent');

  }
  scaleSizeFin(){
    this.scaleSize =this.scaleSize +1
  }
  scaleSizeFin2(){
    this.scaleSize =this.scaleSize -1
  }

  onClickSpan(color:string){
    console.log(color);
    this.colorDiv = color
  }
  ngOnInit(): void { // initialized component
    console.log('ngOnInit ........PersonProComponent');

    setTimeout(() => {
      this.ngClassArr.push('border-black')// add class to ngClassArr array
      setTimeout(() => {
        this.ngClassArr.push('border-radius-8')
        this.isBorderBlack=true
        this.fontWeight='bold'
      },2000)
    }, 2000);
  }

  ngAfterViewInit(): void { // initialized View(html)
    console.log('ngAfterViewInit ........PersonProComponent');

    // throw new Error('Method not implemented.');
  }
}
