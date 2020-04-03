import { Component, OnInit } from '@angular/core';
import { User } from '../../users.model';
import { UsersService } from '../../users.service';
import { ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-update-form',
  templateUrl: './update-form.component.html',
  styleUrls: ['./update-form.component.css']
})
export class UpdateFormComponent implements OnInit {

  currentUser: User;
  userId: string;

  updateForm: FormGroup = new FormGroup({
    password: new FormControl('', [
      Validators.required
    ]),
    age: new FormControl(''),
  });

  constructor(private usersService: UsersService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.updateForm.valueChanges.subscribe((changes) => {
      console.log('Update Form valueChanges ', changes);
    });

    this.updateForm.statusChanges.subscribe((status) => {
      console.log('Update Form statusChanges ', status, this.updateForm);
    });

    this.route.params.subscribe(
      (param) => {
        this.userId = param['id'];
        this.usersService.getUserDetails(param['id']).subscribe(
          (result) => {
            this.currentUser = result;
            this.updateForm.setValue({
              password: this.currentUser.password,
              age: this.currentUser.age,
            });
          }
        );
      }
    );
  }

  updateUser(){
    this.usersService.updateUser(
      {
        ...this.updateForm.value,
        id: this.userId
      }
    ).subscribe(
      () => {
        this.updateForm.reset();
      }
    );
  }

}
