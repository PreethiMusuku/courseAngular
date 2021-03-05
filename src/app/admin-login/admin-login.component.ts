import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})

export class AdminLoginComponent implements OnInit {

  username = ''
  password = ''
  invalidLogin = false

  constructor(private router: Router,
    public loginservice: AuthenticationService) { }

  ngOnInit() {
  }
  checkLogin() {
    if (this.password == "" || this.username == "") {
      window.alert("Please enter your Username and password");
      return false;
    }
    if (this.loginservice.authenticate(this.username, this.password))
     {
      this.router.navigate(['/add-course'])
      this.invalidLogin = false;
    } else
    {
      this.invalidLogin = true;
  }

}
}
