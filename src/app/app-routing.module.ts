import { NgModule } from '@angular/core';
import {RouterModule, Routes } from '@angular/router';

import {LoginComponent} from './login/login.component';

import {AdminListComponent} from './admin/admin-list/admin-list.component';
import {WelcomeComponent} from './welcomes/welcome/welcome.component';
import {CommentListComponent} from './comment/comment-list/comment-list.component';
import {TeacherListComponent} from './teacher/teacher-list/teacher-list.component';
import {TopicListComponent} from './topic/topic-list/topic-list.component';
import {UserListComponent} from './user/user-list/user-list.component';
import {CourseListComponent} from './course/course-list/course-list.component';



let routes: Routes;
routes = [
  {path: 'course-list', component: CourseListComponent},
  {path: 'comment-list', component: CommentListComponent},
  {path: 'teacher-list', component: TeacherListComponent},
  {path: 'topic-list', component: TopicListComponent},
  {path: 'user', component: UserListComponent},
  {path: 'admin', component: AdminListComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'login', component: LoginComponent },
  {path: '', component: WelcomeComponent},

  // otherwise redirect to welcome
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
