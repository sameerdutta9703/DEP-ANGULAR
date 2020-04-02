import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user/user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailsComponent } from './users-details/users-details.component';
import { UpdateFormComponent } from './forms/update-form/update-form.component';
import { CreateFormComponent } from './forms/create-form/create-form.component';

@NgModule({
  declarations: [
    UserComponent, 
    UsersListComponent, 
    UsersDetailsComponent, 
    UpdateFormComponent,
    CreateFormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserComponent, 
    UsersListComponent, 
    UsersDetailsComponent, 
    UpdateFormComponent,
    CreateFormComponent
  ]
})
export class SharedModule { }
