import { Component } from '@angular/core';

import { AuthService } from '../user/auth.service';

@Component({
  selector: 'nav-bar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})

export class NavBarComponent {
  constructor(public authService: AuthService) {

  }
}
