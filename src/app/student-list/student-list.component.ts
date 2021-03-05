import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course, CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent implements OnInit {

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
 onsubmit():void {
  this.router.navigate(['/course-register']);
 }
 goback():void {
  this.router.navigate(['']);
 }
}