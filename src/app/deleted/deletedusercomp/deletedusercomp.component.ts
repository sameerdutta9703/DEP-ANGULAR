import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';

@Component({
  selector: 'app-deletedusercomp',
  templateUrl: './deletedusercomp.component.html',
  styleUrls: ['./deletedusercomp.component.css']
})
export class DeletedusercompComponent implements OnInit {

  usersList = [];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.usersList=this.userService.users;
  }

}
