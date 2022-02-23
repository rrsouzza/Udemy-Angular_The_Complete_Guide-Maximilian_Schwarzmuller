import { Component, OnInit } from '@angular/core';

@Component({

  selector: 'app-servers',    // escrito dessa forma, seu seletor é uma tag HTML.
  //selector: '[app-servers]',  -> escrito dessa forma, seu seletor é um atributo. (ex: <div app-servers></div>)
  //selector: '.app-servers',

  //templateUrl: './servers.component.html',

  //Todo componente *deve* ter um template. Seja referenciando um link de um arquivo externo (como o servers.component.html, ou um html interno, como escrito abaixo:)
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>`,
  // ` ` permitem escrever uma expressão em múltiplas linhas
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCreationStatus: string = 'No server was created!';
  serverName: string = 'Testserver';
  serverCreated: boolean = false
  // Com two-way-dataBinding definido, ao carregar a página o valor do input atrelado à essa propriedade iniciará com o valor da propriedade.
  servers: Array<string> = ['Testserver', 'Testserver 2'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {
  }

  onCreateServer(): void {
    this.serverCreated = true;
    this.serverCreationStatus = 'Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
  }

  onUpdateServerName(event: Event): void {
    this.serverName = (<HTMLInputElement>event.target).value;
  }

}
