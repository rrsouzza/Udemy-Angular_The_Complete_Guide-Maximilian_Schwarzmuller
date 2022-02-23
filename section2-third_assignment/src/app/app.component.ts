import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  passwordDisplayed: boolean = false;
  clicks: Array<number> = [];

  changeDisplay(): void {
    this.passwordDisplayed ? this.passwordDisplayed = false : this.passwordDisplayed = true;

    this.clicks.push(this.clicks.length + 1);
  }
}
