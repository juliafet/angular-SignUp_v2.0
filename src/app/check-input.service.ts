import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckInputService {
  constructor() {}

  checkName(name) {
    if (name == undefined) return false;
    else return true;
  }

  checkEmail(email) {
    if (email == undefined) return false;
    else return true;
  }

  checkPassword(password) {
    if (password == undefined) return false;
    else return true;
  }

  checkConfirmPassword(password, confirmPassword) {
    if (password === confirmPassword) return true;
    else return false;
  }
}
