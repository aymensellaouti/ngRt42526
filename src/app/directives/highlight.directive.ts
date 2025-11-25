import { computed, Directive, HostBinding, HostListener, input, Input, linkedSignal, OnInit, signal } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  host: {
    '[style.backgroundColor]': 'this.bgc()',
    '(mouseenter)': 'this.onMouseEnter()',
    '(mouseleave)': 'this.onMouseLeave()',
  }
})
export class HighlightDirective {
  in = input('yellow');
  out = input('red');
  bgc = linkedSignal(() => this.out());
  onMouseEnter() {
    this.bgc.set(this.in());
  }
  onMouseLeave() {
    this.bgc.set(this.out());
  }
}
