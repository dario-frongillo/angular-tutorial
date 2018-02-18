import {Injectable} from "@angular/core";

@Injectable()
export class UserService {
  users = [
    {
      name: 'Dario',
      lastname: 'Frongi',
      email: 'dario.frongi@gmail.com',
      province: 'Livorno',
      phone: '34886868606',
      age: 43
    },
    {
      name: 'Mario',
      lastname: 'Frongi',
      email: 'dario.frongi@gmail.com',
      province: 'Livorno',
      phone: '34886868606',
      age: 43
    },
    {
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
  deleteUser(user) {
    const idx = this.users.indexOf(user);
    if (idx > 0) {
      this.users.splice(idx, 1);
    }
  }
  getUsers() {
    return this.users;
  }
}
