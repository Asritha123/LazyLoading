import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipePipe } from './sort/pipe.pipe';
import { SearchPipe } from './pipes/search.pipe';
import { NgcolorDirective } from './directives/ngcolor.directive';



@NgModule({
  declarations: [PipePipe,SearchPipe,NgcolorDirective],
  imports: [
    CommonModule
  ],
  exports:[PipePipe,SearchPipe,NgcolorDirective]
})
export class SharedModule { }
