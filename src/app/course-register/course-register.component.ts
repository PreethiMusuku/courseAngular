import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CourseServiceService, StudentInfo } from '../course-service.service';

@Component({
  selector: 'app-course-register',
  templateUrl: './course-register.component.html',
  styleUrls: ['./course-register.component.css']
})
export class CourseRegisterComponent implements OnInit {
  user:StudentInfo;
  constructor(private courseservice: CourseServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  register():void{
    this.courseservice.register(this.user)
        .subscribe(data => {});
            this.router.navigate(['/list-register']);
        
}
gotocourse():void {
  this.router.navigate(['/student-list']);
}
}

