import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcedureRoutingModule } from './procedure-routing.module';
import { ProcedureComponent } from './pages/procedure/procedure.component';
import { ProceduresComponent } from './pages/procedures/procedures.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ProcedureComponent,
    ProceduresComponent
  ],
  imports: [
    CommonModule,
    ProcedureRoutingModule,
    ReactiveFormsModule
  ]
})
export class ProcedureModule { }
