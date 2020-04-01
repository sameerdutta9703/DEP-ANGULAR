import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserComponent } from './user/user.component';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersDetailsComponent } from './users-details/users-details.component';

@NgModule({
  declarations: [
    UserComponent, 
    UsersListComponent, 
    UsersDetailsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    UserComponent, 
    UsersListComponent, 
    UsersDetailsComponent
  ]
})
export class SharedModule { }
