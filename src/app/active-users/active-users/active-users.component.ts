import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';
import { User } from 'src/app/shared/users.model';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  activeUsersList: User[];
  showDetails: boolean = false;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.loadActiveUsers();
  }

  loadActiveUsers(): void {
    this.activeUsersList=this.usersService.getActiveUsers();
  }

  deactivateUser(id: number): void {
    this.usersService.changeStatus(id);
    this.loadActiveUsers();
  }

}
