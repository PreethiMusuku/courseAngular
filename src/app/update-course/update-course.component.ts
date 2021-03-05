import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Course, CourseServiceService } from '../course-service.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

 
  user:Course=new Course(0,"","","");
    
  constructor(private courseservice: CourseServiceService, private router: Router) { }

  ngOnInit(): void {
  }


  updatecourse(user){
    this.courseservice.updatecourse(this.user).subscribe(data => {});
           this.router.navigate(['/list-course']);
  }
goback():void{
  this.router.navigate(['/list-course']);
}
}
