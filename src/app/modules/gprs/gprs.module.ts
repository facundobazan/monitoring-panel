import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { GprsReportComponent } from 'src/app/pages/gprs/report/gprs-report.component';
import { GprsRoutingModule } from './gprs-routing.module';


@NgModule({
  declarations: [
    GprsReportComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    GprsRoutingModule
  ]
})
export class GprsModule { }
