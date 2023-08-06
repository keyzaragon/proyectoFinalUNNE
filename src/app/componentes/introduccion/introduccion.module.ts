import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IntroduccionComponent } from './introduccion.component';



@NgModule({
  declarations: [
    IntroduccionComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    IntroduccionComponent
  ]  
})
export class IntroduccionModule { }
