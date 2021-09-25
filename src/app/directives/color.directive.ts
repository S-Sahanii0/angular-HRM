import { NgStyle } from '@angular/common';
import { Directive, ElementRef, HostListener, Input, Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Directive({
  selector: '[appColor]'
})
export class ColorDirective {

 


  constructor(private el: ElementRef) {
   }

  @HostListener('mouseover')
  onMouseEnter(){
    this.onHover( '	#65a036')

  }

  @HostListener('mouseout')
  onMouseOut() {
    this.onHover(null);
  }

  private onHover(color:string | null){
    this.el.nativeElement.style.backgroundColor = color;
  }
  


}
