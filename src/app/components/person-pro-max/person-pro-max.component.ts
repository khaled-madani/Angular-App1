import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-person-pro-max',
  templateUrl: './person-pro-max.component.html',
  styleUrls: ['./person-pro-max.component.scss']
})
export class PersonProMaxComponent implements OnInit , AfterViewInit{

  constructor() { } // initialized class

  ngOnInit(): void {  // initialized component
  }

  ngAfterViewInit(): void { // initialized View(html)
    throw new Error('Method not implemented.');
  }
}
