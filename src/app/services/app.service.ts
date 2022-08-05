import { Injectable } from '@angular/core';

@Injectable()
export class AppService {

  constructor() { }
  welcomeComponent(component:string){
    console.log("%cAngular %cservice",'background-color:red;color:white;font-size:17px;padding:5px','background-color:blue;color:white;font-size:17px;padding:5px');

    console.log(`welcome ${component}`);

  }
}
