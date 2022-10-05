import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  constructor(private authService: AuthService, private fBuilder: FormBuilder, private router: Router) {
    this.loginForm = this.initForm();
  }

  ngOnInit(): void {
  }

  onSubmit() {
    this.authService.login(this.loginForm.value)
      .then(() => this.router.navigate(['/auth/profile']))
      .catch(err => console.error(err))
  }

  initForm(): FormGroup {
    return this.fBuilder.group({
      email: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(30)]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(18)]],
    })
  }
}
