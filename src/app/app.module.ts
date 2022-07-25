import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonProComponent } from './components/person-pro/person-pro.component';
import { PersonProMaxComponent } from './components/person-pro-max/person-pro-max.component';
import { Person2ProMaxComponent } from './components/person2-pro-max/person2-pro-max.component';
import { PersonTwoComponent } from './components/person-two/person-two.component';
import { PersonThreeComponent } from './components/person-three/person-three.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonProComponent,
    PersonProMaxComponent,
    Person2ProMaxComponent,
    PersonTwoComponent,
    PersonThreeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent] // render to component in index.html
})
export class AppModule { }
