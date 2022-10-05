import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from 'src/app/layout/auth/login/login.component';
import { LogoutComponent } from 'src/app/layout/auth/logout/logout.component';
import { RegisterComponent } from 'src/app/layout/auth/register/register.component';
import { ProfileComponent } from 'src/app/layout/auth/profile/profile.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    LoginComponent,
    LogoutComponent,
    RegisterComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule
  ]
})
export class AuthModule { }
