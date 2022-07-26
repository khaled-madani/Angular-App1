import { AfterViewInit, Component, OnInit } from '@angular/core';

// decorator component => metadata
@Component({
  selector: 'app-root', // component name to used
  templateUrl: './app.component.html', // path HTML to component
  styleUrls: ['./app.component.scss'] // Array inside paths CSS to component
})
export class AppComponent implements OnInit,AfterViewInit{
  // this file name app.component.ts
  // file name => app-secendPar.component.ts
  //file names html  like this =>app-secendPar.component.html
  //file names css or scss like this =>app-secendPar.component.css or scss
  title: string = 'AngularApp1';
  name: string = 'KHALED';
  private salary: number = 2000; // private and only accessible within class and you can't used private state in HTML
  user:{
    name:string,
    age:number
  } = {
    name:'khlaed',
    age: 21
  };
  data:any[]=[
    {name:'Interpolation',desc:'{{ templateExpression }}'},
    {name:'Property binding',desc:' [innerHtml], [disabled]'},
    {name:'Class Binding',desc:'cssStringVar“ or “’class’”'},
    {name:'Style Binding',desc:'[style.color]=“colorVar“ or “’color’”'},
    {name:'Attribute binding',desc:' [attr.aria-label]="closeLabel"'},
    {name:'Event Binding',desc:' (click)="onSave()"'}
  ]
  names: string[] = ['ali',"mohammed",'khaled','belal','ahmad'];
  isloggedIn:boolean = false;
  usersTab:any[]=[
    {name: 'ali',age: 30,avg: 80, status : true},
    {name: 'ahmad',age: 20,avg: 99, status : true},
    {name: 'mohammed',age: 80,avg: 58, status : false},
    {name: 'abdallah',age: 60,avg: 86, status : true},
    {name: 'walied',age: 55,avg: 80, status : false},
    {name: 'baraa',age: 30,avg: 96, status : false}
  ]
  isDisabled: boolean= true;
  changeHtml:string= '<h2>WELCOME TO ANGULAR APPLICATION</h2>';
  className:string= 'darkred';
  constructor() {  // initialized class
    console.log('constructor ........AppComponent');

  }
  loadPage:number=1
  loadCopmonent(number:number){
    this.loadPage = number
  }
  ngOnInit(): void {  // initialized component
    console.log('ngOnInit ........AppComponent');

    setTimeout(()=>{
      this.user ={name:'Ali',age:33}
      this.isloggedIn = true
      this.isDisabled = false
      this.title = 'Welcome AngularApp1'
      this.changeHtml='<h2><i>Angular application Say Hello. Changed....</i></h2>'
      this.className= 'blueviolet'
      setTimeout(() => {
        this.usersTab.push({name:'adam',age: 20 ,avg:90,status:true})
        setTimeout(() => {
          this.usersTab.push({name:'adam',age: 20 ,avg:90,status:true})
          this.usersTab.push({name:'adam',age: 20 ,avg:90,status:true})
          this.usersTab.push({name:'adam', age: 20 ,avg:90,status:true})

        }, 2000);
      }, 2000);
    },5000)
    // var data = '';
    // this.names.forEach(item => {
    //   data+=`<div>${item}</div>`
    // })
  }

  ngAfterViewInit(): void {  // initialized View(html)
    console.log('ngAfterViewInit ........AppComponent');

    // throw new Error('Method not implemented.');
  }
}
