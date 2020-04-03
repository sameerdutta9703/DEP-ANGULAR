import { Injectable } from '@angular/core';
import { User } from './users.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  mainURL: string = 'http://localhost:8080/';
  usersMainURL: string = `${this.mainURL}users/`;

  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersMainURL);
  }

  getActiveUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersMainURL).pipe(
      map(usersList => usersList.filter(user => user.isDeleted === false))
    );
  }

  getDeletedUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.usersMainURL).pipe(
      map(usersList => usersList.filter(user => user.isDeleted === true))
    );
  }

  getUserDetails(userId: string): Observable<User> {
    return this.http.get<User>(this.usersMainURL + userId);
  }

  changeStatus(userData: User): Observable<User> {
    return this.http.put<User>(this.usersMainURL + userData.id, {
      isDeleted: !userData.isDeleted
    });
  }

  createUser(userData: User): Observable<User> {
    return this.http.post<User>(this.usersMainURL, userData);
  }

  updateUser(userData: Partial<User>){
    return this.http.put<User>(this.usersMainURL+userData.id, {
      password: userData.password,
      age: userData.age,
      isDeleted: userData.isDeleted
    });
  }
}
