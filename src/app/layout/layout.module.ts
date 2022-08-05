import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { LogoutComponent } from './components/logout/logout.component';
import { SharedModule } from '../shared/shared.module';

let componentToExport = [HeaderComponent,FooterComponent]

@NgModule({
  declarations: [
    ...componentToExport,
    LogoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports:[
    ...componentToExport
  ]
})
export class LayoutModule {}
