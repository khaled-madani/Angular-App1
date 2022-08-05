import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonComponent } from '../shared/components/button/button.component';
import { SharedService } from './services/shared.service';

@NgModule({
  declarations:[
    ButtonComponent
  ],
  imports:[
    CommonModule,
    FormsModule
  ],
  providers:[],
  exports:[
    ButtonComponent,
    FormsModule
  ]
})

export class SharedModule {

}
