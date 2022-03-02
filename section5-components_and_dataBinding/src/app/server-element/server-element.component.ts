import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  // @Input('srvElement') element!: { type: string; name: string; content: string };
  // @Input aceita um argumento para definir um alias para a propriedade. No caso acima, 'srvElement' passa a ser o alias por qual a propriedade element será chamado, tornando obrigatório o seu uso. Ou seja, 'element' não será mais reconhecido como uma propriedade em escopos externos à essa classe, tornando obrigatório o uso do alias 'srvElement'.
  @Input() name: string | undefined;
  @ViewChild('heading', { static: true }) header?: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph?: ElementRef;
  // ContentChild permite acessar elementos no DOM em componentes "filhos" ao componente principal. 'contentParagraph' foi definido em um parágrafo no html do app.component, mas conseguimos acessar seu conteúdo aqui no server-element.component através do @ContentChild.

  constructor() {
    console.log('Constructor called!');
  }

  // É possível recuperar informações de um elemento assim que mudanças forem feitas à ele. É possível, por exemplo, recuperar o seu valor anterior à mudança feita.
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit() {
    console.log('ngOnInit called!');
    console.log('Text Content:' + this.header?.nativeElement.textContent);
    console.log('Text content of paragraph:' + this.paragraph?.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit called!');
    console.log('Text content of paragraph:' + this.paragraph?.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit called!');
    console.log('Text Content:' + this.header?.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked called!');
  }

  // ngOnDestroy permite executar algo no momento em que o componente é descartado.
  ngOnDestroy(): void {
    console.log('ngOnDestroy called!');
  }
}
