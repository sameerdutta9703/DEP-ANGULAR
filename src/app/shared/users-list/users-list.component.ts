import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';
import { User } from '../users.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  usersList: User[];
  @Input() route: String;

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {

    if (this.route === 'active-users') {
      this.usersList = this.usersService.getActiveUsers();
    }
    else if (this.route === 'deleted-users') {
      this.usersList = this.usersService.getDeletedUsers();
    }
    else if (this.route === 'manage-users') {
      this.usersList = this.usersService.getAllUsers();
    }

  }

}
