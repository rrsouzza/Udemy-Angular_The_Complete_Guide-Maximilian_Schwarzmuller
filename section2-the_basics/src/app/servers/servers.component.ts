import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-servers',    // escrito dessa forma, seu seletor é uma tag HTML.
  //selector: '[app-servers]',  -> escrito dessa forma, seu seletor é um atributo. (ex: <div app-servers></div>)
  //selector: '.app-servers',

  //templateUrl: './servers.component.html',

  //Todo componente *deve* ter um template. Seja referenciando um link de um arquivo externo (como o servers.component.html, ou um html interno, como escrito abaixo:)
  template: `
  <app-server></app-server>
  <app-server></app-server>`,
  // ` ` permitem escrever uma expressão em múltiplas linhas
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
