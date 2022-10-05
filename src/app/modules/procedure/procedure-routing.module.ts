import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProcedureListComponent } from 'src/app/layout/procedure/list/procedure-list.component';
import { ProcedureViewComponent } from 'src/app/layout/procedure/view/procedure-view.component';

const routes: Routes = [
  {
    path: '',
    children: [
      { path: 'view', component: ProcedureViewComponent },
      { path: 'list', component: ProcedureListComponent },
      { path: '**', redirectTo: 'list' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcedureRoutingModule { }
