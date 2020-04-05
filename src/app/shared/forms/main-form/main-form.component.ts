import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { User } from '../../users.model';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.css']
})
export class MainFormComponent implements OnInit {

  userId: string;
  @Input() currentUser: Observable<User>;

  mainForm: FormGroup = new FormGroup({
    firstName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
    ]),
    lastName: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(10)
    ]),
    login: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      this.passwordValidator(new RegExp('^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$')).bind(this)
    ]),
    age: new FormControl('', [
      Validators.required,
      Validators.maxLength(3),
    ]),    
  });


  @Output() valuesSubmitted: EventEmitter<FormGroup> = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
    if (this.currentUser) {
      this.currentUser.subscribe(
        (user) => {
          this.userId = user.id;
          this.mainForm.setValue({
            firstName: user.firstName,
            lastName: user.lastName,
            login: user.login,
            password: user.password,
            age: user.age
          });
        }
      )
    }
  }

  OnSubmitClicked() {
    this.valuesSubmitted.emit(this.mainForm);
  }

  passwordValidator(nameRe: RegExp): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const testMatch = nameRe.test(control.value);
      return testMatch ? null : { 'requireOneCharOneNumber': { value: control.value } };
    };
  }
  
}
