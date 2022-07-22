import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonProComponent } from './components/person-pro/person-pro.component';
import { PersonProMaxComponent } from './components/person-pro-max/person-pro-max.component';
import { Person2ProMaxComponent } from './components/person2-pro-max/person2-pro-max.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonProComponent,
    PersonProMaxComponent,
    Person2ProMaxComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent,PersonComponent] // render to component in index.html
})
export class AppModule { }
