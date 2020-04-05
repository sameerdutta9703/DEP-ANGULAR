import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/shared/users.model';
import { UsersService } from 'src/app/shared/users.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-manage-user-updation',
  templateUrl: './manage-user-updation.component.html',
  styleUrls: ['./manage-user-updation.component.css']
})
export class ManageUserUpdationComponent implements OnInit {

  showEditableDetails: boolean = true;
  currentUser: User;
  userId: string;
  result: User;
  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngDoCheck() {
    console.log('Reactive Form Changes');
  }

  ngOnInit(): void {

    this.route.params.subscribe(
      (param) => {
        this.userId = param['id'];
        this.usersService.getUserDetails(param['id']).subscribe(
          (result) => {
            if (result !== undefined) {
              this.currentUser = result;
            }
            console.log('Result: Get User API - ', result);
          },
          (error) => {
            console.log('Error: Get User API - ', error);
          },
          () => {
            console.log('Complete: Get User API');
          }
        );
      }
    );
    console.log(this.userId);
    console.log(this.currentUser);
  }

  updateUser(mainForm) {
    this.usersService.updateUser(
      {
        ...mainForm.value,
        id: this.userId
      }
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
  }

}