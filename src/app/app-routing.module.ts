import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {CommonModule} from '@angular/common';
import {WelcomeComponent} from './welcome/welcome.component';
import {AdminComponent} from './admin/admin.component';
import {UserComponent} from './user/user.component';
import {TopicComponent} from './topic/topic.component';
import {TeacherComponent} from './teacher/teacher.component';
import {CommentComponent} from './comment/comment.component';
import {CourseComponent} from './course/course.component';



let routes: Routes;
routes = [
  {path: 'course', component: CourseComponent},
  {path: 'comment', component: CommentComponent},
  {path: 'teacher', component: TeacherComponent},
  {path: 'topic', component: TopicComponent},
  {path: 'user', component: UserComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: 'login', component: LoginComponent },
  {path: '', component: WelcomeComponent},

  // otherwise redirect to welcome
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
