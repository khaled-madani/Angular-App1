import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user:any={}
  constructor(private authenticationService:AuthenticationService) { }

  ngOnInit(): void {
    this.user = this.authenticationService.getUserInformation()
  }

}
