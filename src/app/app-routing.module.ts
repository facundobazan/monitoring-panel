import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home/home.component';

const routes: Routes = [
  {
    path: "procedures",
    loadChildren: () => import("./modules/procedure/procedure.module").then(m => m.ProcedureModule)
  },
  {
    path: "gprs",
    loadChildren: () => import("./modules/gprs/gprs.module").then(m => m.GprsModule)
  },
  {
    path: "auth",
    loadChildren: () => import("./modules/auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: 'home', component: HomeComponent
  },
  {
    path: "**",
    redirectTo: "home"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
