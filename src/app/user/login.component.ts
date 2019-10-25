import { Component } from '@angular/core';

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent {
  username: string;
  password: string;

  login(formValues) {
    console.log(formValues);
  }
}
