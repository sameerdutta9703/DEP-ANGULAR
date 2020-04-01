import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';
import { User } from 'src/app/shared/users.model';

@Component({
  selector: 'app-deleted-users',
  templateUrl: './deleted-users.component.html',
  styleUrls: ['./deleted-users.component.css']
})
export class DeletedUsersComponent implements OnInit {

  usersList: User[];
  showDetails = false;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
    this.usersList = this.usersService.getDeletedUsers();
  }

}
