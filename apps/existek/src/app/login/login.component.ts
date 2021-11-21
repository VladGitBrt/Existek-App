/* eslint-disable @nrwl/nx/enforce-module-boundaries */
import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { IUser } from '../../../../../libs/api-interfaces/src/lib/api-interfaces';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'existek-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  login = true;
  register = false;
  hide = true;
  user!: IUser;
  constructor(private auth: AuthService, public router: Router) {}
  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  nameFormControl = new FormControl('');
  repassFormControl = new FormControl('');
  passFormControl = new FormControl('');
  matcher = new ErrorStateMatcher();
  registerFrame(): void {
    this.login = !this.login;
    this.register = !this.register;
    console.log(this.login, this.register);
  }
  loginUser(email: string, pass: string) {
    this.auth.loginUser().subscribe((data) => {
      data.forEach((user: IUser) => {
        if (user.email == email && user.password == pass) {
          this.user = user;
          console.log(user);
          this.router.navigate(['/home']);
        }
      });
    });
  }
  registerUser(
    email: string,
    pass: string,
    repass: string,
    name: string
  ): void {
    if (pass !== repass) {
      alert('Your password does not match!');
    } else {
      console.log(
        `Name: ${name} Email: ${email} Pass: ${pass} Repass: ${repass}`
      );
      if (name == '' || email == '' || pass == '' || repass == '') {
        alert('Fill all inputs');
      } else {
        const newUser = {
          name: name,
          password: pass,
          email: email,
        };
        this.auth.registerUser(newUser).subscribe((data) => {
          console.log(data);
          this.router.navigate(['/home']);
        });
      }
    }
  }
}
