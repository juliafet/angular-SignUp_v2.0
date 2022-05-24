import { Component, OnInit } from '@angular/core';
import { CheckInputService } from '../check-input.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
  name!: String;
  email!: String;
  password!: String;
  confirmPassword!: String;
  errorMsg: String;

  constructor(private checkInput: CheckInputService) {}

  ngOnInit(): void {}

  userSignUp() {
    console.log('user ' + this.name);
    console.log('email ' + this.email);
    console.log('password ' + this.password);
    console.log('confirmPassword ' + this.confirmPassword);

    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      confirmPassword: this.confirmPassword,
    };

    if (!this.checkInput.checkName(user.name)) {
      this.errorMsg = 'Enter your Name';
      return false;
    } else if (!this.checkInput.checkEmail(user.email)) {
      this.errorMsg = 'Enter your Email';
      return false;
    } else if (!this.checkInput.checkPassword(user.password)) {
      this.errorMsg = 'Enter your Password';
      return false;
    } else if (
      !this.checkInput.checkConfirmPassword(user.password, user.confirmPassword)
    ) {
      this.errorMsg = 'Passwords do not match';
      return false;
    }
    return true;
  }
}
