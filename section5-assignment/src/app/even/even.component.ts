import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-even',
  templateUrl: './even.component.html',
  styleUrls: ['./even.component.css'],
})
export class EvenComponent implements OnInit {
  @Input() extEvenNumber!: number;
  // @Input() permite recuperar um dado externo ao componente.

  constructor() {}

  ngOnInit(): void {}
}
