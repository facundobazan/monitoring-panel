import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/layout/auth/login/login.component';
import { LogoutComponent } from 'src/app/layout/auth/logout/logout.component';
import { ProfileComponent } from 'src/app/layout/auth/profile/profile.component';
import { RegisterComponent } from 'src/app/layout/auth/register/register.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    { path: 'logout', component: LogoutComponent },
    { path: 'profile', component: ProfileComponent }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
