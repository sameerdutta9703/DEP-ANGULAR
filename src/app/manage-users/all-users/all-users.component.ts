import { Component, OnInit, Output } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';
import { User } from 'src/app/shared/users.model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ManageUserService } from 'src/app/shared/manage-user.service';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  allUsersList$: Observable<User[]>;
  showDetails: boolean = true;

  constructor(private usersService: UsersService, private router: Router, private manageUserService: ManageUserService) { }

  ngOnInit(): void {
    this.loadAllUsers();
    this.manageUserService.updateUser$.subscribe(() => this.loadAllUsers());
  }

  loadAllUsers(): void {
    this.allUsersList$ = this.usersService.getAllUsers();
  }

  showUserDetails(userData: User): void {
    this.router.navigate(['manage-users/details', userData.id]);
  }

  editUserDetails(userData: User): void {
    this.router.navigate(['manage-users/edit', userData.id]);
  }

  createUser(): void {
    this.router.navigate(['manage-users/create']);
  }

}
