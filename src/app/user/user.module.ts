import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { userRoutes } from './user.routes';
import { LoginComponent } from './login.component';
import { ProfileComponent } from './profile.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(userRoutes),
    ReactiveFormsModule
  ],
  declarations: [
    LoginComponent,
    ProfileComponent
  ],
  providers: [

  ]
})

export class UserModule {}
