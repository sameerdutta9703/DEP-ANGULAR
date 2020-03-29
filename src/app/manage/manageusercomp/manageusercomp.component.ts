import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/users.service';
import { RouterModule, Routes, Router } from '@angular/router';

@Component({
  selector: 'app-manageusercomp',
  templateUrl: './manageusercomp.component.html',
  styleUrls: ['./manageusercomp.component.css']
})
export class ManageusercompComponent implements OnInit {

  usersList = [];
  space = " ";

  constructor(private userService: UsersService, private router:Router) { }

  ngOnInit(): void {
    this.usersList = this.userService.users;
  }

  showDetails(id){
    this.router.navigate(['Manage', id]);
  }

}
