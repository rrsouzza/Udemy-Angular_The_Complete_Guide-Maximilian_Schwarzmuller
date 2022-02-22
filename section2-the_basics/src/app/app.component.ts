import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //styleUrls: ['./app.component.css']
  //É possível ter mais de um arquivo .css referenciando estilo em um componente, ou múltiplas definições in-line. Por isso é necessário os [] para definir o style, pois ele recebe um array de argumentos ou expressões.
  styles: [`
    h3{
      color: dodgerblue;
    }
  `]
})
export class AppComponent {
  title = 'section2-the_basics';
}
