import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersList: Array<User> =
    [
    { Id: 1, Name: 'Max', IsActive: true },
    { Id: 2, Name: 'Anna', IsActive: true },
    { Id: 3, Name: 'Chris', IsActive: false },
    { Id: 4, Name: 'Manu', IsActive: false }
  ];

  constructor() { }

  getUsers() {
    return this.usersList;
  }

  toggleState(id: number) {
    let index = this.usersList.findIndex(t => t.Id === id);
    this.usersList[index].IsActive = !this.usersList[index].IsActive;
  }
}

export default class User {
  Id: number;
  Name: string;
  IsActive: boolean;
}
