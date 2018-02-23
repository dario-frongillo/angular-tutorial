import {Injectable} from "@angular/core";
import {User} from '../model/user';

@Injectable()
export class UserService {
  users: Array<User> = [
    {
      id: 1,
      name: 'Dario',
      lastname: 'Frongi',
      email: 'dario.frongi@gmail.com',
      province: 'Livorno',
      phone: '34886868606',
      age: 43
    },
    {
      id: 2,
      name: 'Mario',
      lastname: 'Frongi',
      email: 'dario.frongi@gmail.com',
      province: 'Livorno',
      phone: '34886868606',
      age: 43
    },
    {
      id: 3,
      name: 'Franco',
      lastname: 'Frongi',
      email: 'dario.frongi@gmail.com',
      province: 'Livorno',
      phone: '34886868606',
      age: 42
    }
  ];

  constructor() {
  }
  deleteUser(user: User) {
    const idx = this.users.indexOf(user);
    if (idx > 0) {
      this.users.splice(idx, 1);
    }
  }
  getUsers() {
    return this.users;
  }

  updateUser(user: User) {

    const index: number = this.users.findIndex(userFound => userFound.id === user.id);
      if (index) {
        this.users[index] = user;
      }
  }

  createUser(user: User ) {
    const ids = this.users.map(u  => u.id);
    const max = Math.max(...ids);
    user.id = max + 1;

    this.users.push(user);
  }
}
