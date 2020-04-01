import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';
import { User } from 'src/app/shared/users.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  AllUsersList: User[];
  showDetails: boolean = true;

  constructor(private usersService: UsersService, private router: Router) { }

  ngOnInit(): void {
    this.AllUsersList = this.usersService.getAllUsers();
  }

  showUserDetails(id): void {
    this.router.navigate(['manage-users', id]);
  }
}
