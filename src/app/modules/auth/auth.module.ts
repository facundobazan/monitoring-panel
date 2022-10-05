import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { LoginComponent } from 'src/app/pages/auth/login/login.component';
import { LogoutComponent } from 'src/app/pages/auth/logout/logout.component';
import { RegisterComponent } from 'src/app/pages/auth/register/register.component';
import { ProfileComponent } from 'src/app/pages/auth/profile/profile.component';
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
