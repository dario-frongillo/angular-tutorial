import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from "../services/user.service";
import {User} from '../model/user';

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user:User;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  @Output('onSelectUser') onSelectUser = new EventEmitter();

  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log('user =', this.user);
  }

  deleteUser() {
    this.userDeleted.emit(this.user);
  }

  updateUser() {
    this.onSelectUser.emit(Object.assign({}, this.user));
  }

}
