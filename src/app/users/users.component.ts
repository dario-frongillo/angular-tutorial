import {Component, OnInit} from '@angular/core';
import {UserService} from './user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements  OnInit {
  title = 'Users Dario';
  users = [];

  constructor(private service: UserService) {
  }

  ngOnInit() {
    this.users = this.service.getUsers();
  }

  onDeleteUser(user){
    this.service.deleteUser(user);
  }

}
