import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from '../../users.model';


@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  @Input() showEditableDetails: boolean;
  @Input() currentUser: User;

  mainForm: FormGroup = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    login: new FormControl(''),
    password: new FormControl('', [
      Validators.required
    ]),
    // confirmPassword: new FormControl(''),
    age: new FormControl('')
  });

  @Output() valuesSubmitted: EventEmitter<FormGroup> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if (this.showEditableDetails) {

      this.mainForm.valueChanges.subscribe((changes) => {
        console.log('Update Form valueChanges ', changes);
      });
  
      this.mainForm.statusChanges.subscribe((status) => {
        console.log('Update Form statusChanges ', status, this.mainForm);
      });

      console.log("This is from main form");
      console.log(this.currentUser);

      this.mainForm.setValue({
        firstName: this.currentUser.firstName,
        lastName: this.currentUser.lastName,
        login: this.currentUser.login,
        password: this.currentUser.password,
        age: this.currentUser.age,
      });
    }
  }

  OnSubmitClicked() {
    this.valuesSubmitted.emit(this.mainForm);
  }
}
