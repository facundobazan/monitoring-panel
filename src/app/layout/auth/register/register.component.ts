import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private authService: AuthService, private fBuilder: FormBuilder, private router: Router) {
    this.registerForm = this.initForm();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.register(this.registerForm.value)
      .then(() => this.router.navigate(['/login']))
      .catch(err => console.error(err))
  }

  initForm(): FormGroup {
    return this.fBuilder.group({
      email: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(18)]],
    })
  }
}
