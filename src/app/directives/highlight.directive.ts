import { Directive, HostBinding, HostListener, input, Input, OnInit, signal } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  in = input('yellow');
  out = input('red');

  @HostBinding('style.backgroundColor')
  bgc = signal(this.out);
  constructor() { }
  ngOnInit(): void {
    this.bgc.set(this.out);
  }

  @HostListener('mouseenter') onMouseEnter() {
    this.bgc.set(this.in);
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.bgc.set(this.out);
  }
}
