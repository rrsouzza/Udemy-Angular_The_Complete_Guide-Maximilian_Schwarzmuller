// import { Directive, HostBinding, HostListener } from '@angular/core';

// @Directive({
//   selector: '[appDropdown]',
// })
// export class DropdownDirective {
//   @HostBinding('class.open') isOpen = false;
//   /* @HostBinding irá adicionar ou remover a classe 'open' do elemento Host da diretiva. A classe open é controlada pelo Bootstrap, que indica se o elemento está aberto ou fechado (dropdown). */

//   @HostListener('click') toggleOpen() {
//     this.isOpen = !this.isOpen;
//     /* @HostListener declara um evento que será monitorado a partir do elemento host. No caso do evento de click, irá executar a função toggleOpen(), que alterna entre true e false o valor da propriedade isOpen. */
//   }
// }
/* A versão acima habilita o toggle dos dropdowns apenas se clicar no botão especificamente. A versão abaixo alterna se o dropdown está aberto ou fechado ao clicar em qualquer lugar no DOM, assim como se clicar em um dropdown, outro que estiver aberto também é fechado. */

import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appDropdown]',
})
export class DropdownDirective {
  @HostBinding('class.open') isOpen = false;
  /* @HostBinding irá adicionar ou remover a classe 'open' do elemento Host da diretiva. A classe open é controlada pelo Bootstrap, que indica se o elemento está aberto ou fechado (dropdown). */

  @HostListener('document:click', ['$event']) toggleOpen(event: Event) {
    this.isOpen = this.elRef.nativeElement.contains(event.target) ? !this.isOpen : false;
    /* @HostListener declara um evento que será monitorado a partir do elemento host. No caso do evento de click, irá executar a função toggleOpen(), que alterna entre true e false o valor da propriedade isOpen. */
    /* @HostListener irá monitorar um evento de click em qualquer lugar do DOM(document). Caso o elemento que disparar o evento contenha a propriedade appDropdown, irá definir o valor de isOpen baseado em seu valor atual. */
  }

  constructor(private elRef: ElementRef) {}
}
