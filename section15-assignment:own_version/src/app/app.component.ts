import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild('form') signupForm!: NgForm;
  default = 'advanced';
  submitted = false;

  signup = {
    email: '',
    choice: '',
    password: '',
  };

  onSubmit() {
    console.log(this.signupForm);

    this.submitted = true;
    this.signup.email = this.signupForm.value.userData.email;
    this.signup.choice = this.signupForm.value.userData.choice;
    this.signup.password = this.signupForm.value.userData.password;

    this.signupForm.reset();
  }
}
