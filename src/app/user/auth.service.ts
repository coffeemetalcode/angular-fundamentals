import { Injectable } from '@angular/core';

import { IUser } from './user.model';

@Injectable()
export class AuthService {
  currentUser: IUser;
  loginUser(username: string, password: string) {
    this.currentUser = {
      id: 1,
      userName: username,
      firstName: 'David',
      lastName: 'Stocker'
    };
  }

  isAuthenticated() {
    return !!this.currentUser;
  }
}
