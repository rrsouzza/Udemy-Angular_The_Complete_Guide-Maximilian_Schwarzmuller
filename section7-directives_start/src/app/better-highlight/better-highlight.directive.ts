import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]',
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor = 'transparent';
  @Input() highlightColor = 'blue';
  @HostBinding('style.backgroundColor') localBackgroundColorProperty!: string;
  // HostBinding permite atribuir uma propriedade de um elemento à uma propriedade local da diretiva. Em combinação com HostListener, podemos atribuir um valor diretamente à propriedade local.

  constructor(private elRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue', false, false);
    this.localBackgroundColorProperty = this.defaultColor;
  }

  @HostListener('mouseenter') mouseover(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'blue');
    this.localBackgroundColorProperty = this.highlightColor;
  }
  @HostListener('mouseleave') mouseleave(eventData: Event) {
    // this.renderer.setStyle(this.elRef.nativeElement, 'backgroundColor', 'transparent');
    this.localBackgroundColorProperty = this.defaultColor;
  }
}
