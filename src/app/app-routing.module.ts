import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path:"procedures",
    loadChildren: ()=> import("./modules/procedure/procedure.module").then(m=>m.ProcedureModule)
  },
  {
    path:"gprs",
    loadChildren: ()=> import("./modules/gprs/gprs.module").then(m=>m.GprsModule)
  },
  {
    path: "**",
    redirectTo: "gprs"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
