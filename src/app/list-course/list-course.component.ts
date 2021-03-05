import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course, CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {
  courses: Course;
   user : Course = new Course(0,"","","");
   courseId: number;
   constructor(private courseservice: CourseServiceService,private router: Router) {}
  ngOnInit(): void 
 {
        this.courseservice.getCourses().subscribe(
             response =>this.handleSuccessfulResponse(response),
    );
        }
 handleSuccessfulResponse(response)
 {
   this.courses=response;
 }
deleteCourse(courseId: number) {
  console.log(courseId);
  if(confirm("Are you sure you want to delete the user with"+courseId))
  {
  this.courseservice.deleteCourse(courseId)
    .subscribe(
      data => {
        console.log(data);
      },
      error => console.log(error));
}
}
 updatecourse()
 {
   this.router.navigate(['update-course']);
 }
 goback():void {
  this.router.navigate(['']);
 }
}