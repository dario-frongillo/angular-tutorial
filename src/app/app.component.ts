import { Component } from '@angular/core';
import {User} from './model/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userSelected: User = new User();
  showForm: boolean = false;

  updateUser(user: User) {
    this.userSelected = user;
    this.showForm = true;
  }

  newUser() {
     this.userSelected = new User();
     this.showForm = true;
  }
}
