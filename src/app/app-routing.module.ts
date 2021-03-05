import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCourseComponent } from './add-course/add-course.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AuthGuardService } from './auth-guard.service';
import { CourseRegisterComponent } from './course-register/course-register.component';
import { HomeComponent } from './home/home.component';
import { ListCourseComponent } from './list-course/list-course.component';
import { ListRegisterComponent } from './list-register/list-register.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StudentListComponent } from './student-list/student-list.component';
import { UpdateCourseComponent } from './update-course/update-course.component';



const routes: Routes = [
  {path:'', component:HomeComponent},
  { path:'admin-login', component: AdminLoginComponent },
  { path:'admin-login', component: AdminLoginComponent,canActivate:[AuthGuardService] },
  {path:'login',component:LoginComponent},
  {path:'add-course', component: AddCourseComponent},
  {path:'list-course', component:ListCourseComponent},
  {path:'update-course', component:UpdateCourseComponent},
  {path:'register',component:RegisterComponent},
  {path:'course-register',component:CourseRegisterComponent},
  {path:'student-list',component:StudentListComponent},
  {path:'list-register',component:ListRegisterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
