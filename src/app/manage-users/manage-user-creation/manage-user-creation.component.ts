import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ManageUserService } from 'src/app/shared/manage-user.service';

@Component({
  selector: 'app-manage-user-creation',
  templateUrl: './manage-user-creation.component.html',
  styleUrls: ['./manage-user-creation.component.css']
})
export class ManageUserCreationComponent implements OnInit {

  constructor(private usersService: UsersService, private router: Router, private manageUserService: ManageUserService) { }

  ngOnInit(): void {
  }

  createNewUser(mainForm) {
    this.usersService.createUser(
      mainForm.value
    ).subscribe(
      (result) => {
        console.log('Result: Create User API - ', result);
        mainForm.reset();
        this.manageUserService.onUpdateUser();
        this.router.navigate(['/manage-users']);
      }
    );
  }

}
