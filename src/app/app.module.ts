import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { CourseComponent } from './course/course.component';
import { TopicComponent } from './topic/topic.component';
import { TeacherComponent } from './teacher/teacher.component';
import { UserComponent } from './user/user.component';
import { AdminComponent } from './admin/admin.component';
import { CommentComponent } from './comment/comment.component';
import {HttpClientModule} from '@angular/common/http';
import {ReactiveFormsModule} from '@angular/forms';
import { NavbarWelcomeComponent } from './welcome/navbar-welcome/navbar-welcome.component';
import { NavbarUserComponent } from './user/navbar-user/navbar-user.component';
import { NavbarTeacherComponent } from './teacher/navbar-teacher/navbar-teacher.component';
import { NavbarAdminComponent } from './admin/navbar-admin/navbar-admin.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    LoginComponent,
    CourseComponent,
    TopicComponent,
    TeacherComponent,
    UserComponent,
    AdminComponent,
    CommentComponent,
    NavbarWelcomeComponent,
    NavbarUserComponent,
    NavbarTeacherComponent,
    NavbarAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
