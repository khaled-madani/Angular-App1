import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

getUserInformation():any{
  return {
    name:'khaled',
    email:'khaled@gmail.com',
    userId:100
  }
}

}
