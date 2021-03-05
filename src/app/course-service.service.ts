import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CourseServiceService {

  constructor(private http:HttpClient) { }
  course:Course

  public addCourse(user: Course) {
    console.log(user);
    return this.http.post<Course>("http://localhost:9098/AddCourse", user);
 }

public getCourses() {
  console.log("test call");
  return this.http.get<Course>("http://localhost:9098/findAll");
}
public deleteCourse(courseId:number) {
  console.log(courseId);
  return this.http.delete<Course>("http://localhost:9098/deletecourse/"+courseId);
}
public getCourseById(courseId: number) {
  console.log("view");
  return this.http.get<Course>("http://localhost:9098/findCourse/"+courseId);
}
public  updatecourse(user: Course) {
  console.log(user);
  return this.http.put<Course>("http://localhost:9098/updatecourse", user);
}
public studentlogin(user:StudentInfo) {
  console.log(user);
  return this.http.get<StudentInfo>("http://localhost:1234/Login/"+user.stId +"/"+user.mailid +"/"+user.password);
}
public register(user: StudentInfo) {
  console.log(user);
  return this.http.post<StudentInfo>("http://localhost:9000/RegisterCourse", user);
}
public getRegCourse(stId:number) {
  console.log("view");
  return this.http.get<StudentInfo>("http://localhost:9000/findRegCourse/"+stId);
}
}
export class Course
{
  courseId:number;
  courseName:string;
  startDate:string;
  endDate:string;

  constructor(courseId:number, courseName:string, startDate:string, endDate:string  )
  {
    this.courseId=courseId;
    this.courseName= courseName;
    this.startDate=startDate;
    this.endDate=endDate;
  }
}
  export class StudentInfo
{
  stId:number;
  stName:string;
  qualification:string;
  mailid:string;
  password:string;
  registerdlist:Array<Course>;


  constructor(stId:number, stName:string, qualification:string, mailid:string, password:string,registerdlist:Array<Course> )
  {
    this.stId=stId;
    this.stName= stName;
    this.qualification=qualification;
    this.mailid=mailid;
    this.password=password;
    this.registerdlist=registerdlist;
  }
}