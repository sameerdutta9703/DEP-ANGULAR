import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';
import { User } from 'src/app/shared/users.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  allUsersList$: Observable<User[]>;
  showDetails: boolean = true;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.allUsersList$ = this.usersService.getAllUsers();
  }

  showUserDetails(userData: User): void {
    this.router.navigate(['manage-users/details', userData.id]);
  }

  editUserDetails(userData: User): void{
    console.log("edit called");
    this.router.navigate(['manage-users/edit', userData.id]);
  }

  createUser(): void {
    console.log("inside create function");
    this.router.navigate(['manage-users/create']);
  }
}
