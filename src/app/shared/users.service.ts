import { Injectable } from '@angular/core';
import { usersList } from './users.mock';
import { User } from './users.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getAllUsers(): User[] {
    return usersList;
  }

  getActiveUsers(): User[] {
    return usersList.filter(user => user.isDeleted === false);
  }

  getDeletedUsers(): User[] {
    return usersList.filter(user => user.isDeleted === true);
  }

  getUserDetails(userId: number): User {
    return usersList.find(user => user.id === userId);
  }

  changeStatus(userId: number): void {
    let index = usersList.findIndex(user => user.id === userId);
    usersList[index].isDeleted = !usersList[index].isDeleted;
  }

}
