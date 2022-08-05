import { Component, Input, OnInit } from '@angular/core';
import { AppService } from 'src/app/services/app.service';
import { SharedService } from 'src/app/shared/services/shared.service';

@Component({
  selector: 'app-first-app',
  templateUrl: './first-app.component.html',
  styleUrls: ['./first-app.component.scss']
})
export class FirstAppComponent implements OnInit {
  country:string = 'Palestine'
  constructor(private appService:AppService,public sharedService: SharedService) { }

  ngOnInit(): void {
    this.appService.welcomeComponent('FirstAppComponent');
    console.log(this.sharedService.getElemants());
  }

}
