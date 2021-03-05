import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService, StudentInfo } from '../course-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  user:StudentInfo=new StudentInfo(0,"","","","",[]);
    
  constructor(private courseservice: CourseServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  register():void{
    this.courseservice.register(this.user)
        .subscribe(data => {});
            this.router.navigate(['/login']);
        
}
gotologin():void {
  this.router.navigate(['/login']);
}
}
