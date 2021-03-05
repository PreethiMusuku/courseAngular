import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }
  authenticate(username, password) {
    if (username === "admin123@gmail.com" && password === "admin") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      alert("please enter valid credentials");
      return false;
    }
  }
  authenticated(username, password) {
    if (username === "" && password === "") {
      sessionStorage.setItem('username', username)
      return true;
    } else {
      return false;
    }
  }
  //Added
  isUserLoggedIn() {
    let user = sessionStorage.getItem('username')
    if (user != null) {
      return (user)
    }
  }
  //Added
  isUsersLoggedIn() {
    let user = sessionStorage.getItem('username')
    if (user == 'admin') {
      return 'admin'
    }
  }
}
