import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manage-user-creation',
  templateUrl: './manage-user-creation.component.html',
  styleUrls: ['./manage-user-creation.component.css']
})
export class ManageUserCreationComponent implements OnInit {

  @Output() listChanged: EventEmitter<any> = new EventEmitter();

  constructor(private usersService:UsersService) { }

  ngOnInit(): void {
  }

  createNewUser(mainForm) {
    this.usersService.createUser(
      mainForm.value
    ).subscribe(
      (result) => {
        console.log('Result: Create User API - ', result);
        mainForm.reset();
      },
      (error) => {
        console.log('Error: Create User API - ', error);
      },
      () => {
        console.log('Complete: Create User API');
      }
    );

      this.listChanged.emit();
  }

}
