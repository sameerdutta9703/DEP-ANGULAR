import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-activeusercomp',
  templateUrl: './activeusercomp.component.html',
  styleUrls: ['./activeusercomp.component.css']
})
export class ActiveusercompComponent implements OnInit {

  usersList = [];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.usersList = this.userService.users;
  }

}
