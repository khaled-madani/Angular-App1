import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-app',
  templateUrl: './first-app.component.html',
  styleUrls: ['./first-app.component.scss']
})
export class FirstAppComponent implements OnInit {
  country:string = 'Palestine'
  constructor() { }

  ngOnInit(): void {
  }

}
