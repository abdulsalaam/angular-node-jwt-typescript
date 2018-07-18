import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { take } from 'rxjs/internal/operators';
import { LoginResponse } from '../core/models/login-response';
import { UserInfo } from '../core/models/user-info';
import { AuthenticationService } from '../core/services/authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  message: string;
  constructor(private fb: FormBuilder, private authenticationService: AuthenticationService, private router: Router) {}

  ngOnInit() {
      this.loginForm = this.fb.group({
          userId: [ '', Validators.required ],
          password: [ '', Validators.required ]
      });
  }

  submit() {
      const formValue = this.loginForm.value;
      let userInfo: UserInfo = new UserInfo(formValue.userId, formValue.password);
      let loginStatus$ = this.authenticationService.login(userInfo);
      loginStatus$.pipe(take(1)).subscribe((response: HttpResponse<LoginResponse>) => {
          console.log(`Response from the login endpoint`, response);
          if (response.body.result) {
              this.router.navigate(['dashboard']);
          } else {
              this.message = response.body.message;
          }
      }, e => {
          //TODO display error message
          console.log(`The error: `, e);
      });
  }

  get userId(): AbstractControl {
      return this.loginForm.controls['userId'];
  }

  get password(): AbstractControl {
      return this.loginForm.controls['password'];
  }

}
