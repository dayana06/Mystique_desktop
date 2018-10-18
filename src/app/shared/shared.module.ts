
import { MaterialDesignModule} from './../material-design/material-design.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BackgroundImageComponent } from './components/background-image/background-image.component';
import { BadgeDirective } from './directives/badge.directive';



@NgModule({
  imports: [
    CommonModule,
    MaterialDesignModule,

  ],
  declarations: [BackgroundImageComponent, BadgeDirective],
  exports: [MaterialDesignModule,BadgeDirective, BackgroundImageComponent, CommonModule]
})
export class SharedModule { }
