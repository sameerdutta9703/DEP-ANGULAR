import { Component, OnInit, Input } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';
import { User } from '../users.model';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  @Input() usersList: User[];
  @Input() showDetails: boolean;
  constructor(private usersService: UsersService) { }

  ngOnInit(): void {

  }

}
