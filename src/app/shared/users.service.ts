import { Injectable } from '@angular/core';
import { UserList } from './users.mock';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor() { }

  getAllUsers() {
    return UserList;
  }

  getActiveUsers() {
    return UserList.filter(function (e) {
      return e.isDeleted === false;
    });
  }

  getDeletedUsers() {
    return UserList.filter(function (e) {
      return e.isDeleted === true;
    });
  }

  find(id) {
    return UserList[id - 1];
  }

}
