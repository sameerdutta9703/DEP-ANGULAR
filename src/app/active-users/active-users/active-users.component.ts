import { Component, OnInit } from '@angular/core';
import {UsersService} from 'src/app/shared/users.service';
import { User } from 'src/app/shared/users.model';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  usersList: User[];
  showDetails = false;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersList=this.usersService.getActiveUsers();
  }

}
