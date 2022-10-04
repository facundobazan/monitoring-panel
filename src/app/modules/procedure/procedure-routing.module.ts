import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcedureComponent } from './pages/procedure/procedure.component';
import { ProceduresComponent } from './pages/procedures/procedures.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'view', component: ProcedureComponent },
      { path: 'list', component: ProceduresComponent },
      { path: '**', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcedureRoutingModule { }
