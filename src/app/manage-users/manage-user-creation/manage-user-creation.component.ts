import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manage-user-creation',
  templateUrl: './manage-user-creation.component.html',
  styleUrls: ['./manage-user-creation.component.css']
})
export class ManageUserCreationComponent implements OnInit {

  @Output() listChanged: EventEmitter<any> = new EventEmitter();

  constructor(private usersService: UsersService,  private router: Router) { }

  ngOnInit(): void {
  }

  createNewUser(mainForm) {
    this.usersService.createUser(
      mainForm.value
    ).subscribe(
      (result) => {
        console.log('Result: Create User API - ', result);
        mainForm.reset();
        this.listChanged.emit();
        this.router.navigate(['manage-users/']);
        console.log("navigating back to list");
      }
    );    
  }

}
