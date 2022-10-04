import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GprsReportComponent } from 'src/app/pages/gprs/report/gprs-report.component';

const routes: Routes = [{
  path: '',
  children: [
    { path: 'report', component: GprsReportComponent },
    { path: '**', redirectTo: 'report' }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GprsRoutingModule { }
