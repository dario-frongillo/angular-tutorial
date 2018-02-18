import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UserService} from "../users/user.service";

@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input() user;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  constructor(private userService: UserService) { }

  ngOnInit() {
    console.log('user =', this.user);
  }

  deleteUser() {
    //this.userService.deleteUser(this.user);
    this.userDeleted.emit(this.user);
  }

}
