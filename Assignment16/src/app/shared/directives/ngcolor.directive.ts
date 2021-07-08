import { HostListener } from '@angular/core';
import { HostBinding } from '@angular/core';
import { Directive } from '@angular/core';

@Directive({
  selector: '[ngColor]'
})
export class NgcolorDirective {
  @HostBinding('style.color')color:String
  @HostBinding('style.backgroundColor')bgcolor:String
  @HostBinding('style.fontFamily')font:String
  @HostBinding('style.fontWeight')fontweight:String
  constructor( ) {
    this.color='black'
    this.bgcolor="white"
    this.font="Arial"
    this.fontweight="normal"
   }
   @HostListener('mouseover') onMouseOver()
   {
    this.color='white'
     this.bgcolor="pink"
     this.fontweight="bold"

   }


   @HostListener('mouseleave') onMouseLeave()
   {
    this.color='black'
     this.bgcolor="white"
     this.fontweight="normal"
   }
}
