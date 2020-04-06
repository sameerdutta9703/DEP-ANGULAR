import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';
import { User } from 'src/app/shared/users.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit {

  activeUsersList$: Observable<User[]>;
  showDetails: boolean = false;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.loadActiveUsers();
  }

  loadActiveUsers(): void {
    this.activeUsersList$=this.usersService.getActiveUsers();
  }

  deactivateUser(userData: User): void {
    this.usersService.changeStatus(userData).subscribe(
      () => this.loadActiveUsers()
    );
  }

}
