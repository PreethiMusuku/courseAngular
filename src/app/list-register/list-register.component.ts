import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Course, CourseServiceService, StudentInfo } from '../course-service.service';

@Component({
  selector: 'app-list-register',
  templateUrl: './list-register.component.html',
  styleUrls: ['./list-register.component.css']
})
export class ListRegisterComponent implements OnInit {
  course: StudentInfo;
  stId:number;
  constructor(private route: ActivatedRoute,private router: Router,private courseservice: CourseServiceService) { }

  ngOnInit() {

   this.course = new StudentInfo(0,"","","","",[]);

  this.stId = this.route.snapshot.params['stId'];
  
  this.courseservice.getRegCourse(this.stId)
    .subscribe(data => {
      console.log(data)
      this.course = data;
    }, error => console.log(error));
}

list(){
  this.router.navigate(['/student-list']);
}
}
