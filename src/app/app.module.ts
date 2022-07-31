import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonProComponent } from './components/person-pro/person-pro.component';
import { PersonProMaxComponent } from './components/person-pro-max/person-pro-max.component';
import { FormsModule } from '@angular/forms';
import { FirstAppComponent } from './components/first-app/first-app.component';
import { SecondAppComponent } from './components/second-app/second-app.component';
import { ThirdAppComponent } from './components/third-app/third-app.component';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonProComponent,
    PersonProMaxComponent,
    FirstAppComponent,
    SecondAppComponent,
    ThirdAppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent] // render to component in index.html
})
export class AppModule { }
