import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: [
    './app.component.css',
    '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
  ]
})
export class AppComponent {
  username: string = '';
  isBlank: boolean = true

  updateIsBlank(): void {
    this.username == '' ? this.isBlank = true : this.isBlank = false;
  }

  resetUsername(): void {
    this.username = '';
    this.updateIsBlank();
  }
}
