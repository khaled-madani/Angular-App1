import { Injectable } from '@angular/core';

@Injectable(
  {
   providedIn:'root' // allowed all app
  }
)
export class SharedService {

  constructor() { }
  getElemants():string[]{
    return ['DIV','Button','P','TABLE']
  }
}
