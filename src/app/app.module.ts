import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NavbarWelcomeComponent } from './welcomes/shared/navbar-welcome/navbar-welcome.component';
import { NavbarUserComponent } from './Shared/Navbar/navbar-user/navbar-user.component';
import { NavbarTeacherComponent } from './Shared/Navbar/navbar-teacher/navbar-teacher.component';
import { AdminListComponent } from './admin/admin-list/admin-list.component';
import { CommentListComponent } from './comment/comment-list/comment-list.component';
import { CourseListComponent } from './course/course-list/course-list.component';
import { TeacherListComponent } from './TypeUser/teacher/teacher-list/teacher-list.component';
import { TopicListComponent } from './topic/topic-list/topic-list.component';
import { UserListComponent } from './TypeUser/user/user-list/user-list.component';
import {WelcomeComponent} from './welcomes/welcome/welcome.component';
import {NavbarAdminComponent} from './admin/shared/navbar-admin/navbar-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    NavbarWelcomeComponent,
    NavbarUserComponent,
    NavbarTeacherComponent,
    NavbarAdminComponent,
    AdminListComponent,
    CommentListComponent,
    CourseListComponent,
    TeacherListComponent,
    TopicListComponent,
    UserListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
