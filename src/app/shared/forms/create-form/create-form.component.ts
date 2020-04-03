import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.css']
})
export class CreateFormComponent implements OnInit {

  createForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    login: new FormControl(''),
    password: new FormControl(''),
    age: new FormControl(''),
  });

  constructor(private usersService: UsersService) { }

  ngOnInit(): void {
  }

  createNewUser() {
    this.usersService.createUser(
      this.createForm.value
    ).subscribe(
      (result) => {
        console.log('Result: Create User API - ', result);
        this.createForm.reset();
      },
      (error) => {
        console.log('Error: Create User API - ', error);
      },
      () => {
        console.log('Complete: Create User API');
      }
    );
  }
}
