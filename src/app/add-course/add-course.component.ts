import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course, CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  user:Course=new Course(0,"","","");
    
  constructor(private courseservice: CourseServiceService, private router: Router) { }

  ngOnInit(): void {
  }

  addCourse():void{
    this.courseservice.addCourse(this.user)
        .subscribe(data => {});
            this.router.navigate(['/list-course']);
}
gotoListPage():void {
  this.router.navigate(['/list-course']);
}
}


