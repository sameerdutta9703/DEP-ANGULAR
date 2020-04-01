import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';
import { User } from 'src/app/shared/users.model';

@Component({
  selector: 'app-all-users',
  templateUrl: './all-users.component.html',
  styleUrls: ['./all-users.component.css']
})
export class AllUsersComponent implements OnInit {

  usersList: User[];
  showDetails = true;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersList = this.usersService.getAllUsers();
  }

}
