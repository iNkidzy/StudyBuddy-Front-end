import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {LoginComponent} from './login/login.component';
import {CommonModule} from '@angular/common';
import {WelcomeComponent} from './welcome/welcome.component';



let routes: Routes;
routes = [
  {path: 'welcome', component: WelcomeComponent},
 // {path: 'login', component: LoginComponent },
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
