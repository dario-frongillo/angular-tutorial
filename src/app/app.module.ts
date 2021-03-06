import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import {UsersComponent} from './users/users.component';
import {UserService} from "./services/user.service";
import { UserComponent } from './user/user.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import {AngularFontAwesomeModule} from 'angular-font-awesome';
import { NavComponent } from './nav/nav.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ModalBasicComponent } from './modal-basic/modal-basic.component';
import {RouterModule, Routes} from "@angular/router";

const routes : Routes= [
  {
    path:'users',
    component:UsersComponent
  },
  {
    path:'',
    redirectTo:'users',
    pathMatch:'full',

  },
  {
    path:'users/new',
    component:UserDetailsComponent
  },
  {
    path:'users/:id/edit',
    component:UserDetailsComponent
  }
]
@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    UserDetailsComponent,
    NavComponent,
    ModalBasicComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFontAwesomeModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(routes)
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
