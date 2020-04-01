import { Injectable } from '@angular/core';
import { usersList } from './users.mock';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getAllUsers() {
    return usersList;
  }

  getActiveUsers() {
    return usersList.filter(user => user.isDeleted === false);
  }

  getDeletedUsers() {
    return usersList.filter(user => user.isDeleted === true);
  }

  getUserDetails(userId: number) {
    return usersList.find(user => user.id === userId);
  }

  changeStatus(userId: number): void {
    let index = usersList.findIndex(user => user.id === userId);
    usersList[index].isDeleted = !usersList[index].isDeleted;
  }

}
