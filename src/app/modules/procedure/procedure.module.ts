import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcedureRoutingModule } from './procedure-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { ProcedureViewComponent } from 'src/app/pages/procedure/view/procedure-view.component';
import { ProcedureListComponent } from 'src/app/pages/procedure/list/procedure-list.component';


@NgModule({
  declarations: [
    ProcedureViewComponent,
    ProcedureListComponent
  ],
  imports: [
    CommonModule,
    ProcedureRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProcedureModule { }
