import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';

import {AdminListComponent} from './admin/admin-list/admin-list.component';
import {WelcomeComponent} from './welcomes/welcome/welcome.component';
import {TeacherListComponent} from './TypeUser/teacher/teacher-list/teacher-list.component';
import {TopicListComponent} from './topic/topic-list/topic-list.component';
import {UserListComponent} from './TypeUser/user/user-list/user-list.component';
import {CourseListComponent} from './course/course-list/course-list.component';
import {TopicPageComponent} from './topic/topic-page/topic-page.component';
import {CourseDetailComponent} from './course/course-detail/course-detail.component';
import {CourseUpdateComponent} from './course/course-update/course-update.component';
import {CourseCreateComponent} from './course/course-create/course-create.component';
import {AuthGuard} from './Shared/guards/auth.guard';
import {CommonModule} from '@angular/common';
import {DashboardComponent} from './Shared/dashboard/dashboard.component';
import {DashboardTeacherComponent} from './TypeUser/dashboard-teacher/dashboard-teacher.component';



let routes: Routes;
routes = [
  {path: 'dashboard-teacher', component: DashboardTeacherComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'course-create', component: CourseCreateComponent},
  {path: 'course-update', component: CourseUpdateComponent},
  {path: 'course/:id', component: CourseDetailComponent},
  {path: 'topic-page', component: TopicPageComponent},
  {path: 'course-list', component: CourseListComponent},
  {path: 'teacher-list', component: TeacherListComponent},
  {path: 'topic-list', component: TopicListComponent},
  {path: 'user', component: UserListComponent},
  {path: 'admin', component: AdminListComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'login', component: LoginComponent },
  {path: '', component: WelcomeComponent, canActivate: [AuthGuard]},
// otherwise redirect to welcome
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
