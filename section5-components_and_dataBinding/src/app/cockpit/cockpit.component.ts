import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})

export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output('bpCreated') blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // @Output pode receber um alias como argumento, "substituindo" o nome original da propriedade. Assim, blueprintCreated só poderá ser acessado externamento quando chamado pelo alias 'bpCreated'.
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverContentInput', {static: true}) serverContentInput!: ElementRef;

  constructor() { }

  ngOnInit(): void {
  }

  // nameInput: espera uma referência do elemento HTML Input, que é passado como parâmetro através de uma referência local no HTML.
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }

  // nameInput: espera uma referência do elemento HTML Input, que é passado como parâmetro através de uma referência local no HTML.
  onAddBlueprint(nameInput: HTMLInputElement) {
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value
    });
  }
}
