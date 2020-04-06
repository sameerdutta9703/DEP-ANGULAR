import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user/user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MainFormComponent } from './forms/main-form/main-form.component';
import { ValidatePasswordDirective } from './forms/validate-password.directive';


@NgModule({
  declarations: [
    UserComponent, 
    UsersListComponent, 
    UsersDetailsComponent, 
    MainFormComponent, ValidatePasswordDirective
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    UserComponent, 
    UsersListComponent, 
    UsersDetailsComponent, 
    MainFormComponent
  ]
})
export class SharedModule { }
