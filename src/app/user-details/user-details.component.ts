import {Component, Input, OnInit} from '@angular/core';
import {User} from '../model/user';
import {UserService} from '../services/user.service';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {

 private __user: User;
  private userCopy: User;

  @Input() set user(user: User){
    this.__user = user;
    this.userCopy = Object.assign({} , user);
  }

  get user() {
    return this.__user;
  }


  constructor(private userService: UserService, private route: ActivatedRoute ) {

  }

  ngOnInit() {
    this.user = new User();
    this.route.params.subscribe(
      (params) => {
        this.user = this.userService.getUser(+params.id);
      }
    );
  }

  saveUser() {
    debugger;
    if (this.user.id > 0) {
      this.userService.updateUser(this.user);
    } else {
      this.userService.createUser(this.user);
    }
  }
  resetForm(form) {
    if (this.user.id === 0) {
      this.user = new User();
    } else {
      this.user = this.userCopy;
    }
  }

}
