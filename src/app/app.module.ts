import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PersonComponent } from './person/person.component';
import { PersonProComponent } from './components/person-pro/person-pro.component';
import { PersonProMaxComponent } from './components/person-pro-max/person-pro-max.component';
import { FirstAppComponent } from './components/first-app/first-app.component';
import { SecondAppComponent } from './components/second-app/second-app.component';
import { ThirdAppComponent } from './components/third-app/third-app.component';
import { SharedModule } from './shared/shared.module';
import { AppService } from './services/app.service';
import { LayoutModule } from './layout/layout.module';

@NgModule({
  declarations: [
    AppComponent,
    PersonComponent,
    PersonProComponent,
    PersonProMaxComponent,
    FirstAppComponent,
    SecondAppComponent,
    ThirdAppComponent,
  ],

  imports:[
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    LayoutModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent], // render to component in index.html
  exports: [
    FirstAppComponent,
  ]
})
export class AppModule { }
