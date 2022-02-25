import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {
  @Input('srvElement') element!: { type: string; name: string, content: string};
  // @Input aceita um argumento para definir um alias para a propriedade. No caso acima, 'srvElement' passa a ser o alias por qual a propriedade element será chamado, tornando obrigatório o seu uso. Ou seja, 'element' não será mais reconhecido como uma propriedade em escopos externos à essa classe, tornando obrigatório o uso do alias 'srvElement'.

  constructor() { }

  ngOnInit() {
  }
}
