import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProceduresService } from 'src/app/services/procedures/procedures.service';

@Component({
  selector: 'app-procedure',
  templateUrl: './procedure-view.component.html',
  styleUrls: ['./procedure-view.component.sass']
})
export class ProcedureViewComponent implements OnInit {
  procedureForm!: FormGroup;

  constructor(private fBuilder: FormBuilder, private procedureService: ProceduresService) { }

  ngOnInit(): void {
    this.procedureForm = this.initForm();
  }

  onSubmit(): void {
    //console.log(this.procedureForm.value);
    this.procedureService.addProcedure(this.procedureForm.value)
  }

  initForm(): FormGroup {
    return this.fBuilder.group({
      title: ['', [Validators.required]],
      body: ['', [Validators.required]],
      option: ['']
    })
  }
}
