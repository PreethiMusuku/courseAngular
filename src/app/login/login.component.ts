import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService, StudentInfo } from '../course-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user:StudentInfo=new StudentInfo(0,"","","","",[]);
  valid: any;
  message: any;
  error: boolean;
result:any;
status:boolean;
  constructor(private courseservice: CourseServiceService,private router: Router) { }
  login(user){
    this.courseservice.studentlogin(user).subscribe(data => {});
           this.router.navigate(['/student-list']);
  }
      
      ngOnInit() {
      }
gotoregister():void{
  this.router.navigate(['/register']);
}
}
